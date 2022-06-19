import {Box} from "@mui/system";

import MainHeader from "./MainHeader";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Box sx={{bgcolor: "#424242", height: "100vh"}}>
      <MainHeader />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
