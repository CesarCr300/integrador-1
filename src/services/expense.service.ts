import { createExpensesAdapter } from "@/adapters";
import { IExpenseCreation, IExpenses } from "@/models";
import { API_URL } from "@/utilities/variables";

export const expenseService = {
    get: async (userId: number): Promise<IExpenses | null> => {
        if ((window as any)?.isDevelopment) {
            return {
                amount: 100,
                categories: [{ name: "comida", amount: 100 }],
                details: [{ description: "semana", amount: 100, id: 1, categoryName: "comida" }]
            }
        }
        const petition = await fetch(API_URL + `v1/movements?idUser=${userId}&codeType=E`);
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createExpensesAdapter(response);
    },
    post: async (userId: number, expense: IExpenseCreation): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = {
            amount: expense.amount,
            descriptionDetail: expense.description,
            date: expense.date,
            idCategory: expense.categoryId,
            comment: expense.comment,
            idAccount: expense.accountId,
            idUser: userId,
            codeType: "E"
        };
        const petition = await fetch(API_URL + `v1/expenses/save`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    },
    delete: async (expenseId: number): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = { idMovement: expenseId }
        const petition = await fetch(API_URL + `v1/movements/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
};