import React from "react";
import TableBody from "./TableHolder/TableBody";
import TableHead from "./TableHolder/TableHead";

export default function ({ svArr }) {
  return (
    <table className="table">
      <TableHead></TableHead>
      <TableBody svArr={svArr}></TableBody>
    </table>
  );
}
