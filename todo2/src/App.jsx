import { useReducer, useEffect } from "react";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const STORAGE_KEY = "todo_data";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;//todos에 저장-> 값 변경 -> 랜더링
    case "CREATE":
      return [...state, action.data];
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
//제일 처음 한번
  useEffect(() => {
    const rawData = localStorage.getItem(STORAGE_KEY); // 
    if (rawData) {
      dispatch({ type: "INIT", data: JSON.parse(rawData) });
    }
  }, []);
//todos값이 변할때마다 local스토리지에 저장된 값 변경
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const onCreate = (text, priority) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdDate: new Date().toISOString(),
      },
    });
    //DB 연동
  };

  const onToggle = (id) => {
    dispatch({ type: "TOGGLE", id });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <div className="App">
      <h1>todo 리스트</h1>
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default App;