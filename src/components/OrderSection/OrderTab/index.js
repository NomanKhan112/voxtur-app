import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductForm from "../../ProductForm";
import LoanInfoForm from "../../LoanInfoForm";
import ContactForm from "../../ContactForm";
import SubmitData from "../../SubmitData";
import { styles } from "../../../styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            backgroundColor: styles.color.black,
            minHeight: "100vh",
          }}
        >
          <>{children}</>
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const OrderTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: styles.color.lightBlack,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#68b184",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="flex-wrap "
          centered
        >
          <Tab label="product" sx={{ color: "#e5e5e5" }} {...a11yProps(0)} />
          <Tab label="load info" sx={{ color: "#e5e5e5" }} {...a11yProps(1)} />
          <Tab label="contacts" sx={{ color: "#e5e5e5" }} {...a11yProps(2)} />
          <Tab label="submit" sx={{ color: "#e5e5e5" }} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoanInfoForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SubmitData />
      </TabPanel>
    </Box>
  );
};

export default OrderTab;
