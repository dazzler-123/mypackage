import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const MyInputTypeTable = ({
  multilanguage,
  rows = [{ id: "" }],
  columns = [{ field: "", headerName: "" }],
  componentType,
  buttonAction,
  ActionType,
  iconAction,
  renderInputField=()=>{},
}) => {
    console.log(columns);
    
  return (
    <TableContainer component={componentType}>
      <Table>
        <TableHead>
          <TableRow>
          {columns.map(column => (
              <TableCell key={column.dispatchername}>{multilanguage(column.label)}</TableCell>
            ))}
            <TableCell>{ActionType}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.dispatchername}>
                  {renderInputField(row, column)}
                </TableCell>
              ))}
              <TableCell>
                <IconButton onClick={()=>iconAction(row.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={buttonAction} startIcon={<Add />}>
        Add Row
      </Button>
    </TableContainer>
  );
};

export default MyInputTypeTable;