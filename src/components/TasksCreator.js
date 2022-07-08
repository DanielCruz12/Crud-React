import { useState } from "react";

export const TasksCreator = ({ crearTareas }) => {
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTareas(nuevoNombreTarea);
    //localStorage.setItem("task", nuevoNombreTarea);
    setNuevoNombreTarea("");
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write a task"
          value={nuevoNombreTarea}
          onChange={(e) => setNuevoNombreTarea(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form> */}

<form className="pb-2" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row align-items-center">
                <input
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  type="text"
                  placeholder="añade una tarea"
                  value={nuevoNombreTarea}
                  onChange={(e) => setNuevoNombreTarea(e.target.value)}
                ></input>
                <div>
                  <button className="btn btn-primary" type="submit">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
    </>
  );
};
