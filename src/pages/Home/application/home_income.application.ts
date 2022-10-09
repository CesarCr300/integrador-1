import { IIncomes } from "@/models/income.model";
import { incomeService } from "@/services";

export const getAllIncomes = async (userId: number, setData: React.Dispatch<React.SetStateAction<IIncomes | null>>) => {
    const response = await incomeService.get(userId);
    setData(response);
}