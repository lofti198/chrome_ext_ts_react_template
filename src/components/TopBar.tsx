import React, { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";

//@ts-ignore
const TopBar = ({
  //@ts-ignore
  closeHandler,
  //@ts-ignore
  setAnchorEl,
  //@ts-ignore
  anchorEl,
}) => {
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-first-part">
          {/* <FormControlLabel
            control={
              <Switch
                checked={pickingMode !== PickingMode.None}
                onChange={(e) =>
                  setPickingMode(
                    e.target.checked ? PickingMode.DataFields : PickingMode.None
                  )
                }
              />
            }
            label="Setup"
          /> */}
        </div>
        <div className="top-bar-second-part">
          <Button variant="contained" onClick={() => {}}>
            Collect
          </Button>
        </div>
        <div className="top-bar-third-part">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon style={{ width: "24px", height: "24px" }} />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            style={{ zIndex: 2147483645 }}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              divider={true}
              onClick={() => {
                setAnchorEl(null);
                closeHandler();
              }}
            >
              Hide
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                window?.open("https://t.me/AlexAP31", "_blank")?.focus();
              }}
            >
              Contact developer
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default TopBar;
