type CalendarColumnType = {
  xAxis: number;
  yAxis: number;
  date: number;
  events: any[];
  disabled: boolean,
  isOpen: boolean,
};

type PointType = {
  xAxis: number;
  yAxis: number;
}

type EventType = {
  id?: string | undefined;
  xAxis?: number;
  yAxis?: number;
  name?: string;
  time_start?: string;
  time_end?: string;
  guest?: string;
  markerColor?: string;
}