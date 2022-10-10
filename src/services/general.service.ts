import { createGeneralInformationAdapter } from "@/adapters";
import { API_URL } from "@/utilities/variables";
import { IGeneralInformation } from "@/models"

export const generalService = {
    get: async (userId: number): Promise<IGeneralInformation | null> => {
        // const petition = await fetch(API_URL + `v1/login?idUser=${userId}`);
        // if (!petition.ok) {
        //     return null;
        // }
        // const response = await petition.json();
        // return createGeneralInformationAdapter(response);
        return {
            incomesAmount: 2000,
            expensesAmount: 3000,
            accounts: [{ name: "BBVA", amount: 2000 }, { name: "Billetera", amount: 2000 }]
        }
    }
};