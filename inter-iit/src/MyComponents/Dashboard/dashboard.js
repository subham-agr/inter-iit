import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";
import "./dashboard.css";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

function Dashboard() {
    if(localStorage.getItem('isregistered') === 'false'){
      window.location.replace("http://localhost:3000/register")
    }
  function handleLogout() {
    localStorage.removeItem("interiit_data");
    localStorage.removeItem("interiit_code");
    localStorage.clear();
    window.location.replace("http://localhost:3000");
  }
  const [isadmin, setisadmin] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);
  useEffect(() => {
    console.log(isadmin);
  }, [isadmin]);
  const fetchComments = async () => {
    const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;

    const newPost = {
      roll_number: JSON.parse(localStorage.getItem("interiit_data")).data
        .roll_number,
    };
    const response = await axios.post(
      "http://localhost:8000/check_admin",
      newPost,
      { headers: { Authorization: `Token ${token}` } }
    );
    setisadmin(response.data);
    console.log(isadmin);
  };

  return (
    <div>
      <Navbar visible="false" />
      <div>
        <Grid container>
          <Grid item xs={2}>
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

                  <Link to="problems" className="notext">
                    <Button
                      startIcon={<QuizIcon />}
                      sx={{ width: "100%", marginBottom: 1, color: "white" }}
                    >
                      <Typography sx={{ fontSize: "0.5rem", color: "white" }}>
                        Problem statements
                      </Typography>
                    </Button>
                  </Link>

                  {isadmin.isadmin === true ? (
                    <Link to="/admin_login" className="notext">
                      <Button
                        startIcon={<DashboardIcon />}
                        sx={{ width: "100%", marginBottom: 1, color: "white" }}
                      >
                        <Typography sx={{ fontSize: "0.5rem", color: "white" }}>
                          Admin
                        </Typography>
                      </Button>
                    </Link>
                  ) : (
                    <></>
                  )}

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
          <Grid item xs={10}>
            <Item>
              <div className="outletflex">
                <Outlet />
              </div>
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
