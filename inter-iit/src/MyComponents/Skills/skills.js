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

export default function Skill() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tags: []
  //   }
  // };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [isselect, setselect] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleDelete = (chipToDelete) => () => {
    setPersonName((personName) =>
      personName.filter((person) => person !== chipToDelete)
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    // if(personName !== []){
    //   setselect(true);
    // }
    // else if(personName === []){
    //   setselect(false);
    // }
    // console.log(isselect)
  };

    

  // const handleDelete = (chipToDelete) => () => {
  //   setPersonName((personName) => personName.filter((person) => person !== chipToDelete))
  // };

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
        getOptionLabel={(option) => option.label}
        // filterSelectedOptions
        // defaultValue={[events[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="standard"
            label="Skills"
            // placeholder="Favorites"
          />
        )}
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
    </div>
  );
}
