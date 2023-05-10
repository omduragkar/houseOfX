import { Box, Modal, Typography } from "@mui/material";

const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: {
  xs:"90%",
  md:"75%",
  lg:"50%"
},
bgcolor: 'background.paper',
boxShadow: 24,
borderRadius:5,
p: 4,
};

const BasicModal = ({open, handleClose, children}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {children}
        </Box>
    </Modal>
  );
};

export default BasicModal;
