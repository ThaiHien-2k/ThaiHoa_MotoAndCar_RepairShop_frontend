import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ExpandMore from "@mui/icons-material/ExpandMore";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleMenuOpen = (event, menu) => {
    // handleMenuClose();
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const menuItems = [
    { key: "homePage", label: "Trang chủ" },
    { key: "introduce", label: "Giới thiệu" },
  ];

  const productItems = ["Product 1", "Product 2", "Product 3"];
  const serviceItems = ["Service 1", "Service 2", "Service 3"];
  const knowledgeItems = ["Knowledge 1", "Knowledge 2", "Knowledge 3"];

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#111111" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "left",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.key}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              key="product"
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                "&:hover": {
                  color: "red",
                },
              }}
              onMouseEnter={(e) => handleMenuOpen(e, "product")}
              onMouseLeave={handleMenuClose}
            >
              Sản phẩm
              <ExpandMore />
            </Button>

            <Button
              key="service"
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                "&:hover": {
                  color: "red",
                },
              }}
              onMouseEnter={(e) => handleMenuOpen(e, "service")}
              // onMouseLeave={handleMenuClose}
            >
              Dịch vụ
              <ExpandMore />
            </Button>

            <Button
              key="knowledge"
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                "&:hover": {
                  color: "red",
                },
              }}
              onMouseEnter={(e) => handleMenuOpen(e, "knowledge")}
              // onMouseLeave={handleMenuClose}
            >
              Kiến thức
              <ExpandMore />
            </Button>
            <Button
              key="contact"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              Liên hệ
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && currentMenu === "service"}
        onClose={handleMenuClose}
      >
        {serviceItems.map((item) => (
          <MenuItem key={item} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && currentMenu === "product"}
        onClose={handleMenuClose}
      >
        {productItems.map((item) => (
          <MenuItem key={item} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && currentMenu === "knowledge"}
        onClose={handleMenuClose}
      >
        {knowledgeItems.map((item) => (
          <MenuItem key={item} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Header;
