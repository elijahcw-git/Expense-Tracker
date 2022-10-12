import { useState } from "react";
import { Button } from "react-bootstrap";
import ExpenseTable from "./Expense-Table";

export default function ExpenseForm() {
  const [locationInput, setLocationInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [expenseDescriptionInput, setExpenseDescriptionInput] = useState("");
  const [dollarAmountInput, setDollarAmountInput] = useState("");

  const locationInputChangeHandler = (evt) => {
    setLocationInput(evt.target.value);
  };
  const dateInputChangeHandler = (evt) => {
    setDateInput(evt.target.value);
  };
  const expenseDescriptionInputChangeHandler = (evt) => {
    setExpenseDescriptionInput(evt.target.value);
  };
  const dollarAmountInputChangeHandler = (evt) => {
    setDollarAmountInput(evt.target.value);
  };

  const handleSubmit = e => {
    // console.log("Form Submitted")
    e.preventDefault();
    setLocationInput("")
    setDateInput("")
    setExpenseDescriptionInput("")
    setDollarAmountInput("")
  }

  return (
    <div className="createForm">
      <h2>Add A New Expense</h2>
      <form>
        <input
          type="date"
          name="expenseDate"
          value={dateInput}
          onChange={dateInputChangeHandler}
          required
        />
        <input
          type="text"
          name="expenseDescription"
          value={expenseDescriptionInput}
          placeholder="Expense Description"
          onChange={expenseDescriptionInputChangeHandler}
          required
        />
        <br />
        <input
          type="text"
          name="purchaseLocation"
          value={locationInput}
          placeholder="Purchase Location"
          onChange={locationInputChangeHandler}
          required
        />
        <input
          type="number"
          placeholder="Dollar Amount"
          value={dollarAmountInput}
          onChange={dollarAmountInputChangeHandler}
          required
        />
        <br />
        <Button type="submit" onClick={handleSubmit}>Submit New Expense</Button>
      </form>

      <ExpenseTable handleSubmit={locationInput} />
    </div>
  );
}
