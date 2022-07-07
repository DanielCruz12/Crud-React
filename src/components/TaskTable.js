import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, ToggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    return tasks
      .filter((tarea) => tarea.done === doneValue)
      .map((tarea) => (
        <TaskRow tarea={tarea} key={tarea.name} ToggleTask={ToggleTask} />
      ));
  };

  return (
    <table>
      <thead>
        <tr>
          {showCompleted === true && (
            <th>tareas completas</th>
          ) }
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
