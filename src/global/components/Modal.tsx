import React, { ReactElement } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface Props {
  modalTitle: string;
  modalContent: string;
  closeModal: Function;
  isModalOpen: boolean;
}

export default function Modal({
  modalTitle,
  modalContent,
  closeModal,
  isModalOpen,
}: Props): ReactElement {
  return (
    <div>
      <Dialog open={isModalOpen} onClose={closeModal()}>
        <DialogTitle id={modalTitle}></DialogTitle>
        <DialogContent>
          <DialogContentText> {modalContent}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
