import { useState, useEffect } from "react";
import {Table} from './Table'

export const TasksCreator = () => {
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState("");

  const [listarTareas, setListarTareas] = useState([]);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea,  done: false }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTareas(nuevoNombreTarea);
    setNuevoNombreTarea("");
  };

  const toggleTask = (task) => {
    setListarTareas(listarTareas.map(t => (t.name === task.name) ? {...t, done: !t.done} : t))
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
      <div >

      </div>
      
      <Table listarTareas={listarTareas} toggleTask={toggleTask} handleSubmit={handleSubmit}></Table>
    </div>
  );
};


