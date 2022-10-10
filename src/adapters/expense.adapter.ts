import { IExpenseCategory, IExpenseDetail, IExpenses } from "@/models";

export const createExpensesAdapter = (data: any): IExpenses[] => {
    return data.map((item: any): IExpenses => {
        return {
            amount: item.expenses,
            categories: item.category.map((category: any): IExpenseCategory => {
                return {
                    name: category.nameCategory,
                    amount: category.amountCategory
                }
            }),
            details: item.detail.map((detail: any): IExpenseDetail => {
                return {
                    description: detail.descriptionDetail,
                    amount: detail.amountDetail,
                    id: detail.idDetail,
                    categoryName: detail.categoryName
                }
            })
        }
    });
}