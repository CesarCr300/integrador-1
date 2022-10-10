import { IIncomeCreation, IIncomes } from "@/models";
import { incomeService } from "@/services";
import { NavigateFunction } from "react-router";

export const getAllIncomes = async (userId: number, setData: React.Dispatch<React.SetStateAction<IIncomes | null>>) => {
    const response = await incomeService.get(userId);
    setData(response);
}

export const createIncome = async (userId: number, data: IIncomeCreation) => {
    return await incomeService.post(userId, data);
}

export const deleteIncomeById = async (incomeId: number, navigate: NavigateFunction) => {
    const wasDeleted = await incomeService.delete(incomeId);
    if (wasDeleted) navigate("/incomes");
}