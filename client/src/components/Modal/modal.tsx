import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AdminLogin } from "../UsersLogin/adminLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "auto",
  width: {
    xs: "80%",
    xl: "35%",
  },
  overflow: "scroll",
  overflowX: "clip",
  height: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>Login</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AdminLogin />
        </Box>
      </Modal>
    </div>
  );
}
