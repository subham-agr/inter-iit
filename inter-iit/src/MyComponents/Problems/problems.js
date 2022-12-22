import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import "./problems.css";
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
import { Outlet } from "react-router-dom";
import axios from "axios";
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

function Problems() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isselect, setselect] = React.useState(false);
  const [ps, setps] = React.useState([]);
  const [understanding, setunderstanding] = React.useState();
  const [approach, setapproach] = React.useState();
  const [commitment, setcommitment] = React.useState();
  const [psid, setpsid] = React.useState();

  function handleunderstand(event) {
    setunderstanding(event.target.value);
  }

  function handleapproach(event) {
    setapproach(event.target.value);
  }

  function handlecommit(event) {
    setcommitment(event.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleSignOpen(event) {
    setOpen(true);
    setpsid(event.target.id);
    console.log(event.target.id);
  }

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const data1 = {
    roll_number: JSON.parse(localStorage.getItem("interiit_data")).data
      .roll_number,
    ps_id: psid,
    approach: approach,
    understanding: understanding,
    commitments: commitment,
  };

  function handleDelete(event){
    const deletedata = {
      roll_number: JSON.parse(localStorage.getItem('interiit_data')).data.roll_number,
      ps_id: event.target.id
    }
    axios.put("http://localhost:8000/sign", deletedata, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        console.log(resp.data);
      });
    window.location.reload(true);
  }

  const handleSubmit = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    axios.post("http://localhost:8000/sign", data1, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        if (resp.data.success == true) {
          console.log("succesfully registered");
        }
      });

    window.location.reload(true);
  };

  const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;
  const data = {
    roll_number: JSON.parse(localStorage.getItem("interiit_data")).data.roll_number,
  };

  useEffect(() => {
    axios.post("http://localhost:8000/ps", data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        console.log(resp.data);
        setps(resp.data);
      });
  }, []);

  return (
    <div className="card4">
      <Card sx={{ minWidth: 200, maxWidth: 800 }}>
        <CardContent>
          {ps.map((item) => (
            <div>
              <Card sx={{ minWidth: 200, maxWidth: 800, overflowX: "auto" }}>
                <CardContent>
                  <div className="link-card">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                      sx={{marginRight: "2rem"}}
                    >
                      <a target="_blank" className="headlink" href={item.link}>
                        <span className="tablefont">{item.name}</span>
                      </a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{marginRight: "2rem"}}>
                      <a target="_blank" href={item.extra_link}>
                        Extra Information
                      </a>
                    </Typography>
                    {item.deadline === null ? (
                      <Typography
                      variant="body2"
                      sx={{marginRight: "2rem"}}
                      // sx={{ color: "green" }}
                    >
                      Yet to be Declared
                    </Typography>
                    ):(
                      <Typography
                      variant="body2"
                      color="success"
                      sx={{ color: "green", marginRight: "2rem" }}
                    >
                      Deadline-{item.date}
                    </Typography>
                    )}
                    {item.signed === true && item.deadline === false ? (
                      <Button sx={{marginRight: "2rem"}} id={item.id} onClick={handleDelete} color="error" variant="outlined" size="small">
                        Unsign
                      </Button>
                    ) : (
                      <></>
                    )}
                    {item.signed === false && item.deadline === false ? (
                      <Button sx={{marginRight: "2rem"}} id={item.id} onClick={handleSignOpen} variant="outlined" size="small">
                        Sign
                      </Button>
                    ) : (
                      <></>
                    )}
                    {item.signed === true && item.deadline === true ? (
                      <Button sx={{marginRight: "2rem"}} id={item.id} disabled color="success" variant="outlined" size="small">
                        Signed
                      </Button>
                    ) : (
                      <></>
                    )}
                    {item.signed === false && item.deadline === true ? (
                      <Button sx={{marginRight: "2rem"}} id={item.id} disabled variant="outlined" size="small">
                        Sign
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Dialog fullWidth={true} maxWidth={"xl"} disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Sign for the Problem</DialogTitle>
                <DialogContent>
                  <Box
                    component="form"
                    sx={{ display: "flex", flexWrap: "wrap", width: 1150 }}
                  >
                    <FormControl sx={{ m: 1, width: 1150 }}>
                      {/* <InputLabel id="demo-multiple-name-label">Skills</InputLabel> */}
                      <TextField
                        id="outlined-textarea"
                        fullWidth
                        label="Understanding"
                        placeholder="Describe briefly the breakdown of the PS into domains and subparts"
                        multiline
                        margin="normal"
                        onChange={handleunderstand}
                        //   className="gapping"
                      />
                      <TextField
                        id="outlined-textarea"
                        label="Approach"
                        placeholder="Explain your approach along with tentative timelines"
                        multiline
                        onChange={handleapproach}
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
                        onChange={handlecommit}
                        //   className="gapping"
                      />
                    </FormControl>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleSubmit}>Ok</Button>
                </DialogActions>
              </Dialog>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Problems;
