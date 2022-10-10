import { IIncomes } from "@/models"

export const createIncomesAdapter = (data: any): IIncomes => {
    const categories = data.categories.map((category: any) => {
        return { name: category.nameCategory, amount: category.amountCategory }
    });
    const details = data.details.map((detail: any) => ({ description: detail.descriptionDetail, amount: detail.amountDetail, id: detail.idDetail, categoryName: detail.nameCategory }));
    return {
        amount: data.income,
        categories: categories,
        details: details
    }
}