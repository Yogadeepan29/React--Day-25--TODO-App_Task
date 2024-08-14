import React from "react";

const Input = ({
  title,
  setTitle,
  description,
  setDescription,
  isEditing,
  handleAdd,
  handleUpdate,
}) => {
  return (
    <section id="form" className=" Input container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Todo Name"
            className="form-control border-success-subtle"
            style={{ borderRadius: "5px" }}
            required
          />
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Todo Description"
            className="form-control border-success-subtle"
            style={{ borderRadius: "5px" }}
            required
          />
        </div>
        <div className="col-12 col-md-2">
          {isEditing ? (
            <button className="btn btn-warning w-100" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="btn btn-success w-100" onClick={handleAdd}>
              Add Todo
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Input;
