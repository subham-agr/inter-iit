import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import Fab from "@mui/material/Fab";
import "./dashboard.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import events from "../../assets/events";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100vh",
  borderRadius: 0,
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isselect, setselect] = React.useState(false);
  function handleLogout() {
    localStorage.removeItem("interiit_data");
    localStorage.removeItem("interiit_code");
    localStorage.clear();
    window.location.replace("http://localhost:3000");
  }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;
    const data = {
      roll_number: JSON.parse(localStorage.getItem("interiit_data")).data
        .roll_number,
    };
    axios
      .post("http://localhost:8000/check_reg", data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        console.log(resp.data.success);
        if (resp.data.success === false) {
          window.location.replace("http://localhost:3000/register");
          localStorage.setItem('isregistered',false)
        }
        else{
          localStorage.setItem('isregistered',true)
        }
      });
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Navbar visible="false" />
      <div>
        <Grid container>
          <Grid item xs={3}>
            <Item>
              <div
                className="button-cont"
                fullWidth
                style={{ maxWidth: 250, marginLeft: "8%" }}
              >
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                  variant="contained"
                  sx={{ width: "100%", boxShadow: "none" }}
                >
                  <Link to="problems" className="notext">
                    <Button
                      startIcon={<DashboardIcon />}
                      sx={{ width: "100%", marginBottom: 1, color: "white" }}
                    >
                      <Typography sx={{ fontSize: "0.5rem", color: "white" }}>
                        Dashboard
                      </Typography>
                    </Button>
                  </Link>
                  <Link to="profile" className="notext">
                    <Button
                      startIcon={<AccountCircleIcon />}
                      sx={{ width: "100%", marginBottom: 1, color: "white" }}
                    >
                      <Typography sx={{ fontSize: "0.5rem", color: "white" }}>
                        Profile
                      </Typography>
                    </Button>
                  </Link>
                  <Link to="/" className="notext" onClick={handleLogout}>
                    <Button
                      startIcon={<LogoutIcon />}
                      sx={{ width: "100%", marginBottom: 1, color: "white" }}
                    >
                      <Typography sx={{ fontSize: "0.5rem", color: "white" }}>
                        Logout
                      </Typography>
                    </Button>
                  </Link>
                </ButtonGroup>
                {/* <Button startIcon={<DashboardIcon />} sx={{width: 200, marginBottom: 1, color: "black"}}>Dashboard</Button> */}
                {/* <Button startIcon={<DashboardIcon />} sx={{width: 90, color: "black"}}>
  
  <Typography sx={{fontSize: 10}}>

  Dashboard
        </Typography>
</Button> */}
              </div>
              {/* <div className="button-cont">
            <Link to="profile" className="notext">
              <Button startIcon={<AccountCircleIcon />} sx={{width: 90, color: "black"}}>
  
  <Typography sx={{fontSize: 10}}>

  Profile
        </Typography>
        </Button>
                </Link>
            </div> */}
              {/* <div className="button-cont" fullWidth>
            <Link to="problems" className="notext"><Button startIcon={<AccountCircleIcon />} sx={{width: 200, color: "black"}}>Problems</Button></Link>
            </div> */}
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <Outlet />
            </Item>
          </Grid>
        </Grid>
      </div>
      <div className="footers-dash">
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
