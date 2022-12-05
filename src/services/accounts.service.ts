import { createAccountAdapter } from "@/adapters";
import { IAccount } from "@/models";
import { API_URL } from "@/utilities/variables";

export const accountService = {
    get: async (userId: number): Promise<IAccount[] | null> => {
        let data;
        if ((window as any)?.isDevelopment) {
            data = { name: "Cesar", lastName: "Contreras", idUser: 1 }
        } else {
            const petition = await fetch(`${API_URL}v1/accounts?idUser=${userId}`);
            if (!petition.ok) return null;
            data = await petition.json();
        }
        return createAccountAdapter(data);
    }
}