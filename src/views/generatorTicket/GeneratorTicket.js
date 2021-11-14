import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableContainer } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, products, date,total, customer, ) {
  return { name,  products, date,total, customer,  };
}

const rows = [
  createData('Frozen yoghurt', 159, "24-05-2021 09:00:34","$233,450","Cliente"),
  createData('Ice cream sandwich', 237, "24-05-2021 09:00:34","$233,450", "Cliente"),
  createData('Eclair', 262,  "12-05-2021 09:00:34","$233,450","Cliente"),
  createData('Cupcake', 305,  "10-05-2021 09:00:34","$233,450","Cliente"),
  createData('Gingerbread', 356, "12-05-2021 09:00:34","$233,450", "Cliente"),
];


export default function GeneratorTicket() {

  const [valor, setValor] = useState(false);
  console.log(valor);
  return (
    <div className='col-xs-12 col-md-offset-3 text-dark' style={{ padding: 40,textAlign:"center", minHeight:"100vh"}}>
      <TableContainer component={Paper}>
        <Table bordered hover size='sm' striped>
          <TableHead>
            <TableRow>
              <StyledTableCell>FOLIO</StyledTableCell>
              <StyledTableCell align="right"> PRODUCTOS</StyledTableCell>
              <StyledTableCell align="right">FECHA</StyledTableCell>
              <StyledTableCell align="right">CLIENTE</StyledTableCell>
              <StyledTableCell align="right">TOTAL</StyledTableCell>
              <StyledTableCell align="right">ACCIONES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.products}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
                <StyledTableCell align="right">{row.customer}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" onClick={()=>setValor(!valor)}>Ver Detalles</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}