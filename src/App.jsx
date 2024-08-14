import React, { useState, useEffect } from "react";
import Input from "./Components/Input";
import Filter from "./Components/Filter";
import Todos from "./Components/Todos";
import "./App.css";

const App = () => {
  // Existing demo data
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Office Task - 1",
      description: "this is the description for My first Task",
      status: "false",
    },
    {
      id: 2,
      title: "Office Task - 2",
      description: "this is the description for My Second Task",
      status: "true",
    },
    {
      id: 3,
      title: "Office Task - 3",
      description: "this is the description for My Third Task",
      status: "false",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [filterValue, setFilterValue] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //* Handle adding a new todo
  const handleAdd = () => {
    //Validation
    if (title.trim() === "" || description.trim() === "") {
      alert("Please Add Title and Description");
      return;
    }
    //default structure of todo tasks
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      status: "false",
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  //* Handle Editing an existing todo
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodoId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  //* Handle Updating a todo
  const handleUpdate = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Title and Description are required");
      return;
    }
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodoId ? { ...todo, title, description } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    setCurrentTodoId(null);
    setTitle("");
    setDescription("");
  };

  //* Handle deleting a todo
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //* Handle changing the status of a todo
  const handleStatusChange = (id, status) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  //* Filter todos based on the selected filter value
  useEffect(() => {
    let tempTodos = [...todos];
    if (filterValue === "Completed") {
      tempTodos = tempTodos.filter((todo) => todo.status === "true");
    } else if (filterValue === "NotCompleted") {
      tempTodos = tempTodos.filter((todo) => todo.status === "false");
    }
    setFilteredTodos(tempTodos);
  }, [todos, filterValue]);

  return (
    <>
      <h3 id="Title" className="title text-center mt-5 text-success fs-2">
        My Todo
      </h3>
      <Input
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        isEditing={isEditing}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <Todos
        todos={filteredTodos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
        isEditing={isEditing}
      />
      {filteredTodos.length === 0 && (
        <p className="lead text-center mt-5">Add some tasks to display!</p>
      )}
    </>
  );
};

export default App;
