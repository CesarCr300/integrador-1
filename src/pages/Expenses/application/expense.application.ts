import { IExpenseCreation, IExpenses } from "@/models";
import { expenseService } from "@/services";
import { NavigateFunction } from "react-router";

export const getAllExpenses = async (userId: number, setData: React.Dispatch<React.SetStateAction<IExpenses | null>>) => {
    const response = await expenseService.get(userId);
    setData(response);
}

export const createExpense = async (userId: number, data: IExpenseCreation) => {
    return await expenseService.post(userId, data);
}

export const deleteExpenseById = async (incomeId: number, navigate: NavigateFunction) => {
    const wasDeleted = await expenseService.delete(incomeId);
    if (wasDeleted) navigate("/incomes");
}