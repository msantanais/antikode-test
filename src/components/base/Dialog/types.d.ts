export type DialogPropsType = {
  id?: string;
  children?: React.ReactNode;
  customClass?: string;
  visible: boolean;
  title?: string;
  handleClose: React.MouseEventHandler<HTMLDivElement>
}