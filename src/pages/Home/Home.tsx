import { PlusCircle } from "phosphor-react";
import Clipboard from "../../assets/Clipboard.svg";
import { Header } from "../../components";
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
} from "./Home.styles";

const tasks = [
  // {
  //   id: 1,
  //   name: "Estudar inglês",
  //   prioridade: "Alta",
  // },
  // {
  //   id: 2,
  //   name: "Regar as plantas",
  //   prioridade: "Alta",
  // },
  // {
  //   id: 3,
  //   name: "Tomar o remédio",
  //   prioridade: "Alta",
  // },
];

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <NewTaskContainer>
        <TaskInput placeholder="Adicione uma nova tarefa" />
        <NewTaskButton>
          Criar <PlusCircle size={25} />
        </NewTaskButton>
      </NewTaskContainer>

      <TasksCreatedAndCompletedContainer>
        <IndicatorsStartContainer>
          <strong>Tarefas criadas</strong>
          <CreatedTasks>0</CreatedTasks>
        </IndicatorsStartContainer>

        <IndicatorsFinishContainer>
          <strong>Concluídas</strong>
          <CompletedTasks>0</CompletedTasks>
        </IndicatorsFinishContainer>
      </TasksCreatedAndCompletedContainer>

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
          "faz o map no array"
        )}
      </TaskListContainer>
    </HomeContainer>
  );
}
