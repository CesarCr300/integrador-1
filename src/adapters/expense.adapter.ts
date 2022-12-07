import { IExpenseCategory, IExpenseDetail, IExpenses } from "@/models";

export const createExpensesAdapter = (data: any): IExpenses => {
    return {
        amount: data.expenses,
        categories: data.category?.map((category: any): IExpenseCategory => {
            return {
                name: category.nameCategory,
                amount: category.amountCategory
            }
        }),
        details: data.detail?.map((detail: any): IExpenseDetail => {
            return {
                description: detail.descriptionDetail,
                amount: detail.amountDetail,
                id: detail.idDetail,
                categoryName: detail.categoryName
            }
        })
    }
}