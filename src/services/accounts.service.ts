import { createAccountAdapter } from "@/adapters";
import { IAccount, IAccountCreation } from "@/models";
import { API_URL } from "@/utilities/variables";

export const accountService = {
    get: async (userId: number): Promise<IAccount[] | null> => {
        if ((window as any)?.isDevelopment) {
            return [
                { id: 1, name: "BBVA" }
            ];
        }
        const petition = await fetch(`${API_URL}v1/accounts?idUser=${userId}`);
        if (!petition.ok) return null;
        let data = await petition.json();

        return createAccountAdapter(data);
    },
    delete: async (accountId: number): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = { idAccount: accountId };
        const petition = await fetch(`${API_URL}v1/accounts/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    },
    create: async (account: IAccountCreation): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = { idUser: account.userId, nameAccount: account.name, descriptionAccount: account.description };
        const petition = await fetch(`${API_URL}v1/accounts/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
}