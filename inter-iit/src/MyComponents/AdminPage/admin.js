import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import "./admin.css";
import axios from "axios";
import { Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { red } from "@mui/material/colors";
// import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function Admin() {
  if (localStorage.getItem("ps_data") === null) {
    window.location.replace("http://localhost:3000/admin_login");
  }

  const [order_adminlist, setorder_admin] = React.useState([]);
  const [isordered, setordered] = useState(false);
  const [isdispatched, setdisptached] = useState(true);
  const [isdelivered, setdelivered] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;

  //   const admin_token = localStorage.getItem("techpointsadmin_token");

  const [inputs, setInputs] = useState({});

  const handleForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/order_admin", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${admin_token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setorder_admin(res.data);
  //         console.log(res.data);
  //       });
  //   }, []);

  const login_data = {
    username: localStorage.getItem("admin_username"),
    password: localStorage.getItem("admin_password"),
  };

  const [psdata, setpsdata] = React.useState();

  axios.post("http://localhost:8000/ps_admin", login_data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      // setorder_admin(res.data)
      console.log(res);
      if (res.data.success) {
        setpsdata(res.data)
        delete psdata["success"];
        console.log(psdata)
        // localStorage.setItem("techpointsadmin_token", res.data.token);
        // window.location.replace("http://localhost:3000/admin");
      } else if (res.data.success == false) {
        psdata = {"success": true}
        window.location.replace("http://localhost:3000/admin_login");
        alert("Invalid credentials!");
      }
    });

  // var psdata = JSON.parse(localStorage.getItem('ps_data'))

  // for (let i = 0; i < Object.keys(psdata).length - 1; i++) {
  //   var lengtharray = Object.values(psdata)[i];
  //   console.log(Object.values(psdata)[i]);
  //   // for(let j=0; j<lengtharray; j++){
  //   //     // console.log(Object.values(psdata)[i][j])
  //   // }
  //   // console.log(i[0][0])
  // }

  const [coupons, setcoupon] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
    setOpen1(true);
    console.log(inputs);
    const data = inputs;
    axios
      .put("http://localhost:8000/coupons", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // setorder_admin(res.data)
        console.log(res);
        setcoupon(res.data);
        // setcoupon(res.data)
      });
  };

  const handleClose = () => {
    setOpen(false);
    // console.log(inputs)
  };

  const handleClose1 = () => {
    setOpen1(false);
    // console.log(inputs)
  };

  function handleClick(event) {
    // console.log(event.target.id)
    const data = {
      order_id: event.target.id,
      tentative: value,
    };
    if (value === null) {
      alert("Please fill the Tentative Delivery");
    } else {
      //   axios
      //     .post("http://localhost:8000/order_admin", data, {
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Token ${admin_token}`,
      //       },
      //     })
      //     .then((res) => {
      //       // setorder_admin(res.data)
      //       console.log(res);
      //     });
      window.location.reload(true);
    }
  }

  function handleClick1(event) {
    // console.log(event.target.id)
    const data = {
      order_id: event.target.id,
    };
    // axios
    //   .post("http://localhost:8000/order_admin", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Token ${admin_token}`,
    //     },
    //   })
    //   .then((res) => {
    //     // setorder_admin(res.data)
    //     console.log(res);
    //   });
    window.location.reload(true);
  }

  function handleOrder(event) {
    setordered(true);
    setdisptached(false);
    handleClick(event);
    // window.location.reload(true);
  }

  function handleDispatch(event) {
    setdisptached(true);
    setdelivered(false);
    handleClick(event);
    window.location.reload(true);
  }

  function handleDeliver(event) {
    setdelivered(true);
    handleClick(event);
    window.location.reload(true);
  }

  const [value, setValue] = React.useState(null);
  // const [isdisable, setdisable] = React.useState(true)
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  function Logout() {
    localStorage.removeItem("techpointsadmin_token");
    window.location.replace("http://localhost:3000/admin_login");
  }

  return (
    <div className="margin">
      <div className="heading">
        <h1>ADMIN PAGE</h1>
      </div>
      <div className="searchbar">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search with PS Name"
            inputProps={{ "aria-label": "search products" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton> */}
        </Paper>
      </div>
      <div>
        <Button onClick={Logout}>Logout</Button>
      </div>

      {Object.keys(psdata).map((key, index) => (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{key}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(psdata[key]).map((item) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>{psdata[key][item][1]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="table-box">
                      <TableContainer component={Paper} sx={{ maxWidth: 450 }}>
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">
                          <TableBody>
                            <TableRow
                              // key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                Phone No:
                              </TableCell>
                              <TableCell align="right">
                                {
                                  JSON.parse(
                                    localStorage.getItem("interiit_data")
                                  ).data.roll_number
                                }
                              </TableCell>
                            </TableRow>
                            <TableRow
                              // key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                Top Skill:
                              </TableCell>
                              <TableCell align="right">
                                {
                                  JSON.parse(
                                    localStorage.getItem("interiit_data")
                                  ).data.batch
                                }
                              </TableCell>
                            </TableRow>
                            <TableRow
                              // key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                Other Skills:
                              </TableCell>
                              <TableCell align="right">
                                {
                                  JSON.parse(
                                    localStorage.getItem("interiit_data")
                                  ).data.branch
                                }
                              </TableCell>
                            </TableRow>
                            <TableRow
                              // key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                Resume:
                              </TableCell>
                              <TableCell align="right">
                                {
                                  JSON.parse(
                                    localStorage.getItem("interiit_data")
                                  ).data.programme
                                }
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <div className="comment-box">
                        <Button
                          startIcon={<AddIcon />}
                          color="success"
                          variant="outlined"
                          onClick={handleClickOpen}
                        >
                          Add Comment
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Add Comment</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Add comment for the student
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="comment"
                              label="Comment"
                              type="textbox"
                              fullWidth
                              variant="standard"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Submit</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
