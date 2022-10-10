export interface IGeneralInformation {
    incomesAmount: number;
    expensesAmount: number;
    accounts: { name: string, amount: number }[];
}