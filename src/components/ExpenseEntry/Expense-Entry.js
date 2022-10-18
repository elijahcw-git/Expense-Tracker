import { v4 as uuid } from "uuid";
import { Button, Table } from "react-bootstrap";

const CreateExpense = ({ list, setList }) => {

  const handleDelete = (index, e) => {

    console.log(e.target.parentNode.parentNode.id);
    const expenseID = e.target.parentNode.parentNode.id
    const newExpenseList = expenseListTable.filter((expenseItem) => expenseItem.props.id !== expenseID)
    setList(newExpenseList)
    

  };
  const expenseListTable = list.map((expense, index) => {
    return (
      <tr key={uuid()} id={uuid()} className="expense-entry">
        <td>{expense.date} </td>
        <td>{expense.amount}</td>
        <td>{expense.purchaseLocation}</td>
        <td>{expense.purchaseDescription}</td>
        <td>
          <Button onClick={e => handleDelete(index, e)}>Delete</Button>
        </td>
      </tr>
    );
  });
  // console.log(expenseListTable)
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
        <tbody>{expenseListTable}</tbody>
      </Table>
    </div>
  );
};

export default CreateExpense;
