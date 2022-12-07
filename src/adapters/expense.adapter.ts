import { IExpenseCategory, IExpenseDetail, IExpenses } from "@/models";

export const createExpensesAdapter = (data: any): IExpenses => {
    let categories = data.category?.map((category: any): IExpenseCategory => {
        return {
            name: category.nameCategory,
            amount: category.amountCategory
        }
    });
    let details = data.detail?.map((detail: any): IExpenseDetail => {
        return {
            description: detail.descriptionDetail,
            amount: detail.amountDetail,
            id: detail.idDetail,
            categoryName: detail.categoryName
        }
    })
    if (categories == null) categories = [];
    if (details == null) details = []
    return {
        amount: data.expenses,
        categories,
        details
    }
}