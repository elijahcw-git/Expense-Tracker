import { v4 as uuid } from "uuid";
import { Button, Table } from "react-bootstrap";
import "./ExpenseEntry.css";

const CreateExpense = ({ list, setList }) => {

  const handleDelete = (expense, e) => {
    const newExpenseList = list.filter((expenseItem) => {
      return expenseItem !== expense;
    });
    
    setList(newExpenseList);
  };
  const expenseListTable = list.map((expense) => {
    return (
      <tr key={uuid()} id={uuid()} className="expense-entry">
        <td>{expense.date} </td>
        <td>{expense.amount}</td>
        <td>{expense.purchaseLocation}</td>
        <td>{expense.purchaseDescription}</td>
        <td id="del-button">
          <Button variant="danger" onClick={(e) => handleDelete(expense, e)}>
            Delete Row
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div className="expenses">
      <Table id="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Dollar Amount</th>
            <th>Location</th>
            <th>Description</th>
            <th id="del-button-header">
              Remove Expense
            </th>
          </tr>
        </thead>
        <tbody>{expenseListTable}</tbody>
      </Table>
    </div>
  );
};

export default CreateExpense;
