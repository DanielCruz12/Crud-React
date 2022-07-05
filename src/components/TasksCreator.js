import { useState } from "react";

export const TasksCreator = ({crearTareas}) => {
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    crearTareas(nuevoNombreTarea);
    //localStorage.setItem("task", nuevoNombreTarea);
    setNuevoNombreTarea("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write a task"
          value={nuevoNombreTarea}
          onChange={(e) => setNuevoNombreTarea(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
