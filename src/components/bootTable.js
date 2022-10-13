import React from "react";
import { Table } from "react-bootstrap";

const Bootable = () => {
  const arr = [
    {
      name: "krushna",
      add: "kanadi bk",
      contact: 42241545454,
    },
    {
      name: "asdfasdfasdfasdf",
      add: "talani",
      contact: 5424684684684684684684682,
    },
    {
      name: "priyasdfasdfasdfasdfanka",
      add: "nagar",
      contact: 5422465464654642,
    },
  ];
  return (
    <>
      <div>
        <h1>Hello Bootstrap Table</h1>
      </div>
      <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>sr.no.</th>
            <th>Name</th>
            <th>add</th>
            <th>contact</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.add}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default Bootable;
