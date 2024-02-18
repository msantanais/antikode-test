'use client';
import { useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { object, string } from 'yup';
import cn from 'classnames';
import { FormikSubmit } from '@/utils/types/form';
import useGeneral from '@/hooks/general/useGeneral';
import Input from '@/components/form/Input';
import Button from '@/components/base/Button';
import IconUser from '@/components/icons/IconUser';
import { db } from '@/db/db.model';
import { useAppSelector } from '@/utils/redux/hooks';

type InitialValues = {
  [key: string]: string;
  name: string;
  time_start: string;
  time_end: string;
  guest: string;
};
const FormUpdateEvent = () => {
  const { xAxis, yAxis, selectedEvent } = useAppSelector((state) => state.calendar);
  const { inputWithPattern, generateRandomId, generatePastelColor } =
    useGeneral();
  const [initialValues] = useState({
    name: selectedEvent.name || '',
    time_start: selectedEvent.time_start || '',
    time_end: selectedEvent.time_end || '',
    guest: selectedEvent.guest || '',
  });
  const validationSchema = object().shape({
    name: string().required('Event name is required'),
  });
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (
      values: InitialValues,
      formikHelpers: FormikHelpers<InitialValues>
    ) => {
      handleSubmit(values, formikHelpers);
    },
  });

  const convertToArray = (value: string) => {
    return value.split(',');
  };
  const handleChange = (params: { value: string | undefined; key: string }) => {
    const { value, key } = params;
    switch (key) {
      case 'name':
        formik.setFieldValue(key, value);
        break;
      case 'time_start':
      case 'time_end':
        if (value) {
          const onlyNumericAndTimeFormat = value
            .replace(/[^0-9]/gi, '')
            .replace(/\s+/g, '')
            .replace(/^(\d{2})(\d{2})$/, function (_, hours, minutes) {
              hours = Math.min(parseInt(hours, 10), 23)
                .toString()
                .padStart(2, '0');
              minutes = Math.min(parseInt(minutes, 10), 59)
                .toString()
                .padStart(2, '0');
              return `${hours}${minutes}`;
            });
          const formattedTime = inputWithPattern(
            'xx:xx',
            onlyNumericAndTimeFormat
          );
          formik.setFieldValue(key, formattedTime);
        } else {
          formik.setFieldValue(key, value);
        }
        break;
      case 'guest':
        formik.setFieldValue(key, value);
        break;
      default:
        break;
    }
  };
  
  const handleCloseDialog = () => {
    const closeDialogUpdate = document.getElementById('closeDialogUpdate')
    if(closeDialogUpdate) {
      closeDialogUpdate.click()
    }
  }

  const handleSubmit: FormikSubmit<InitialValues> = async (
    values,
    { setSubmitting }
  ) => {
    const payload = {
      body: {
        data: {
          id: selectedEvent.id,
          xAxis: xAxis,
          yAxis: yAxis,
          name: values.name,
          time_start: values.time_start,
          time_end: values.time_end,
          guest: values.guest,
          markerColor: selectedEvent.markerColor || generatePastelColor(),
        },
      },
    };
    await db.events.put(payload.body.data);
    setSubmitting(false);
    handleCloseDialog()
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        name="name"
        type="name"
        inputType="floating"
        placeholder="Event Name"
        label="Event Name"
        inputGroupClasses="!mb-24px"
        formik={formik}
        value={formik.values.name}
        errorMessage={formik.errors.name}
        onChange={(event) =>
          handleChange({
            value: event?.target.value,
            key: 'name',
          })
        }
        onBlur={formik.handleBlur}
      />
      <div className="flex">
        <Input
          id="time_start"
          name="time_start"
          type="password"
          inputType="floating"
          placeholder="Start Time"
          label="Start Time"
          inputGroupClasses="mr-2"
          maxLength={5}
          formik={formik}
          value={formik.values.time_start}
          errorMessage={formik.errors.time_start}
          onChange={(event) =>
            handleChange({
              value: event?.target.value,
              key: 'time_start',
            })
          }
          onBlur={formik.handleBlur}
        />
        <Input
          id="time_end"
          name="time_end"
          type="password"
          inputType="floating"
          placeholder="End Time"
          label="End Time"
          inputGroupClasses="ml-2"
          maxLength={5}
          formik={formik}
          value={formik.values.time_end}
          errorMessage={formik.errors.time_end}
          onChange={(event) =>
            handleChange({
              value: event?.target.value,
              key: 'time_end',
            })
          }
          onBlur={formik.handleBlur}
        />
      </div>
      <Input
        id="guest"
        name="guest"
        type="password"
        inputType="floating"
        placeholder="13.msantanais@gmail.com,someone@antikode.com..."
        label="Guest"
        inputGroupClasses="!mb-[12px]"
        formik={formik}
        value={formik.values.guest}
        errorMessage={formik.errors.guest}
        onChange={(event) =>
          handleChange({
            value: event?.target.value,
            key: 'guest',
          })
        }
        onBlur={formik.handleBlur}
      />
      <div className="mb-[24px]">
        {convertToArray(formik.values.guest).map((value, index) => {
          return (
            value && (
              <div
                key={`${value}-${index}`}
                className={cn({
                  'flex items-center': true,
                  'mb-[12px]':
                    convertToArray(formik.values.guest).length !== index + 1,
                })}
              >
                <div className="mr-[16px]">
                  <IconUser />
                </div>
                <div>{value}</div>
              </div>
            )
          );
        })}
      </div>
      <div className="flex items-center justify-end">
        <Button
          buttonType="light-filled"
          styleType="outline"
          customClass="mr-4"
          onClick={handleCloseDialog}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
          customClassSpinner="border-white !w-[24px] !h-[24px]"
        >
          Update Event
        </Button>
      </div>
    </form>
  );
};

export default FormUpdateEvent;
