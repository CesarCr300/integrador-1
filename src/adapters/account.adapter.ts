import { IAccount } from "@/models";

export const createAccountAdapter = (data: any): IAccount[] => {
    return data.accounts.map((account: any): IAccount => {
        return { name: account.nameAccount, id: account.idAccount };
    });
}