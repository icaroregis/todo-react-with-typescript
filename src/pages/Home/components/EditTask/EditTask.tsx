import { Modal } from "../../../../components";
import { EditContainer } from "./EditTask.styles";
import { IEditTaskProps } from "./EditTask.types";

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
      <EditContainer>teste</EditContainer>
    </Modal>
  );
}
