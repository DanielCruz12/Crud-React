import "./App.css";
import { useState, useEffect } from "react";
import { TasksCreator } from "./components/TasksCreator";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [listarTareas, setListarTareas] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

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
        <label>tareas incompletas</label>
      <TaskTable tasks={listarTareas} ToggleTask={ToggleTask}></TaskTable>
      <div>
        <input onChange={e => setShowCompleted(!showCompleted)} type= "checkbox"></input>
        <label>Mostrar tareas completas</label>
      </div>
      {
        showCompleted === true && (
          <TaskTable tasks={listarTareas} ToggleTask={ToggleTask} showCompleted={true}></TaskTable>
        )
      }
    </div>
  );
}

export default App;
