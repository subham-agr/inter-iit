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
import { withStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
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
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// import {detectNewline} from 'detect-newline';
import { detectNewline } from "detect-newline";

const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "red", // (default alpha is 0.38)
    },
  },
})(TextField);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Admin() {
  // if (localStorage.getItem("ps_data") === null) {
  //   window.location.replace("http://localhost:3000/admin_login");
  // }

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

  // const [psdata2, setpsdata2] = React.useState({});
  // var psdata;
  // axios.post("http://localhost:8000/psdata", login_data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //     },
  //   })
  //   .then((res) => {
  //     // setorder_admin(res.data)
  //       psdata=res.data
  //       console.log(psdata);
  //       // setpsdata2(res.data)
  //       // console.log(psdata2)
  //       // const psdata = res.data;
  //       // this.setState({psdata});
  //       // localStorage.setItem("techpointsadmin_token", res.data.token);
  //       // window.location.replace("http://localhost:3000/admin");
  //   });

  const [comments, setComments] = useState([]);
  const [studcomment, setstudcomment] = useState();
  const [rollnumber, setroll] = useState();
  const [problemid, setproblem] = useState();
  const [newcomment, setnewcomment] = useState();
  useEffect(() => {
    if (localStorage.getItem("adminloginsuccess") === null) {
      window.location.replace("http://localhost:3000/admin_login");
    }
    fetchComments();
  }, []);
  useEffect(() => {
    console.log(comments);
  }, [comments]);
  const fetchComments = async () => {
    const response = await axios("http://localhost:8000/psdata");
    setComments(response.data);
    console.log(response.data);
  };

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

  const handleClickOpen = (event) => {
    setOpen(true);
    setstudcomment(event.target.id);
    setroll(event.target.elementTiming);
    setproblem(event.target.name);
    console.log(event);
    // console.log(rollnumber, problemid)
  };

  function handleData(event) {
    setroll(event.target.ariaLabel);
    setproblem(event.target.ariaLevel);
    console.log(event);
  }

  const handleSubmit = () => {
    setOpen(false);
    setOpen1(true);
    console.log(inputs);
    const data = inputs;
  };

  const handleClose = () => {
    setOpen(false);
    // console.log(inputs)
  };

  function handlecomment(event) {
    setnewcomment(event.target.value);
  }

  const handleCommentClose = (event) => {
    setOpen(false);
    console.log(event);
    const data = {
      roll_number: rollnumber,
      ps_id: problemid,
      comment: newcomment,
    };
    axios
      .put("http://localhost:8000/ps_admin", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // setorder_admin(res.data)
        console.log(res);
        // setcoupon(res.data)
      });
    fetchComments();
  };

  const handleClose1 = () => {
    setOpen1(false);
    // console.log(inputs)
  };

  function Logout() {
    localStorage.removeItem("adminloginsuccess");
    window.location.replace("http://localhost:3000/admin_login");
  }

  return (
    <div className="margin">
      <div className="heading">
        <h1>ADMIN PAGE</h1>
      </div>
      <div>
        <Button onClick={Logout}>Logout</Button>
      </div>

      {Object.keys(comments).map((key, index) => (
        <div>
          <Accordion sx={{ margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{key}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(comments[key]).map((item) => (
                <Accordion sx={{ margin: 1 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{ maxWidth: 1250 }}
                  >
                    <div className="link-card1">
                      <Typography variant="body2" className="mobileview" sx={{ marginRight: "0.5rem" }}>
                        {comments[key][item][2]}
                      </Typography>
                      <Typography variant="body2" className="mobileview" sx={{ marginRight: "0.5rem" }}>
                        {comments[key][item][3]}
                      </Typography>
                      <Typography variant="body2" className="mobileview" sx={{ marginRight: "0.5rem" }}>
                        {comments[key][item][11]}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <TableContainer
                        component={Paper}
                        sx={{ maxWidth: 450, marginBottom: "2rem" }}
                      >
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
                                Top Skill:
                              </TableCell>
                              <TableCell align="right">
                                {comments[key][item][4]}
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
                                {comments[key][item][5]}
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
                              <a
                          href={
                            "http://localhost:8000" + comments[key][item][6]
                          }
                          target="_blank"
                        >
                          Link to Resume
                        </a>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TableContainer
                            component={Paper}
                            sx={{ maxWidth: 1250 }}
                          >
                            <Table
                              sx={{ minWidth: 450 }}
                              aria-label="simple table"
                            >
                              <TableBody>
                                <TableRow
                                  // key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                    maxHeight: "20px",
                                  }}
                                >
                                  {/* <TableCell component="th" scope="row">
                                Understanding:
                              </TableCell> */}
                                  <TableCell
                                  // align="right"
                                  >
                                    <div>
                                      <h3>Understanding:</h3>
                                      <div className="heightfix">
                                        {comments[key][item][7]}
                                      </div>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        <Grid item xs={12}>
                          <TableContainer
                            component={Paper}
                            sx={{ maxWidth: 1250 }}
                          >
                            <Table
                              sx={{ minWidth: 450 }}
                              aria-label="simple table"
                            >
                              <TableBody>
                                <TableRow
                                  // key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell>
                                    <div>
                                      <h3>Approach:</h3>
                                      <div className="heightfix">
                                        {comments[key][item][8]}
                                      </div>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        <Grid item xs={12}>
                          <TableContainer
                            component={Paper}
                            sx={{ maxWidth: 1250 }}
                          >
                            <Table
                              sx={{ minWidth: 450 }}
                              aria-label="simple table"
                            >
                              <TableBody>
                                <TableRow
                                  // key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell>
                                    <div>
                                      <h3>Commitments:</h3>
                                      <div className="heightfix">
                                        {comments[key][item][9]}
                                      </div>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        <Grid item xs={12}>
                          <TableContainer
                            component={Paper}
                            sx={{ maxWidth: 1250 }}
                          >
                            <Table
                              sx={{ minWidth: 450 }}
                              aria-label="simple table"
                            >
                              <TableBody>
                                <TableRow
                                  // key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell>
                                    <div>
                                      <h3>Comments:</h3>
                                      <div className="heightfix">
                                      <pre>{comments[key][item][10]}</pre>
                                        {/* <Typography variant="body2">
                                          {comments[key][item][10]}
                                        </Typography> */}
                                        {/* <TextField
                                          multiline
                                          margin="dense"
                                          id="showcomment"
                                          type="textbox"
                                          variant="outlined"
                                          disabled={true}
                                          fullWidth
                                          // sx={{color: "black"}}
                                          defaultValue={comments[key][item][10]}
                                        /> */}
                                      </div>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                      </Grid>
                      <div className="comment-box">
                        <Button
                          startIcon={<AddIcon />}
                          color="success"
                          variant="outlined"
                          onClick={handleClickOpen}
                          id={comments[key][item][10]}
                          elementTiming={comments[key][item][1]}
                          name={key}
                        >
                          Add Comment
                        </Button>
                        <Dialog
                          sx={{ height: "80vh" }}
                          fullWidth
                          maxWidth={"xl"}
                          open={open}
                          onClose={handleClose}
                        >
                          <DialogTitle>Add Comment</DialogTitle>
                          <DialogContent>
                            <TextField
                              multiline
                              autoFocus
                              margin="dense"
                              id="comment"
                              label="Comment"
                              type="textbox"
                              fullWidth
                              variant="outlined"
                              defaultValue={studcomment}
                              onChange={handlecomment}
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleCommentClose}>Submit</Button>
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
