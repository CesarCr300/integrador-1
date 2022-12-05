import { createIncomesAdapter } from "@/adapters";
import { IIncomeCreation, IIncomes } from "@/models";
import { API_URL } from "@/utilities/variables";

export const incomeService = {
    get: async (userId: number): Promise<IIncomes | null> => {
        if ((window as any)?.isDevelopment) {
            return {
                amount: 100,
                categories: [{ name: "salario", amount: 100 }],
                details: [{ description: "este es el pago del mes", amount: 100, id: 1, categoryName: "Salario" }]
            };
        }
        const petition = await fetch(API_URL + `v1/income?idUser=${userId}`);
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createIncomesAdapter(response);
    },
    post: async (userId: number, income: IIncomeCreation): Promise<boolean> => {
        if ((window as any)?.isDevelopment) return true;
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
        if ((window as any)?.isDevelopment) return true;
        const body = { idIncome: incomeId }
        const petition = await fetch(API_URL + `v1/income/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
};