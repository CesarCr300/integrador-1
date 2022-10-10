export interface IExpenseCategory {
    name: string;
    amount: number
}

export interface IExpenseDetail {
    description: string;
    amount: number;
    id: number;
    categoryName: string
}

export interface IExpenses {
    amount: number;
    categories: IExpenseCategory[],
    details: IExpenseDetail[]
}

export interface IExpenseCreation {
    amount: number;
    description: string;
    date: string;
    categoryId: number;
    comment: string;
    accountId: number;
}