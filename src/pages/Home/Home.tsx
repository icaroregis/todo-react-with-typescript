import { useState } from "react";
import { Header } from "../../components";
import Clipboard from "../../assets/Clipboard.svg";
import { Pen, PlusCircle, Trash } from "phosphor-react";
import {
  TaskInput,
  NewTaskButton,
  HomeContainer,
  NewTaskContainer,
  TasksCreatedAndCompletedContainer,
  IndicatorsStartContainer,
  IndicatorsFinishContainer,
  CreatedTasks,
  CompletedTasks,
  TaskListContainer,
  EmptyTaskListContainer,
  TaskContainer,
  ScrollableContainer,
  TaskName,
} from "./Home.styles";
import { ITask } from "./Home.types";

export function Home() {
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      name: "Estudar inglês",
      completed: false,
    },
    {
      id: 2,
      name: "Regar as plantas",
      completed: false,
    },
    {
      id: 3,
      name: "Praticar 30 minutos de yoga",
      completed: false,
    },
  ]);

  function handleToggleTask(taskId: number) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      const completedTaskIndex = updatedTasks.findIndex(
        (task) => task.id === taskId && task.completed
      );

      if (completedTaskIndex !== -1) {
        const completedTask = updatedTasks.splice(completedTaskIndex, 1)[0];
        updatedTasks.push(completedTask);
        setCompletedTasksCount((prevCount) => prevCount + 1);
      } else {
        setCompletedTasksCount((prevCount) => prevCount - 1);
      }

      return updatedTasks;
    });
  }

  function createTask() {
    const newTask = {
      id: tasks.length + 1,
      name: addTask,
      completed: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function deleteTask(taskId: number) {
    setTasks((prevState) =>
      prevState.filter((task) => {
        return task.id !== taskId;
      })
    );
  }

  return (
    <HomeContainer>
      <Header />

      <NewTaskContainer>
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          value={addTask}
          onChange={({ target }) => setAddTask(target.value)}
        />
        <NewTaskButton onClick={createTask}>
          Criar <PlusCircle size={25} />
        </NewTaskButton>
      </NewTaskContainer>

      <TasksCreatedAndCompletedContainer>
        <IndicatorsStartContainer>
          <strong>Tarefas criadas</strong>
          <CreatedTasks>{tasks.length}</CreatedTasks>
        </IndicatorsStartContainer>

        <IndicatorsFinishContainer>
          <strong>Concluídas</strong>
          <CompletedTasks>
            {!tasks.length ? 0 : `${completedTasksCount} de ${tasks.length}`}
          </CompletedTasks>
        </IndicatorsFinishContainer>
      </TasksCreatedAndCompletedContainer>

      <ScrollableContainer>
        <TaskListContainer>
          {!tasks.length ? (
            <EmptyTaskListContainer>
              <div>
                <img
                  src={Clipboard}
                  alt="Ícone de uma prancheta representando que não há atividades na lista"
                />
              </div>

              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </EmptyTaskListContainer>
          ) : (
            tasks.map((task) => {
              return (
                <TaskContainer key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  <TaskName completed={task.completed}>{task.name}</TaskName>
                  <div>
                    <Trash size={32} onClick={() => deleteTask(task.id)} />
                    <Pen size={32} />
                  </div>
                </TaskContainer>
              );
            })
          )}
        </TaskListContainer>
      </ScrollableContainer>
    </HomeContainer>
  );
}
