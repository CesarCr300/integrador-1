import { IAccount } from "@/models";

export const createAccountAdapter = (data: any): IAccount[] => {
    let response = data?.map((account: any): IAccount => {
        return { name: account.nameAccount, id: account.idAccount };
    });
    if (response == null) response = [];
    return response;
}