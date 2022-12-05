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
import moment from "moment";

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

export default function CustomerHistoryData() {
  const [tableData, setTableData] = useState<any>([]);
  const [ticketTableData, setTicketTableData] = useState<any>([]);

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

  const ticketData = async () => {
    let ticketD = await axios.get("http://localhost:4000/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTicketTableData(ticketD.data);
    console.log(ticketTableData);
  };

  const ticketDataByUser = async (id: string) => {
    try {
      let tickets = await axios.get(`http://localhost:4000/tickets/user/${id}`);
      setTicketTableData(tickets.data);
    } catch (error) {}
  };

  // const makeStyle = (status) => {
  //   if (status === "Approved") {
  //     return {
  //       background: "rgb(145 254 159 / 47%)",
  //       color: "green",
  //     };
  //   } else if (status === "Pending") {
  //     return {
  //       background: "#ffadad8f",
  //       color: "red",
  //     };
  //   } else {
  //     return {
  //       background: "#59bfff",
  //       color: "white",
  //     };
  //   }
  // };

  useEffect(() => {
    (async () => {
      const id = localStorage.getItem("id");
      ticketDataByUser(id as string);
    })();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Raiser Address</StyledTableCell>
            <StyledTableCell>Created Date</StyledTableCell>
            <StyledTableCell>Updated Date</StyledTableCell>
            <StyledTableCell>Pickup By</StyledTableCell>
            {/* <StyledTableCell align="right">Worker Name</StyledTableCell>s */}
            {/* <StyledTableCell align="right">PhoneNumber</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketTableData.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell>{row._id}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.raiser.address}</StyledTableCell>
              <StyledTableCell>
                {moment(row.createdAt).format("DD/MM/YYYY")}
                {/* {row.createdAt} */}
              </StyledTableCell>
              <StyledTableCell>
                {moment(row.updatedAt).format("DD/MM/YYYY")}
                {/* {row.updatedAt} */}
              </StyledTableCell>
              <StyledTableCell>
                {row.receiver.firstname + " " + row.receiver.lastname}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
