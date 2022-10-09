export interface IIncomes {
    amount: number;
    categories: { name: string, amount: number }[]
    details: { description: string, amount: number, id: number, categoryName: string }[]
}

export interface IIncomeCreation {
    amount: number;
    description: string;
    date: string;
    categoryId: number;
    comment: string;
}