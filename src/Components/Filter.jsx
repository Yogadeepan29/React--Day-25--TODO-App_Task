import React from "react";

const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <>
      <section id="filter" className="container mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h5 className="fw-semibold">My Todos</h5>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end justify-content-md-end">
            <label className="d-flex align-items-center w-100 justify-content-end w-md-auto">
              <span className="fw-semibold fs-5">Status Filter: &nbsp;</span>
              <select
                name="status"
                id="filtervalue"
                style={{
                  border: "none",
                  width: "100%",
                  maxWidth: "180px",
                  backgroundColor: "rgb(255, 127, 128)",
                }}
                className="form-select text-center fw-bold text-white "
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  const selectBox = document.getElementById("filtervalue");
                  selectBox.style.backgroundColor =
                    e.target.value === "All"
                      ? "rgb(255, 127, 128)"
                      : e.target.value === "Completed"
                      ? "green"
                      : "red";
                  selectBox.style.color = "white";
                }}
              >
                <option
                  value="All"
                  style={{ backgroundColor: "rgb(255, 127, 128)" }}
                >
                  All
                </option>
                <option value="Completed" className="bg-success">
                  Completed
                </option>
                <option value="NotCompleted" className="bg-danger">
                  Not Completed
                </option>
              </select>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
