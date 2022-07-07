import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, ToggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((tarea) => (
          <TaskRow tarea={tarea} key={tarea.name} ToggleTask={ToggleTask}/>
        ))}
      </tbody>
    </table>
  );
};
