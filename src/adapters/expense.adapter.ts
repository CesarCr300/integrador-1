import { IExpenseCategory, IExpenseDetail, IExpenses } from "@/models";

export const createExpensesAdapter = (data: any): IExpenses => {
    let categories = data.movementCategoryDTO?.map((category: any): IExpenseCategory => {
        return {
            name: category.nameCategory,
            amount: category.amountCategory
        }
    });
    let details = data.movementDetailDTO?.map((detail: any): IExpenseDetail => {
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
        amount: data.movement,
        categories,
        details
    }
}