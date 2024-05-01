import styled from "styled-components";
import { darken } from "polished";
import { convertPixelsToRem } from "../../utils";

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewTaskContainer = styled.div`
  margin-top: ${convertPixelsToRem(-27)};
  display: flex;
  gap: 10px;
`;

export const TaskInput = styled.input`
  width: ${convertPixelsToRem(638)};
  height: ${convertPixelsToRem(54)};
  border-radius: ${convertPixelsToRem(8)};
  background-color: ${({ theme }) => theme["gray-400"]};
  border: 2px solid ${({ theme }) => theme["gray-700"]};
  padding: 0 ${convertPixelsToRem(15)};
  color: ${({ theme }) => theme["gray-300"]};

  &:focus {
    outline: 0;
    border: 2px solid ${({ theme }) => theme["blue-dark"]};
  }
`;

export const NewTaskButton = styled.button`
  cursor: pointer;
  width: ${convertPixelsToRem(90)};
  height: ${convertPixelsToRem(52)};
  border-radius: ${convertPixelsToRem(8)};
  background-color: ${({ theme }) => theme["blue-dark"]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${convertPixelsToRem(4)};
  color: ${({ theme }) => theme.white};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme["blue-dark"])};
  }
`;

export const TasksCreatedAndCompletedContainer = styled.div`
  max-width: ${convertPixelsToRem(736)};
  width: 100%;
  margin-top: ${convertPixelsToRem(60)};
  border-bottom: 1px solid ${({ theme }) => theme["gray-300"]};
  display: flex;
  justify-content: space-between;
  padding-bottom: ${convertPixelsToRem(20)};
`;

const BaseIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${convertPixelsToRem(20)};
`;

const BaseNumbersIndicators = styled.div`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 8px;
`;

export const CreatedTasks = styled(BaseNumbersIndicators)``;
export const CompletedTasks = styled(BaseNumbersIndicators)``;

export const IndicatorsStartContainer = styled(BaseIndicators)`
  color: ${({ theme }) => theme["blue-dark"]};
`;

export const IndicatorsFinishContainer = styled(BaseIndicators)`
  color: ${({ theme }) => theme["purple-dark"]};
`;

export const TaskListContainer = styled.div``;

export const EmptyTaskListContainer = styled.div`
  margin-top: ${convertPixelsToRem(60)};
  display: flex;
  flex-direction: column;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
