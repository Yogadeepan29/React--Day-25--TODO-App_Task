import React from "react";
import Card from "./Card";

const Todos = ({
  todos,
  handleEdit,
  handleDelete,
  handleStatusChange,
  isEditing,
}) => {
  return (
    <section id="todolist" className="container mt-5">
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
        {todos.map((todo) => (
          <div className="col" key={todo.id}>
            <Card
              todo={todo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleStatusChange={handleStatusChange}
              isEditing={isEditing}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todos;
