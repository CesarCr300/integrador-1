import { IGeneralInformation } from "@/models/general-information.model";
import { generalService } from "@/services/general.service";

export const getGeneralInformation = async (userId: number, setInformation: React.Dispatch<React.SetStateAction<IGeneralInformation | null>>) => {
    const generalInformation = await generalService.get(userId);
    if (generalInformation === null) {
        return;
    }
    setInformation(generalInformation);
}