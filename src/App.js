import "./App.css";
import Header from "./components/Header";
import ExpenseForm from "./components/Expense-Form"
import ExpenseTable from "./components/Expense-Table"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}


