import React from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
// import TextField from "@mui/material/TextField";

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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100vh',
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

function Profile() {
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isselect, setselect] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <div><h1>Hi {JSON.parse(localStorage.getItem('interiit_data')).data.name}!</h1>
    <div className="card4">
          <TableContainer component={Paper} sx={{ maxWidth: 450 }}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    LDAP:
                  </TableCell>
                  <TableCell align="right">{JSON.parse(localStorage.getItem('interiit_data')).data.roll_number}</TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Batch:
                  </TableCell>
                  <TableCell align="right">{JSON.parse(localStorage.getItem('interiit_data')).data.batch}</TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Branch:
                  </TableCell>
                  <TableCell align="right">{JSON.parse(localStorage.getItem('interiit_data')).data.branch}</TableCell>
                </TableRow>
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Programme:
                  </TableCell>
                  <TableCell align="right">{JSON.parse(localStorage.getItem('interiit_data')).data.programme}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
    </div>
    </div>
  )
}

export default Profile
