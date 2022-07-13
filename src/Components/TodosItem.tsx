import React from "react";
import { ITodoItems } from "./Todos";

const TodosItem = ({ id, title, status }: ITodoItems) => {
  return <div>{title}</div>;
};

export default TodosItem;
