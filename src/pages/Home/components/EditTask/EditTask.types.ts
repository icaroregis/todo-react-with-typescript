import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../Home.types";

export interface IEditTask {
  name: string;
}

export interface IEditTaskProps {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  taskData: ITask | undefined;
}
