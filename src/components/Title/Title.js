import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./Title.css";
import Keyboard from "../keyborad/Keyboard";

export default function Title({ setOpen, open, setTextTitle }) {
  let [text, setText] = useState("");

  return (
    <div className={`Alert_modal `}>
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
        }}
      >
        <div className="modal_wrapper">
          <div className="modal_content">
            <h2 variant="subtitle1" gutterBottom>
              Title...
            </h2>
            <Keyboard valid={false} setText={setText} />
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
