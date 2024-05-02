import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "../../../../components";
import { IEditTask, IEditTaskProps } from "./EditTask.types";
import { EditButton, EditContainer, EditInput } from "./EditTask.styles";

export function EditTask({ state: [open, setOpen], taskData }: IEditTaskProps) {
  const [inputValues, setInputValues] = useState<IEditTask>({
    name: "",
  });

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

        <div>
          <EditButton>Editar Tarefa</EditButton>
        </div>
      </EditContainer>
    </Modal>
  );
}
