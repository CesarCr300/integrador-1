import { IGeneralInformation } from "@/models/general-information.model";
import { generalService } from "@/services/general.service";

export const getGeneralInformation = async (userId: number, setInformation: React.Dispatch<React.SetStateAction<IGeneralInformation | null>>) => {
    const generalInformation = await generalService.get(userId);
    if (generalInformation === null) {
        return;
    }
    setInformation(generalInformation);
}

export const downloadReport = async (userId: number) => {
    const blob = await generalService.downloadReport(userId);
    if (blob === null) return;
    // Create blob link to download
    const url = window.URL.createObjectURL(
        new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        `FileName.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link?.parentNode?.removeChild(link);
}