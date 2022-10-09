import { createIncomesAdapter } from "@/adapters/income.adapter";
import { IIncomeCreation, IIncomes } from "@/models/income.model";
import { serviceUrl } from "./index";

export const incomeService = {
    get: async (userId: number): Promise<IIncomes | null> => {
        // const petition = await fetch(serviceUrl + `v1/income?idUser=${userId}`);
        // if (!petition.ok) {
        //     return null;
        // }
        // const response = await petition.json();
        // return createIncomesAdapter(response);
        return {
            amount: 100,
            categories: [{ name: "salario", amount: 100 }],
            details: [{ description: "este es el pago del mes", amount: 100, id: 1, categoryName: "Salario" }]
        };
    },
    post: async (userId: number, income: IIncomeCreation): Promise<boolean> => {
        // const incomeService = {
        //     amount: income.amount,
        //     descriptionDetail: income.description,
        //     date: income.date,
        //     idCategory: income.categoryId,
        //     comment: income.comment,
        //     idAccount: userId
        // };
        // const petition = await fetch(serviceUrl + `v1/income`, { method: "POST", body: JSON.stringify(incomeService) });
        // return petition.ok;
        return true;
    },
    delete: async (incomeId: number): Promise<boolean> => {
        // const body = { idIncome: incomeId }
        // const petition = await fetch(serviceUrl + `v1/income/delete`, { method: "POST", body: JSON.stringify(body) });
        return true;
    }
};