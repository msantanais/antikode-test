'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import useGeneral from '@/hooks/general/useGeneral';
import Dropdown from '@/components/base/dropdown';
import DropdownMenu from '@/components/base/dropdown/menu';
import Dialog from '@/components/base/dialog';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db.model';
import Spinner from '@/components/base/spinner';
import FormCreateEvent from '@/app/calendar/components/FormCreateEvent';
import { useAppDispatch } from '@/utils/redux/hooks';
import { setAxis } from '@/store/calendar';

interface Event {
  id?: string | undefined;
  xAxis?: number;
  yAxis?: number;
  name?: string;
  time?: string;
  guest?: string;
  markerColor?: string;
}

const createCalendarBoard = (): CalendarColumnType[][] => {
  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  // Set starting day from sunday -> monday
  let startingDay = firstDayOfMonth.getDay();
  if (startingDay === 0) startingDay = 6;
  else startingDay--;

  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendar: CalendarColumnType[][] = [];
  let day = 1;
  let prevMonthDay = lastDayOfPrevMonth - startingDay + 1;
  for (let row = 0; row < 5; row++) {
    calendar[row] = [];
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < startingDay) {
        // Previous month
        calendar[row][col] = {
          xAxis: row,
          yAxis: col,
          date: prevMonthDay,
          events: [],
          disabled: true,
          isOpen: false,
        };
        prevMonthDay++;
      } else if (day > totalDaysInMonth) {
        // Next month
        calendar[row][col] = {
          xAxis: row,
          yAxis: col,
          date: day - totalDaysInMonth,
          events: [],
          disabled: true,
          isOpen: false,
        };
        day++;
      } else {
        // Current month
        calendar[row][col] = {
          xAxis: row,
          yAxis: col,
          date: day,
          events: [],
          disabled: false,
          isOpen: false,
        };
        day++;
      }
    }
  }
  return calendar;
};

