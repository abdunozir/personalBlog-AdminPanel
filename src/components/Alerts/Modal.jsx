import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./Modal.css";
import Keyboard from "../keyborad/Keyboard";

export default function Modal({ alertText, setOpen, open, setTextTitle }) {
  let [text, setText] = useState("");

  return (
    <div className={`Alert_modal ${open ? "Alert_modal_open" : ""}`}>
      <Box
        sx={{
          width: "90%",
          maxWidth: 500,
          background: "#607d8b",
          padding: "20px",
        }}
      >
        <div className="modal_wrapper">
          <div className="modal_content">
            <Typography variant="subtitle1" gutterBottom>
              {alertText}
            </Typography>
            <Keyboard setText={setText} />
          </div>
          <div className="modal_btn">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#e3f2fd",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  color: "#424242",
                },
              }}
              onClick={() => {
                setTextTitle(text);
                setOpen(false);
              }}
            >
              Set
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
