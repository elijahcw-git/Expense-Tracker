import { useState } from "react";
import ExpenseEntry from "../ExpenseEntry/Expense-Entry";
import { Button, Form } from "react-bootstrap";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
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
      <h1>Simple Expense Tracker</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-input"
            type="date"
            placeholder="Date of Purchase"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Form.Control
            className="form-input"
            type="number"
            placeholder="Amount of Purchase"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Location of Purchase"
            value={purchaseLocation}
            onChange={(e) => setPurchaseLocation(e.target.value)}
            required
          />
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Description of Purchase"
            value={purchaseDescription}
            onChange={(e) => setPurchaseDescription(e.target.value)}
            required
          />
        </Form.Group>
        <div className="button-style">
          <Button variant="success" size="lg" type="submit">
            Submit Expense
          </Button>
        </div>
      </Form>
      <ExpenseEntry list={expenseList} setList={setExpenseList} />
    </div>
  );
};

export default ExpenseForm;
