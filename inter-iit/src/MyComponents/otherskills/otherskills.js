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
import events from "../../assets/events";
import './otherskills.css'

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// const [otherskillsarray, setotherskills] = React.useState([]);
// export {otherskillsarray}
var otherskills;

export default function Otherskill() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tags: []
  //   }
  // };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  var array = [];

  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );

    array.push(event.target.innerHTML)
    console.log(array)
  };

  // const handleDelete = (chipToDelete) => () => {
  //   setPersonName((personName) =>
  //     personName.filter((person) => person !== chipToDelete)
  //   );
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    console.log(array)
    // setotherskills(array)
    otherskills = array
    console.log(otherskills)
  };

  // const handleDelete = (chipToDelete) => () => {
  //   setPersonName((personName) => personName.filter((person) => person !== chipToDelete))
  // };

  return (
    <div>
      <div className="select">
      <Button onClick={handleClickOpen} variant="outlined">Select Skills</Button>
      </div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add Your Skills</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, width: 300 }}>
          <Autocomplete
          multiple
          id="tags-outlined"
          options={events}
          getOptionLabel={(option) => option.label}
          // filterSelectedOptions
          // defaultValue={[events[0]]}
          onChange={(event)=>handleChange(event)}
          renderInput={(params) => (
            <TextField
              {...params}
              // variant="standard"
              label="OtherSkills"
              // placeholder="Favorites"
            />
            )}
          />
        </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {otherskills}