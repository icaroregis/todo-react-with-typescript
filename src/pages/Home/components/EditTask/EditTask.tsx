import { Modal } from "../../../../components";
import { IEditTaskProps } from "./EditTask.types";
import { EditButton, EditContainer, EditInput } from "./EditTask.styles";

export function EditTask({ state: [open, setOpen] }: IEditTaskProps) {
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
        <EditInput />

        <div>
          <EditButton>Editar Tarefa</EditButton>
        </div>
      </EditContainer>
    </Modal>
  );
}
