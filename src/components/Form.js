const Form = ({ setImputText, todos, setTodos, inputText }) => {
  //Here I can write what ever function
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setImputText(e.target.value);
  };
  const submitTodoHendler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setImputText("");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        class="todo-input"
      />
      <button onClick={submitTodoHendler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
