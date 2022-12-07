import { IConfigurationNotification } from "@/models/configuration.model";
import { configurationService } from "@/services/configuration.service";

export const updateConfigurationNotification = async(notification: IConfigurationNotification) => { 
    await configurationService.notification(notification);
}