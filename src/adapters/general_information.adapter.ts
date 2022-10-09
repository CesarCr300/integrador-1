import { IGeneralInformation } from "@/models/general_information.model";

export const createGeneralInformationAdapter = (data: any): IGeneralInformation => {
    const accounts = data?.accounts.map((account: any) => {
        return { name: account.nameAccount, amount: account.amountAccount };
    });
    return { accounts, incomesAmount: data.income, expensesAmount: data.expenses };
}