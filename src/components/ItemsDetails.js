import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(vender, vendercode, po, duedate, committed, status) {
  return {
    vender,
    vendercode,
    po,
    duedate,
    committed,
    status,
    history: [
      {
        description: 'Cartion-Azithro 3x10 300 GSM FBB',
        poLine: 1,
        poValue: 350000,
        qtyOrderd: 300000,
        qtyShipped: 3000000,
        grQuantity: 30000000,
        uom: 'EA',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.vender}
        </StyledTableCell>
        <StyledTableCell>{row.vendercode}</StyledTableCell>
        <StyledTableCell>{row.po}</StyledTableCell>
        <StyledTableCell>{row.duedate}</StyledTableCell>
        <StyledTableCell>{row.committed}</StyledTableCell>
        <StyledTableCell>{row.status}</StyledTableCell>
        <StyledTableCell>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              <AttachFileIcon />
            </Button>
          </label>
        </StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow style={{ background: 'gray' }}>
                    <TableCell>Description</TableCell>
                    <TableCell>PO Line</TableCell>
                    <TableCell>PO Value -INR</TableCell>
                    <TableCell>Qty Ordered</TableCell>
                    <TableCell>Qty Shipped</TableCell>
                    <TableCell>Gr Quantity</TableCell>
                    <TableCell>UOM</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.description}
                      </TableCell>
                      <TableCell>{historyRow.poLine}</TableCell>
                      <TableCell>{historyRow.poValue}</TableCell>
                      <TableCell>{historyRow.qtyOrderd}</TableCell>
                      <TableCell>{historyRow.qtyShipped}</TableCell>
                      <TableCell>{historyRow.grQuantity}</TableCell>
                      <TableCell>{historyRow.uom}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    'Allen Packs',
    321345,
    4504567863,
    '2020-01-05',
    '2020-05-07',
    'GPN Posted'
  ),
  createData(
    'Ghatotkach Packs',
    321262,
    4504564682,
    '2020-01-05',
    '2020-05-07',
    'GPN Posted'
  ),
  createData(
    'Essel Propack',
    326413,
    4504567510,
    '2020-01-05',
    '2020-05-07',
    'Accepted'
  ),
  createData(
    'Essel Propack',
    321252,
    4504565425,
    '2020-01-05',
    '2020-05-07',
    'Review Req'
  ),
  createData(
    'Scarpion Packaging',
    321345,
    4504567863,
    '2020-01-05',
    '2020-05-07',
    'Accepted'
  ),
  createData(
    'Scarpion Packaging',
    321345,
    4504567863,
    '2020-01-10',
    '2020-05-09',
    'Review Req'
  ),
  createData(
    'APRO films',
    3219720,
    45045676845,
    '2020-02-05',
    '2020-09-10',
    'GPN Posted'
  ),
  createData(
    'Paperworks',
    3219761,
    4504568455,
    '2020-01-05',
    '2020-05-07',
    'Dispatched'
  ),
  createData(
    'Input films Ltd',
    321842,
    4504567863,
    '2020-01-05',
    '2020-05-07',
    'GPN Posted'
  ),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ background: 'gray' }}>
            <TableCell />
            <TableCell>Vendor</TableCell>
            <TableCell>Vendor Code</TableCell>
            <TableCell>PO#</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Committed Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Upload</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
