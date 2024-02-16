export type DropdownPropsType = {
  id?: string;
  children?: React.ReactNode;
  customClass?: string;
  visible: boolean;
}

export type DropdownMenuPropsType = {
  id?: string;
  key?: string;
  children?: React.ReactNode;
  customClass?: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>
}