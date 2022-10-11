import { createGeneralInformationAdapter } from "@/adapters";
import { API_URL } from "@/utilities/variables";
import { IGeneralInformation } from "@/models"

export const generalService = {
    get: async (userId: number): Promise<IGeneralInformation | null> => {
        const petition = await fetch(API_URL + `v1/resume?idUser=${userId}`);
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createGeneralInformationAdapter(response);
    }
};