import React from "react";
import TableBody from "./Table/TableBody";
import TableHead from "./Table/TableHead";

export default function TableHolder({ svArr }) {
  return (
    <table className="table">
      <TableHead></TableHead>
      <TableBody svArr={svArr}></TableBody>
    </table>
  );
}
