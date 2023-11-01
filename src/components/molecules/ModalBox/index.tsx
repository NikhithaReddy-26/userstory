import { Modal } from "@mui/material";
import { ModalBoxProps } from "../../../utils/interfaces";

export const ModalBox = ({ open, onClose, children }: ModalBoxProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};
