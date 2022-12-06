import { IAccount, IAccountCreation } from "@/models";
import { NavigateFunction } from "react-router";
import { accountService } from "../../../services/accounts.service";


export const getAccounts = async (userId: number, setData: React.Dispatch<React.SetStateAction<IAccount[] | null>>) => {
    const accounts = await accountService.get(userId);
    setData(accounts);
}

export const deleteAccount = async (id: number, setAccounts: React.Dispatch<React.SetStateAction<IAccount[] | null>>) => {
    const successful = await accountService.delete(id);
    if (!successful) return;
    setAccounts((accounts) => {
        let response = accounts?.filter((account) => account.id !== id)
        if (response == undefined || response?.length == 0) return [];
        return response;
    });
}

export const createAccount = async (account: IAccountCreation, navigate: NavigateFunction) => {
    const successful = await accountService.create(account);
    if (!successful) return;
    navigate("/accounts")
}