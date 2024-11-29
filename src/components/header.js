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
import { Link } from "react-router-dom";

function Header() {
    const [anchorEl, setAnchorEl] = useState({
        product: null,
        service: null,
        knowledge: null,
    });

    const handleMenuOpen = (event, menu) => {
        setAnchorEl((prev) => ({ ...prev, [menu]: event.currentTarget }));
    };

    const handleMenuClose = (menu) => {
        setAnchorEl((prev) => ({ ...prev, [menu]: null }));
    };

    const menuItems = [
        { key: "homePage", label: "Trang chủ", path: "/" },
        { key: "introduce", label: "Giới thiệu", path: "/about" },
        { key: "contact", label: "Liên hệ", path: "/contact" },
    ];

    const productItems = [
        { label: "Xe máy", path: "/" },
        { label: "Oto", path: "/" },
        { label: "Khác", path: "/" },
    ];

    const serviceItems = [
        { label: "Sửa chữa", path: "/" },
        { label: "Bảo dưỡng", path: "/" },
        { label: "Rửa xe", path: "/" },
        { label: "Khác", path: "/" },
    ];

    const knowledgeItems = [
        { label: "Kiến thức sửa chữa", path: "/" },
        { label: "Kiến thức bảo dưỡng", path: "/" },
        { label: "Lái xe an toàn", path: "/" },
    ];

    return (
        <AppBar position="sticky" style={{ backgroundColor: "#111111" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
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
                                component={Link}
                                to={item.path}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                    "&:hover": { color: "red" },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        {/* Product Menu */}
                        <Box
                            onMouseEnter={(e) => handleMenuOpen(e, "product")}
                            onMouseLeave={() => handleMenuClose("product")}
                        >
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    "&:hover": { color: "red" },
                                }}
                            >
                                Sản phẩm
                                <ExpandMore />
                            </Button>
                            <Menu
                                anchorEl={anchorEl.product}
                                open={Boolean(anchorEl.product)}
                                onClose={() => handleMenuClose("product")}
                                MenuListProps={{
                                    onMouseLeave: () =>
                                        handleMenuClose("product"),
                                }}
                            >
                                {productItems.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        component={Link}
                                        to={item.path}
                                        onClick={() =>
                                            handleMenuClose("product")
                                        }
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Service Menu */}
                        <Box
                            onMouseEnter={(e) => handleMenuOpen(e, "service")}
                            onMouseLeave={() => handleMenuClose("service")}
                        >
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    "&:hover": { color: "red" },
                                }}
                            >
                                Dịch vụ
                                <ExpandMore />
                            </Button>
                            <Menu
                                anchorEl={anchorEl.service}
                                open={Boolean(anchorEl.service)}
                                onClose={() => handleMenuClose("service")}
                                MenuListProps={{
                                    onMouseLeave: () =>
                                        handleMenuClose("service"),
                                }}
                            >
                                {serviceItems.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        component={Link}
                                        to={item.path}
                                        onClick={() =>
                                            handleMenuClose("service")
                                        }
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Knowledge Menu */}
                        <Box
                            onMouseEnter={(e) => handleMenuOpen(e, "knowledge")}
                            onMouseLeave={() => handleMenuClose("knowledge")}
                        >
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    "&:hover": { color: "red" },
                                }}
                            >
                                Kiến thức
                                <ExpandMore />
                            </Button>
                            <Menu
                                anchorEl={anchorEl.knowledge}
                                open={Boolean(anchorEl.knowledge)}
                                onClose={() => handleMenuClose("knowledge")}
                                MenuListProps={{
                                    onMouseLeave: () =>
                                        handleMenuClose("knowledge"),
                                }}
                            >
                                {knowledgeItems.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        component={Link}
                                        to={item.path}
                                        onClick={() =>
                                            handleMenuClose("knowledge")
                                        }
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
