import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
const dataTag = {
  table0: ["in"],
  table1: ["id", "out", "in", "in", "in", "in", "in", "in", "in"],
  table2: ["id", "out", "out", "out", "out"]
};
const initData = {
  table0: [{ h: 0 }],
  table1: [
    {
      id: 0,
      name: "쇠공",
      m: 0,
      r: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0,
      t5: 0
    },
    {
      id: 1,
      name: "골프공",
      m: 0,
      r: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0,
      t5: 0
    },
    {
      id: 2,
      name: "플라스틱공",
      m: 0,
      r: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0,
      t5: 0
    }
  ],
  table2: [
    {
      id: 0,
      name: "쇠공",
      t_avg: 0,
      g: 0,
      err: 0
    },
    {
      id: 1,
      name: "골프공",
      t_avg: 0,
      g: 0,
      err: 0
    },
    {
      id: 2,
      name: "플라스틱공",
      t_avg: 0,
      g: 0,
      err: 0
    }
  ]
};
function MakeRowData(dataObj) {
  for(let item in dataObj){
    
  }

}
export default function Exp01() {
  const [data, setData] = useState(initData);

  return (
    <div>
      <h1>인터페이스 실험</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableCell>구슬 종류</TableCell>
            <TableCell>m[kg]</TableCell>
            <TableCell>r[m]</TableCell>
            <TableCell>1회</TableCell>
            <TableCell>2회</TableCell>
            <TableCell>3회</TableCell>
            <TableCell>4회</TableCell>
            <TableCell>5회</TableCell>
          </TableHead>
          <TableBody>
            {data.table1.map(item => (
              <TableRow>
                <TableCell>
                  <TextField
                    id="text-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
