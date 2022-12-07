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
        const petition = await fetch(API_URL + `v1/movements?idUser=${userId}&codeType=I`);
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
            idAccount: income.accountId,
            idUser: userId,
            codeType: "I"
        };
        const petition = await fetch(API_URL + `v1/movements/save`, {
            method: "POST", body: JSON.stringify(incomeService), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    },
    delete: async (incomeId: number): Promise<boolean> => {
        if ((window as any)?.isDevelopment) return true;
        const body = { idMovement: incomeId }
        console.log(body)
        const petition = await fetch(API_URL + `v1/movements/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
}; 