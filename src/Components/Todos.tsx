import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodosItem from "./TodosItem";

export interface ITodoItems {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodoItems[]>([]);

  const handleAdd = (title: string) => {
    const payload = {
      title,
      status: false,
      //   id: todos.length + 1,
    };

    axios.post(`http://localhost:8080/todos`, payload).then(getTodos);

    // setTodos([...todos, payload]);
  };
  console.log(todos);

  const getTodos = () => {
    axios
      .get(`http://localhost:8080/todos`)
      //   .then(({ data }: { data: ITodoItems[] }) => {
      //     setTodos(data);
      //   });
      .then((res: AxiosResponse<ITodoItems[]>) => {
        const { data } = res;
        setTodos(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header label="Todos" />
      <TodoInput onClick={handleAdd} />
      {todos.length > 0 &&
        todos.map((item) => {
          return <TodosItem key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Todos;
