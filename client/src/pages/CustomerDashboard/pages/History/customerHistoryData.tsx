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
import Chip from "@mui/material/Chip/Chip";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "dodgerblue",
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

export default function CustomerHistoryData({ refresh }) {
  const [tableData, setTableData] = useState<any>([]);
  const [ticketTableData, setTicketTableData] = useState<any>([]);

  const token = sessionStorage.getItem("access_token");

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    let res = await axios.get("https://zero-waste-0yjw.onrender.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //   console.log("res,...", res.data);
    setTableData(res.data);
  };

  const ticketData = async () => {
    let ticketD = await axios.get(
      "https://zero-waste-0yjw.onrender.com/tickets",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTicketTableData(ticketD.data);
    console.log(ticketTableData);
  };

  const ticketDataByUser = async (id: string) => {
    try {
      let tickets = await axios.get(
        `https://zero-waste-0yjw.onrender.com/tickets/user/${id}`
      );
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
      const id = sessionStorage.getItem("id");
      ticketDataByUser(id as string);
    })();
  }, [refresh]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ticket No</StyledTableCell>
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
            <TableRow key={row._id}>
              <TableCell>
                <Chip
                  label={row.ticketNo}
                  color={row.status === "isClosed" ? "secondary" : "primary"}
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                />
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.raiser.address}</TableCell>
              <TableCell>
                {moment(row.createdAt).format("DD/MM/YYYY")}
                {/* {row.createdAt} */}
              </TableCell>
              <TableCell>
                {moment(row.updatedAt).format("DD/MM/YYYY")}
                {/* {row.updatedAt} */}
              </TableCell>
              <TableCell>
                {row.receiver
                  ? row.receiver?.firstname + " " + row.receiver?.lastname
                  : "Unassigned"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
