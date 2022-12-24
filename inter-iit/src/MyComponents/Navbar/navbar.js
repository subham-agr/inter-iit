import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import ITClogo from "../../assets/ITClogoWhite.png";
import "./navbar.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Dashboard", "Logout"];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("interiit_data");
    localStorage.removeItem("interiit_code");
    localStorage.clear();
    window.location.replace("http://localhost:3000");
  };

  const profilelink =
    "https://gymkhana.iitb.ac.in" +
    JSON.parse(localStorage.getItem("interiit_data")).data.picture;

  return (
    <div className="navbar">
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "rgb(12,109,253)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {/* <img src={ITClogo} alt="" /> */}
            <Avatar alt="Bombay76" src="/static/images/avatar/logo.jpg" sx={{margin: "1rem"}}/>
            <Tooltip title="Inter IIT 11.0">

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/dashboard/profile"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
              >
              Inter-IIT 11.0

            </Typography>
              </Tooltip>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key="Logout" onClick={handleLogout}>
                  <Typography textAlign="center">
                    <button onClick={handleLogout}  className="btn">
                      Logout
                    </button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* <img src={ITClogo} alt="" /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Inter-IIT
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <a  className="Link">
                <Button
                  className="btn-logout"
                  sx={{ my: 2, color: "white", display: props.visible?"none":"block" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </a>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Avatar">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={profilelink} 
                  />
                </IconButton>
              </Tooltip>
              {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={(e) => {handleClick(e)}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
