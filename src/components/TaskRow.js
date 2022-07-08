export const TaskRow = ({ tarea, ToggleTask }) => {
    return (
        <li
        className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0"
            type="checkbox"
            value=""
            id="flexCheckChecked1"
            aria-label="..."
            onChange={() => ToggleTask(tarea)}
          />
        </div>
      </li>

    );
  };
  