import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaUserLarge } from "react-icons/fa6";
import { RiShoppingCartFill } from "react-icons/ri";
import SignIn from "../../pages/SignIn/SignIn";
const DialogComp = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <button className={props.mainButtonClass} onClick={handleClickOpen}>
        <h4 className="Dialog-Comp-MainButton-H4-label">
          {props.mainButtonLabel}
        </h4>
        {props.WhichPage == "header" && props.whatPart == "PartSignIN-UP" && (
          <FaUserLarge className="Header-Comp-TopPart-icn" />
        )}
        {props.WhichPage == "header" && props.whatPart == "PartCart" && (
          <RiShoppingCartFill className="Header-Comp-TopPart-icn" />
        )}
      </button>
      {(!props.WhichPage || !props.whatPart) && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {props.ButtonNO == "1" && (
              <Button onClick={handleClose}> {props.labelOne} </Button>
            )}
            {props.ButtonNO == "2" && (
              <>
                <Button onClick={handleClose}> {props.labelOne} </Button>
                <Button onClick={handleClose} autoFocus>
                  {props.labelTwo}
                </Button>
              </>
            )}
            {props.ButtonNO == "3" && (
              <>
                <Button onClick={handleClose}> {props.labelOne} </Button>
                <Button onClick={handleClose} autoFocus>
                  {props.labelTwo}
                </Button>
                <Button onClick={handleClose} autoFocus>
                  {props.labelThree}
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      )}
      {props.WhichPage == "header" && props.whatPart == "PartSignIN-UP" && (
        <Dialog
          open={open}
          onClose={handleClose}
          className="Dialog-Comp-DialogTAG"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.WhichPage == "header" &&
                props.whatPart == "PartSignIN-UP" && <SignIn />}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </Fragment>
  );
};

export default DialogComp;
