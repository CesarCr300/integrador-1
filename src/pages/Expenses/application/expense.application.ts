import { IExpenseCreation, IExpenses } from "@/models";
import { expenseService } from "@/services";
import { NavigateFunction } from "react-router";

export const getAllExpenses = async (userId: number, setData: React.Dispatch<React.SetStateAction<IExpenses | null>>) => {
    const response = await expenseService.get(userId);
    setData(response);
}

export const createExpense = async (userId: number, data: IExpenseCreation, navigate: NavigateFunction) => {
    const wasCreated = await expenseService.post(userId, data);
    if (!wasCreated) return;
    navigate("/expenses");
}

export const deleteExpenseById = async (expenseId: number, setActualizar: React.Dispatch<React.SetStateAction<boolean>>) => {
    const wasDeleted = await expenseService.delete(expenseId);
    if (!wasDeleted) return;
    setActualizar((x) => !x);
}