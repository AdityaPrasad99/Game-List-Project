import { Avatar, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const menuOptions = ["Games", "Reviews", "More"];

const meraBhai =
  "https://media.licdn.com/dms/image/C5603AQE5TpcPt10Qmg/profile-displayphoto-shrink_800_800/0/1660753702303?e=2147483647&v=beta&t=q6ostRlKUt7LJDxAp3qzjlLbMxYAYFNa4c7kc_BdyQw";

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openProfileOptions = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="appbar">
      <div className="appbar-container">
        <div className="logo">Ad games</div>
        <div className="menu">
          {menuOptions.map((menuOption) => (
            <span>{menuOption}</span>
          ))}
        </div>
        <div className="search-bar">
          {/* Search */}
          <SearchBar />
        </div>
        <div className="">
          {/* Avatar */}
          <Avatar src={meraBhai} onClick={openProfileOptions} />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={openProfileOptions}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography className="!px-4 py-1">Logout</Typography>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
