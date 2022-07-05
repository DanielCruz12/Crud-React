import "./App.css";
import { useState, useEffect } from "react";
import { TasksCreator } from "./components/TasksCreator";

function App() {
  const [listarTareas, setListarTareas] = useState([]);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea }]);
  };
  
  useEffect(() => {
    let data = localStorage.getItem('tareas')
      if(data){
        setListarTareas(JSON.parse(data));
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(listarTareas))
  }, [listarTareas])

  
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
