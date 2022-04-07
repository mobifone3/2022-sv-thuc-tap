import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table() {
  return (
    <table className="table">
      <TableHead></TableHead>
      <TableBody></TableBody>
    </table>
  );
}
