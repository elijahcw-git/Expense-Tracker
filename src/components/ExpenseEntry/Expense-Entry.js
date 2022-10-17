import { v4 as uuid } from "uuid";
import { Button, Table } from "react-bootstrap";

const CreateExpense = ({ list }) => {
  const deleteEntry = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
  };
  return (
    <div className="expenses">
      <Table>
        <thead>
            <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Location</th>
          <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {list.map((expense) => {
            return (
              <tr key={uuid()} className="expense-entry">
                <td>{expense.date} </td>
                <td>{expense.amount}</td>
                <td>{expense.purchaseLocation}</td>
                <td>{expense.purchaseDescription}</td>
                <td><Button onClick={deleteEntry}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CreateExpense;
