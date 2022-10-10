export interface IIncomeCategory {
    name: string;
    amount: number
}

export interface IIncomeDetail {
    description: string;
    amount: number;
    id: number;
    categoryName: string
}

export interface IIncomes {
    amount: number;
    categories: IIncomeCategory[]
    details: IIncomeDetail[]
}

export interface IIncomeCreation {
    amount: number;
    description: string;
    date: string;
    categoryId: number;
    comment: string;
    accountId: number;
}