import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from '@mui/material/Select';
import Chip from "@mui/material/Chip";
import ChipInput from "material-ui-chip-input";
import { Select } from "@mui/material";
// import DeleteIcon from "material-icon"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import events from '../../assets/events'
import './skills.css'

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// const [skillsarray, setskillsarray] = React.useState(["Test"]);
var skills;

export default function Skill() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tags: []
  //   }
  // };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isselect, setselect] = React.useState(false);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  var array = [];

  const [newarray, setnewarray] = React.useState([]);
  const [value, setvalue] = React.useState();
  const [isdisable, setdisable] = React.useState(false);

  const handleChange = (event, value) => {
    // setskillsarray([newvalue]);
    // array.push(event.target.innerText)
    // console.log(array)
    console.log(value)
    if(value.length >= 3){
      setdisable(true)
    }
    else{
      setdisable(false)
    }
    setnewarray(value)
    // console.log(skillsarray)
  }

  function handleChange2(event){
    // setskillsarray([newvalue]);
    // array.push(event.target.innerText)
    console.log(event)
    // console.log(skillsarray)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSaveClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    for(var i=0;i<newarray.length;i++){
      array.push(newarray[i].label)
    }
    // setskillsarray(array)
    skills = array
    // console.log(JSON.stringify(skills))
  };
    // fetch('http://localhost:8000/student/',{
    //   method:'POST',
    //   body:JSON.stringify(skillsarray)
    //   // headers: {
    //   //   'Content-type': 'application/json; charset=UTF-8',
    //   // },
    // }).then((resp)=>{resp.json().then((result)=>{console.warn("result",result)}) });
    // if(personName !== []){
    //   setselect(true);
    // }
    // else if(personName === []){
    //   setselect(false);
    // }
    // console.log(isselect)

  // console.log(JSON.stringify(skillsarray))

  const handleDelete = (chipToDelete) => {
    // setnewarray((newarray) => newarray.filter((element) => element !== chipToDelete))
    array.splice(array.indexOf(chipToDelete),1)
    console.log(array)
    // console.log("aa")
  };

  return (
    <div>
      <div className="select">
      {isselect?(
        <Button onClick={handleClickOpen} variant="contained" color="success">Selected</Button>
      ):(
        <Button onClick={handleClickOpen} variant="outlined">Select Your Top 3 Skills</Button>
      )}
      </div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add Your Skills</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-multiple-name-label">Skills</InputLabel> */}
        <Autocomplete
        multiple
        id="tags-outlined"
        options={events}
        freeSolo
        getOptionLabel={(option) => option.label}
        // filterSelectedOptions
        // defaultValue={[events[0]]}
        onChange={handleChange}
        getOptionDisabled={option => isdisable}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="standard"
            label="Skills"
            required={true}
            // placeholder="Favorites"
          />
        )}
      />
      </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {skills}
// export {skillsarray}
