import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../Home.types";

export interface IEditTask {
  name: string;
}

export interface IEditTaskProps {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  taskData: ITask | undefined;
  taskList: ITask[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateFunction: Function;
}
