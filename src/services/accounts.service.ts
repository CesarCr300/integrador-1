import { createAccountAdapter } from "@/adapters";
import { IAccount } from "@/models";
import { serviceUrl } from "@/services";

export const accountService = {
    get: async (userId: number): Promise<IAccount[] | null> => {
        // const petition = await fetch(`${serviceUrl}v1/accounts?idUser=${userId}`);
        // if (!petition.ok) return null;
        // const data = await petition.json();
        // return createAccountAdapter(data);
        return [{ name: "BBVA", id: 1 }, { name: "Billetera", id: 2 }]
    }
}