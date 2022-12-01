import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   firstname: string = " ",
//   lastname: string = " ",
//   email: string = " ",
//   phoneNumber: number = 1,
//   address: string = "1"
// ) {
//   return { firstname, lastname, email, phoneNumber, address };
// }

// const rows = [
//   createData("Frozen yoghurt", "lastname", "email", 7854556, "address"),
// ];

export default function OrderDataTable(props) {
  const [tableData, setTableData] = useState<any>([]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //   console.log("res,...", res.data);
    setTableData(res.data);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>

            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Email ID</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.firstname}>
              <StyledTableCell component="th" scope="row">
                {row.firstname}
              </StyledTableCell>
              <StyledTableCell>{row.lastname}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
