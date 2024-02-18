export interface ButtonProps {
  customClass?: string;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  buttonType?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
  styleType?: 'filled' | 'outline' | 'text';
  customClassSpinner?: string;
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
