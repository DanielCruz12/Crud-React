export const Control = ({setShowCompleted, showCompleted}) => {
    return (
      <div>
        <input
          onChange={(e) => setShowCompleted(!showCompleted)}
          type="checkbox"
        ></input>
        <label>Mostrar tareas completas</label>
      </div>
    );
  };
  