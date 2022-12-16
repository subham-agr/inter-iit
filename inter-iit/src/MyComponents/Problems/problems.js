import React from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
// import "./dashboard.css";
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

function Problems() {
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
    <div className="card4">
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Problem Statement2</Typography>
              </AccordionSummary>
              <AccordionDetails className="details">
                <Typography>Link to the Problem Statement</Typography>
                {/* <Button>Sign</Button> */}
                <div className="toselect">
                  {isselect ? (
                    <Button
                      onClick={handleClickOpen}
                      variant="contained"
                      color="success"
                    >
                      Selected
                    </Button>
                  ) : (
                    <Button onClick={handleClickOpen} variant="outlined">
                      Sign
                    </Button>
                  )}
                </div>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                  <DialogTitle>Sign for the Problem</DialogTitle>
                  <DialogContent>
                    <Box
                      component="form"
                      sx={{ display: "flex", flexWrap: "wrap" }}
                    >
                      <FormControl sx={{ m: 1, width: 300 }}>
                        {/* <InputLabel id="demo-multiple-name-label">Skills</InputLabel> */}
                        <TextField
                          id="outlined-textarea"
                          label="Understanding"
                          placeholder="Describe briefly the breakdown of the PS into domains and subparts"
                          multiline
                          margin="normal"
                        //   className="gapping"
                        />
                        <TextField
                          id="outlined-textarea"
                          label="Approach"
                          placeholder="Explain your approach along with tentative timelines"
                          multiline
                          //   className="gapping"
                          // sx={{marginbottom: 1}}
                          margin="normal"
                        />
                        <TextField
                          id="outlined-textarea"
                          label="Commitments"
                          placeholder="Describe your commitments in above mentioned timeleine"
                          multiline
                          margin="normal"
                        //   className="gapping"
                        />
                        {/* <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          renderValue={() => (
            <></>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {personName.map((value) => (
                // <Chip key={value} label={value} />
                <Chip label={value} variant="outlined" key={value} onDelete={handleDelete(value)}/>
              ))}
        </Box> */}
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </div>
  )
}

export default Problems
