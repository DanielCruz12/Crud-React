import "./App.css";
import { useState, useEffect } from "react";
import { TasksCreator } from "./components/TasksCreator";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [listarTareas, setListarTareas] = useState([
    {
      name: "tarea1",
      done: true,
    },
  ]);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea, done: false }]);
  };

  const ToggleTask= (tarea) => {
    setListarTareas(
      listarTareas.map(t => (t.name === tarea.name) ? {...t, done: !t.done} : t )
    )
  }

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setListarTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listarTareas));
  }, [listarTareas]);

  return (
    <div className="App">
      <TasksCreator crearTareas={crearTareas}></TasksCreator>
      <TaskTable tasks={listarTareas} ToggleTask={ToggleTask}></TaskTable>
      <TaskTable tasks={listarTareas} ToggleTask={ToggleTask}></TaskTable>
    </div>
  );
}

export default App;
