import { IIncomes } from "@/models/income.model";
import { incomeService } from "@/services";
import { NavigateFunction } from "react-router";

export const getAllIncomes = async (userId: number, setData: React.Dispatch<React.SetStateAction<IIncomes | null>>) => {
    const response = await incomeService.get(userId);
    setData(response);
}

// export const getById = async()

export const deleteById = async (incomeId: number, navigate: NavigateFunction) => {
    const wasDeleted = await incomeService.delete(incomeId);
    if (wasDeleted) navigate("/incomes");
}