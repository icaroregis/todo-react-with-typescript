import { ChangeEvent, useContext, useEffect, useState } from "react";
import { api } from "../../../../service";
import { Modal } from "../../../../components";
import { IEditTask, IEditTaskProps } from "./EditTask.types";
import { EditButton, EditContainer, EditInput } from "./EditTask.styles";
import { AuthContext } from "../../../../contexts/authContext";
import { toast } from "react-toastify";

export function EditTask({
  state: [open, setOpen],
  taskData,
  taskList,
  updateFunction,
}: IEditTaskProps) {
  const { authToken } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState<IEditTask>({
    name: "",
  });

  async function editTask() {
    try {
      if (taskData) {
        const data = {
          name: inputValues.name,
        };

        await api.put(`/tasks/${taskData.id}`, data, {
          headers: {
            Authorization: `Bearer ${authToken.token}`,
          },
        });

        const updatedTaskList = taskList.map((task) => {
          if (task.id === taskData.id) {
            return {
              ...task,
              name: inputValues.name,
            };
          }
          return task;
        });

        updateFunction(updatedTaskList);
        setOpen(false);
        toast.success("Tarefa editada com sucesso.");
      }
    } catch (error) {
      console.error("Erro ao editar a tarefa:", error);
    }
  }

  function verification() {
    const verifications = inputValues.name.trim() === "";
    return verifications;
  }

  function areValuesChanged(): boolean {
    let validation: boolean = false;

    if (taskData) {
      if (!inputValues) return false;

      return (validation = inputValues.name.trim() !== taskData.name.trim());
    }

    return validation;
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

        <EditButton
          onClick={editTask}
          disabled={!areValuesChanged() || verification()}
        >
          Editar Tarefa
        </EditButton>
      </EditContainer>
    </Modal>
  );
}
