import React from "react";

const Card = ({
  todo,
  handleEdit,
  handleDelete,
  handleStatusChange,
  isEditing,
}) => {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <p className="card-title">Name : {todo.title}</p>
          <p className="card-text">Description : {todo.description}</p>
          <div className="row mt-2 mb-3">
            <div className="col-auto pe-0 mb-2">
              <label>Status</label>
            </div>
            <div className="col-auto">
              <select
                name="status"
                id="status"
                style={{
                  backgroundColor:
                    todo.status === "false" ? "rgb(255, 127, 128)" : "green",
                  color: "white",
                  maxWidth: "170px",
                  marginTop: "-6px",
                }}
                className="form-select text-white "
                value={todo.status}
                onChange={(e) => handleStatusChange(todo.id, e.target.value)}
              >
                <option
                  value="false"
                  style={{ backgroundColor: "rgb(255, 127, 128)" }}
                >
                  Not Completed
                </option>
                <option value="true" className="bg-success">
                  Completed
                </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-end d-flex justify-content-end">
              <button
                className="btn btn-success me-2 mb-2"
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mb-2"
                onClick={() => handleDelete(todo.id)}
                disabled={isEditing}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
