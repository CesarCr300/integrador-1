import { ISelectOption } from "@/models";
import { accountService } from "@/services";

export const getAccountsToSelect = async (userId: number, setData: React.Dispatch<React.SetStateAction<ISelectOption[]>>): Promise<void> => {
    const accounts = await accountService.get(userId);
    if (accounts === null) return;
    const options = accounts.map((account) => ({ label: account.name, value: account.id }));
    setData(options);
}