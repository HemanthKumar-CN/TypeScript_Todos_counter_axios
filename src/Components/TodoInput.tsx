import React, { useState } from "react";

interface ITodoInputProps {
  onClick: (value: string) => void;
}

const TodoInput = ({ onClick }: ITodoInputProps) => {
  const [query, setQuery] = useState<string>("");

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClick(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={changeHandler} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
