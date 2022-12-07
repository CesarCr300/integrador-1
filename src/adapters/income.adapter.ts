import { IIncomes } from "@/models"

export const createIncomesAdapter = (data: any): IIncomes => {
    let categories = data?.categories?.map((category: any) => {
        return { name: category.nameCategory, amount: category.amountCategory }
    });
    if (categories == null) categories = [];
    let details = data?.details?.map((detail: any) => ({ description: detail.descriptionDetail, amount: detail.amountDetail, id: detail.idDetail, categoryName: detail.nameCategory }));
    if (details == null) details = [];
    return {
        amount: data.income,
        categories: categories,
        details: details
    }
}