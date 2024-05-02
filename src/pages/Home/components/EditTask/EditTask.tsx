import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "../../../../components";
import { IEditTask, IEditTaskProps } from "./EditTask.types";
import { EditButton, EditContainer, EditInput } from "./EditTask.styles";

export function EditTask({
  state: [open, setOpen],
  taskData,
  taskList,
  updateFunction,
}: IEditTaskProps) {
  const [inputValues, setInputValues] = useState<IEditTask>({
    name: "",
  });

  function editTask() {
    if (taskData) {
      const updatedTaskList = taskList.map((task) => {
        if (task.id === taskData.id) {
          return {
            ...task,
            name: inputValues.name,
          };
        }
        return task;
      });

      updatedTaskList.sort((a, b) => a.id - b.id);
      updateFunction(updatedTaskList);
      setOpen(false);
    }
  }

  useEffect(() => {
    if (taskData) {
      setInputValues({
        name: taskData.name,
      });
    }
  }, [taskData]);

  return (
    <Modal
      title="Edição de Tasks"
      state={[open, setOpen]}
      closeOnBackdropClick={false}
      minWidth="20rem"
      width="40vw"
      maxWidth="70rem"
    >
      <EditContainer>
        <EditInput
          value={inputValues?.name}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setInputValues((prevState) => ({
              ...prevState,
              name: target.value,
            }))
          }
        />

        <EditButton onClick={editTask}>Editar Tarefa</EditButton>
      </EditContainer>
    </Modal>
  );
}
