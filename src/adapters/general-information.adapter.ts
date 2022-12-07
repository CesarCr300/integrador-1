import { IGeneralInformation } from "@/models";

export const createGeneralInformationAdapter = (data: any): IGeneralInformation => {
    let accounts = data?.accounts?.map((account: any) => {
        return { name: account.nameAccount, amount: account.amountAccount };
    });
    if (accounts == null) accounts = [];
    return { accounts, incomesAmount: data.income, expensesAmount: data.expenses };
}