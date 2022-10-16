import { useState } from "react";
import ExpenseEntry from "../Expense-Entry";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [purchaseLocation, setPurchaseLocation] = useState("");
  const [purchaseDescription, setPurchaseDescription] = useState("");

  let expenseList = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {date, amount, purchaseDescription, purchaseLocation};
    expenseList.push(newExpense);
  };

  return (
    <div className="ExpenseForm">
      <h2>Input An Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          placeholder="Date of Purchase"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount of Purchase"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location of Purchase"
          value={purchaseLocation}
          onChange={(e) => setPurchaseLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description of Purchase"
          value={purchaseDescription}
          onChange={(e) => setPurchaseDescription(e.target.value)}
          required
        />
        <button>Submit Expense</button>
      </form>
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
