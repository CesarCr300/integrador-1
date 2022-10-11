import { createIncomesAdapter } from "@/adapters";
import { IIncomeCreation, IIncomes } from "@/models";
import { API_URL } from "@/utilities/variables";

export const incomeService = {
    get: async (userId: number): Promise<IIncomes | null> => {
        const petition = await fetch(API_URL + `v1/income?idUser=${userId}`);
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createIncomesAdapter(response);
    },
    post: async (userId: number, income: IIncomeCreation): Promise<boolean> => {
        const incomeService = {
            amount: income.amount,
            descriptionDetail: income.description,
            date: income.date,
            idCategory: income.categoryId,
            comment: income.comment,
            idAccount: userId
        };
        const petition = await fetch(API_URL + `v1/income/save`, {
            method: "POST", body: JSON.stringify(incomeService), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    },
    delete: async (incomeId: number): Promise<boolean> => {
        const body = { idIncome: incomeId }
        const petition = await fetch(API_URL + `v1/income/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
};