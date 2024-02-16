import { FormikHelpers } from 'formik';

export type FormikSubmit<InitialValues> = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<any>;
