import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";
import { Control } from "./components/Control";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [listarTareas, setListarTareas] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea, done: false }]);
  };

  const ToggleTask = (task) => {
    setListarTareas(
      listarTareas.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

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
      <TaskTable tasks={listarTareas} ToggleTask={ToggleTask} crearTareas={crearTareas}></TaskTable>
      <Control setShowCompleted={setShowCompleted}></Control>
      {showCompleted === true && (
        <TaskTable
          tasks={listarTareas}
          ToggleTask={ToggleTask}
          showCompleted={true}
        ></TaskTable>
      )}
    </div>
  );
}

export default App;
