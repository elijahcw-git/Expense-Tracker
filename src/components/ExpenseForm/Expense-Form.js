import { useState } from "react";
import ExpenseEntry from "../ExpenseEntry/Expense-Entry";
import { Button, Form } from "react-bootstrap";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [purchaseLocation, setPurchaseLocation] = useState("");
  const [purchaseDescription, setPurchaseDescription] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      date: date,
      amount: amount,
      purchaseDescription: purchaseDescription,
      purchaseLocation: purchaseLocation,
    };
    setExpenseList((prevState) => {
      return [...prevState, newExpense];
    });
    setDate("");
    setAmount("");
    setPurchaseDescription("");
    setPurchaseLocation("");
  };

  return (
    <div className="ExpenseForm">
      <h2>Input An Expense</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="form-entry">Date of Purchase</Form.Label>
          <Form.Control
            className="form-input"
            type="date"
            placeholder="Date of Purchase"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Form.Label className="form-entry">Dollar Amount</Form.Label>
          <Form.Control
            className="form-input"
            type="number"
            placeholder="Amount of Purchase"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Form.Label className="form-entry">Purchase Location/Vendor</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Location of Purchase"
            value={purchaseLocation}
            onChange={(e) => setPurchaseLocation(e.target.value)}
            required
          />
          <Form.Label className="form-entry">Description of Purchase</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Description of Purchase"
            value={purchaseDescription}
            onChange={(e) => setPurchaseDescription(e.target.value)}
            required
          />
          <br />
          <div className="button-style">
            <Button type="submit">Submit Expense</Button>
          </div>
        </Form.Group>
      </Form>
      <ExpenseEntry
        date={date}
        amount={amount}
        location={purchaseLocation}
        description={setPurchaseDescription}
        list={expenseList}
      />
    </div>
  );
};

export default ExpenseForm;
