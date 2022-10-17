import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const CreateExpense = ({ list }) => {
  const [tableEntries, setTableEntries] = useState(list);

  const handleDelete = (index, e) => {
    setTableEntries(tableEntries.filter((v, i) => i !== index));
  };

  const rows = tableEntries.map((expense, index) => {
    return (
      <tr key={index} className="expense-entry">
        <td>{expense.date} </td>
        <td>{expense.amount}</td>
        <td>{expense.purchaseLocation}</td>
        <td>{expense.purchaseDescription}</td>
        <td>
          <Button onClick={(e) => handleDelete(index, e)}>Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="expenses">
      <Table id="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default CreateExpense;
