export const TaskRow = ({ tarea, ToggleTask }) => {
  return (
    <tr>
      <td>
        {tarea.name}
        <input
          type="checkbox"
          checked={tarea.done}
          onChange={() => ToggleTask(tarea)}
        ></input>
      </td>
    </tr>
  );
};
