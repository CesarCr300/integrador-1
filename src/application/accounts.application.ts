import { ISelectOption } from "@/models";
import { accountService } from "@/services";

export const getAccountsToSelect = async (userId: number): Promise<ISelectOption[]> => {
    const accounts = await accountService.get(userId);
    if (accounts === null) return [];
    return accounts.map((account) => ({ label: account.name, value: account.id }));
}