import { Dispatch, SetStateAction } from "react";

export interface IEditTaskProps {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  // onClose?: () => void;
}
