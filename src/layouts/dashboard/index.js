import { Box, Stack, IconButton, Divider } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"
import {Nav_Buttons} from "../../data/index.js";
import { Gear } from "phosphor-react";
const DashboardLayout = () => {

const theme = useTheme();

const [selected, setSelected] = useState(0);

console.log(theme);
  return (
    <>
<Box 
p={2}
  sx={{
        backgroundColor: theme.palette.background.paper, 
        boxShadow: "0px 0px 2px  rgba(0, 0, 0, 0.25)", 
        height:"100vh",
         width: 100 }}>

  <Stack direction="column" alignItems={"center"} sx={{width: "100%"}} spacing={3}>
  <Box 
  sx={{
  backgroundColor: theme.palette.primary.main,
  height: 64,
  width: 64,
  borderRadius: 1.5,
}}>

<img src={Logo} alt={"Chat App Logo"} />
</Box>
  <Stack 
  sx={{
    width: "max-content"}} 
    direction="column" alignItems="center" 
    spacing={3}>

  {Nav_Buttons.map((el) => (
       <Box
       p={1} 
       sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1.5,
       }}
    >

<IconButton sx={{width:"max-content", color: "#fff"}} key={el.index}>{el.icon }</IconButton>
       </Box>
     ))}
       <Divider />
       <IconButton>
        <Gear/>
       </IconButton>
  </Stack>
      

       </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
