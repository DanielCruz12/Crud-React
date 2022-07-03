import "./App.css";
import { useState } from "react";
import { TasksCreator } from "./components/TasksCreator";

function App() {
  const [listarTareas, setListarTareas] = useState([
    { name: "new1" },
    { name: "new2" },
    { name: "new3" },
  ]);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea }]);
  };
  return (
    <div className="App">
      <TasksCreator crearTareas={crearTareas}></TasksCreator>

      <table>
        <thead>
          <tr>
            <th>tasks</th>
          </tr>
        </thead>
        <tbody>
          {listarTareas.map((tareas) => (
            <tr key={tareas.name}>
              <td>{tareas.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
