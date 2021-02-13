import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
}));
export default function CheckboxesTags() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <div style={{ marginBottom: 10, display: 'flex' }}>
        <div>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Filter"
                placeholder="Favorites"
              />
            )}
          />
        </div>
        <div
          style={{
            display: 'flex',
            marginLeft: 'auto',
            alignItems: 'center',
            right: 10,
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <TextField id="date-1" type="date" defaultValue="2021-02-12" />
          <Typography style={{ margin: 10 }}>To</Typography>
          <TextField id="date-2" type="date" defaultValue="2021-02-13" />
          <button style={{ marginLeft: 30, padding: 10 }}>
            <Tooltip title="Export" style={{ color: 'green' }}>
              <ExitToAppIcon />
            </Tooltip>
          </button>
        </div>
      </div>
    </Paper>
  );
}

const top100Films = [
  { title: '20 Response Awaited' },
  { title: '20 Accepted ' },
  { title: '20 Review Requested ' },
  { title: '20 GRN Done ' },
  { title: '20 Delayed ' },
  { title: '2000 Packaging ' },
  { title: '20 PO Actions ' },
];
