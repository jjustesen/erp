import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

const TabHeader = ({ children, tabs }) => {
  const [value, setValue] = useState(0);
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {tabs &&
          tabs.map((tab) => {
            return (
              <Tab label={tab.nome} disabled={tab.disabled} {...a11yProps(0)} />
            );
          })}
      </Tabs>
    </AppBar>
  );
};

export default TabHeader;