const CalendarBoard = () => {
  const eventList = useLiveQuery(() => db.events.toArray());
  const dispatch = useAppDispatch();
  const { generateDate } = useGeneral();
  const [calendarBoard, setCalendarBoard] = useState<CalendarColumnType[][]>(
    createCalendarBoard()
  );
  const [dialog, setDialog] = useState({
    data: {},
    visible: {
      create: false,
    },
  });
  const [loading, setLoading] = useState(true);

  const [selectedEvent, setSelectedEvent] = useState('');

  const handleCommand = async ({
    type,
    datum,
    event,
    closeOpenedMenu = true,
  }: {
    type: string;
    datum?: CalendarColumnType;
    event?: any;
    closeOpenedMenu?: boolean;
  }) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (closeOpenedMenu) {
      setCalendarBoard((prevData) => {
        const newData = JSON.parse(JSON.stringify(prevData));
        const isOpenedMenu: { row: number; column: number }[] = [];
        newData.forEach((row: any[], rowIndex: number) => {
          row.forEach((cell: CalendarColumnType, colIndex: number) => {
            if (cell.isOpen === true) {
              isOpenedMenu.push({ row: rowIndex, column: colIndex });
            }
          });
        });
        if (isOpenedMenu.length > 0) {
          const index = {
            xAxis: isOpenedMenu[0].row,
            yAxis: isOpenedMenu[0].column,
          };
          newData[index.xAxis][index.yAxis] = {
            ...newData[index.xAxis][index.yAxis],
            isOpen: false,
          };
        }
        return newData;
      });
    }
    switch (type) {
      case 'create':
        const axis = {
          xAxis: datum ? datum.xAxis : 0,
          yAxis: datum ? datum.yAxis : 0,
        };
        dispatch(setAxis(axis));
        setDialog((prevData) => {
          const newData = JSON.parse(JSON.stringify(prevData));
          newData.visible.create = !newData.visible.create;
          return newData;
        });
        break;
      case 'update':
        console.log(`update with datum: `, datum);
        break;
      case 'delete':
        console.log(`delete with datum: `, datum);
        break;
      default:
        break;
    }
  };

  const handleOpenMenu = ({ xAxis, yAxis }: PointType) => {
    setCalendarBoard((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const isOpenedMenu: { row: number; column: number }[] = [];
      newData.forEach((row: any[], rowIndex: number) => {
        row.forEach((cell: CalendarColumnType, colIndex: number) => {
          if (cell.isOpen === true) {
            isOpenedMenu.push({ row: rowIndex, column: colIndex });
          }
        });
      });
      if (isOpenedMenu.length > 0) {
        const index = {
          xAxis: isOpenedMenu[0].row,
          yAxis: isOpenedMenu[0].column,
        };
        newData[index.xAxis][index.yAxis] = {
          ...newData[index.xAxis][index.yAxis],
          isOpen: false,
        };
      }

      // Set Data
      newData[xAxis][yAxis] = {
        ...newData[xAxis][yAxis],
        isOpen: !newData[xAxis][yAxis].isOpen,
      };

      if (newData[xAxis][yAxis].events.length === 0) {
        setSelectedEvent('');
      }
      return newData;
    });
  };

  const handleSelectEvent = (id: string) => {
    setSelectedEvent(id);
  };

  const handleSetEvent = ({
    xAxis = 0,
    yAxis = 0,
    datum,
    type = 'push',
  }: {
    xAxis?: number;
    yAxis?: number;
    datum?: object | any[];
    type: 'push' | 'replace';
  }) => {
    setCalendarBoard((prevState) => {
      const newData = JSON.parse(JSON.stringify(prevState));
      switch (type) {
        case 'push':
          newData[xAxis][yAxis].events.push(datum);
          break;
        case 'replace':
          newData[xAxis][yAxis].events = datum;
          break;
        default:
          break;
      }
      return newData;
    });
  };

  useEffect(() => {
    const events = eventList || [];
    const groupedEvents = events.reduce<{ [key: string]: Event[] }>(
      (acc, curr) => {
        const key = `${curr.xAxis}-${curr.yAxis}`;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
      },
      {}
    );
    const keys = Object.keys(groupedEvents);
    keys.forEach((key) => {
      const splittedKey = key.split('-');
      const xAxis = parseInt(splittedKey?.[0]);
      const yAxis = parseInt(splittedKey?.[1]);
      handleSetEvent({
        xAxis: xAxis,
        yAxis: yAxis,
        datum: groupedEvents[key],
        type: 'replace',
      });
    });

    // False loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [eventList]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <div className="grid grid-cols-7 absolute w-full pt-4">
        {generateDate({ style: 'eu' })?.map((day) => {
          return (
            <div key={day.key} className="text-sm text-center">
              {day.label}
            </div>
          );
        })}
      </div>
      <div className="px-4 pt-12 pb-4 h-full">
        <div className="grid grid-rows-5 h-full divide-y border border-solid border-[#e5e7eb]">
          {calendarBoard.map((row, rowIndex) => (
            <div
              key={`row${rowIndex}`}
              className={cn({ 'grid grid-cols-7 divide-x': true })}
            >
              {row.map((column: CalendarColumnType) => (
                <div
                  key={`column${column.xAxis}${column.yAxis}`}
                  className={cn({
                    'pt-[24px] px-[16px] relative cursor-pointer': true,
                  })}
                  onClick={() =>
                    handleOpenMenu({ xAxis: column.xAxis, yAxis: column.yAxis })
                  }
                >
                  <div
                    className={cn({
                      'text-neutral-400': column.disabled,
                      'text-right z-10 relative text-sm': true,
                      'bg-white rounded-full flex ml-auto p-1 h-[30px] w-[30px] items-center justify-center':
                        column.events?.length > 0,
                    })}
                  >
                    {column.date}
                  </div>
                  <Dropdown
                    visible={column.isOpen && column.events.length === 0}
                    customClass="-right-[56px]"
                  >
                    <DropdownMenu
                      handleClick={(event) =>
                        handleCommand({ type: 'create', event, datum: column })
                      }
                    >
                      Create Event
                    </DropdownMenu>
                  </Dropdown>
                  {column.events?.length > 0 && (
                    <div
                      className={cn({
                        'absolute grid h-full w-full top-0 left-0': true,
                        [`grid-rows-${column.events?.length}`]:
                          column.events.length,
                      })}
                    >
                      {column.events?.map((event) => {
                        return (
                          <div
                            key={event.id}
                            className="p-2"
                            style={{ backgroundColor: event.markerColor }}
                            onClick={() => handleSelectEvent(event.id)}
                          >
                            {event.name}
                            <Dropdown
                              visible={
                                column.isOpen && selectedEvent === event.id
                              }
                              customClass="-right-[56px]"
                            >
                              {column.events.length < 3 && (
                                <DropdownMenu
                                  handleClick={(e) =>
                                    handleCommand({
                                      type: 'create',
                                      event: e,
                                      datum: column,
                                    })
                                  }
                                >
                                  Create Event
                                </DropdownMenu>
                              )}
                              <DropdownMenu
                                handleClick={() =>
                                  handleCommand({
                                    type: 'update',
                                    datum: event,
                                  })
                                }
                              >
                                Update Event
                              </DropdownMenu>
                              <DropdownMenu
                                handleClick={() =>
                                  handleCommand({
                                    type: 'delete',
                                    datum: event,
                                  })
                                }
                              >
                                Delete Event
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dialog
        visible={dialog.visible.create}
        title="Create Event"
        handleClose={(event) =>
          handleCommand({ type: 'create', closeOpenedMenu: false, event })
        }
      >
        <FormCreateEvent />
      </Dialog>
      <div
        id="closeDialogCreate"
        onClick={(event) =>
          handleCommand({ type: 'create', closeOpenedMenu: false, event })
        }
        className="hidden"
      />
    </div>
  );
};

export default CalendarBoard;
