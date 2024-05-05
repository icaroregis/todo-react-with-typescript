import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../service";
import { ITask } from "./Home.types";
import { EditTask } from "./components";
import { Header } from "../../components";
import Clipboard from "../../assets/Clipboard.svg";
import { Pen, PlusCircle, Trash } from "phosphor-react";
import { AuthContext } from "../../contexts/authContext";
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
import { toast } from "react-toastify";

export function Home() {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);
  const [addTask, setAddTask] = useState<string>("");
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskData, setTaskData] = useState<ITask>({
    id: 0,
    name: "",
    completed: false,
  });

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

  async function createTask() {
    try {
      if (authToken.id && authToken.token) {
        const newTaskData = {
          name: addTask,
          userId: authToken.id,
        };

        const response = await api.post("/tasks", newTaskData, {
          headers: {
            Authorization: `Bearer ${authToken.token}`,
          },
        });

        const newTask = response.data;

        if (newTask) {
          if (addTask.trim() !== "") {
            setTasks((prevState) => [...prevState, newTask]);
          }
          setAddTask("");
        }

        setAddTask("");
        toast.success("Tarefa cadastrada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  }

  async function deleteTask(taskId: number) {
    try {
      await api.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${authToken.token}`,
        },
      });
      setTasks((prevState) =>
        prevState.filter((task) => {
          return task.id !== taskId;
        })
      );
      toast.success("Tarefa deletada com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  }

  const getTasks = useCallback(async () => {
    try {
      if (authToken.id && authToken.token) {
        const response = await api.get("/tasks", {
          headers: {
            Authorization: `Bearer ${authToken.token}`,
          },
          params: {
            userId: authToken.id,
          },
        });
        setTasks(response.data);
      }
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
    }
  }, [authToken.id, authToken.token, setTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setAuthToken({ token, id: userId });
    }
  }, [setAuthToken]);

  return (
    <HomeContainer>
      <Header />

      <NewTaskContainer>
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          value={addTask}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setAddTask(target.value)
          }
        />
        <NewTaskButton onClick={createTask} disabled={!addTask.trim()}>
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
                    onChange={() => handleToggleTask(task.id as number)}
                  />
                  <TaskName completed={task.completed as boolean}>
                    {task.name}
                  </TaskName>
                  <div>
                    <Trash
                      size={32}
                      onClick={() => deleteTask(task.id as number)}
                    />
                    <Pen
                      size={32}
                      onClick={() => {
                        setOpenEditModal(true);
                        setTaskData(task);
                      }}
                    />
                  </div>
                </TaskContainer>
              );
            })
          )}
        </TaskListContainer>
      </ScrollableContainer>

      {openEditModal && (
        <EditTask
          taskList={tasks}
          taskData={taskData}
          updateFunction={setTasks}
          state={[openEditModal, setOpenEditModal]}
        />
      )}
    </HomeContainer>
  );
}
