import { FormikProps } from 'formik';

export interface InputProps {
  id: string;
  name?: string;
  className?: string;
  inputType?: 'floating' | 'inline' | 'without-label' | 'label-outside';
  placeholder?: string;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e?:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  customMargin?: boolean;
  inputWidthClasses?: string;
  inputClasses?: string;
  inputGroupClasses?: string;
  type: string;
  label?: string;
  errorMessage?: string;
  value?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  showErrorMessage?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  maxLength?: number;
  formik?: FormikProps<InitialValues>;
}

export interface InputRefProps {
  focusInput: () => void;
}
