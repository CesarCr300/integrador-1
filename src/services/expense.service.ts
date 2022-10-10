import { createExpensesAdapter } from "@/adapters";
import { IExpenseCreation, IExpenses } from "@/models";
import { API_URL } from "@/utilities/variables";

export const expenseService = {
    get: async (userId: number): Promise<IExpenses | null> => {
        // const petition = await fetch(API_URL + `v1/expenses?idUser=${userId}`);
        // if (!petition.ok) {
        //     return null;
        // }
        // const response = await petition.json();
        // return createExpensesAdapter(response);
        return {
            amount: 100,
            categories: [{ name: "comida", amount: 100 }],
            details: [{ description: "semana", amount: 100, id: 1, categoryName: "comida" }]
        };
    },
    post: async (userId: number, expense: IExpenseCreation): Promise<boolean> => {
        // const body = {
        //     amount: expense.amount,
        //     descriptionDetail: expense.description,
        //     date: expense.date,
        //     idCategory: expense.categoryId,
        //     comment: expense.comment,
        //     idAccount: userId
        // };
        // const petition = await fetch(API_URL + `v1/expenses`, { method: "POST", body: JSON.stringify(body) });
        // return petition.ok;
        return true;
    },
    delete: async (expenseId: number): Promise<boolean> => {
        // const body = { idExpenses: expenseId }
        // const petition = await fetch(API_URL + `v1/expenses/delete`, { method: "POST", body: JSON.stringify(body) });
        // return petition.ok;
        return true;
    }
};