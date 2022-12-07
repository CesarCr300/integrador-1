import { IConfigurationNotification } from "@/models/configuration.model";
import { API_URL } from "@/utilities/variables";

export const configurationService = {
    notification: async (configuration: IConfigurationNotification) => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = { idUser: configuration.userId, trueOrFalse: configuration.sendNotification ? 1 : 0 }
        const petition = await fetch(API_URL + "v1/resume/notification", {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            },
        });
        return petition.ok;
    }
};