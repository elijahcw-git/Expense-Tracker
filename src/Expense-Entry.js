const CreateExpense = (props) => {
  const list = props.list;
  const date = props.date;
  const amount = props.amount;
  const location = props.location;
  const description = props.description;
  
  const generateID = () => {
    const id = Math.floor(Math.random * 1000000000);
  };

  return (
    <div className="expense-list">
        {console.log(list)}
      <p>
        {list.map(expense => {
            <p key={generateID}>
                {expense.amount} {expense.location} {expense.description}
            </p>
        })}
      </p>
    </div>
  );
};

export default CreateExpense;
