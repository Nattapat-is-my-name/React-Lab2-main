import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";

const style = {
  mt: 3,
  fontSize: "1.3rem",
  Pt:1.5,
  borderRadius: "20px"
};

function Navbar() {
  return (
    <>
      <Typography sx={{ fontSize: "2rem", fontWeight: 1000, color: "#727373" }}>
        Tasks
      </Typography>
      <Tabs orientation="vertical">
        <Tab label="Incoming" sx={style} />
        <Tab label="Today" sx={style} />
        <Tab label="Calendar" sx={style} />
      </Tabs>
     
    </>
  );
}
export default Navbar;
