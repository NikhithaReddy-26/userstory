export type rowtype = {
  id: number;
  name: string;
  email: string;
  occupation: string;
  moredetails?: string;
};
export type moreInfotype = {
  id: number;
  name: string;
  email: string;
  occupation: string;
  techstack: string;
};
export interface RowProps {
  rows: rowtype[];
  moreinfo: moreInfotype[];
}
export interface ModalBoxProps {
    open: boolean;
    onClose: () => void;
    children: any
  }
  