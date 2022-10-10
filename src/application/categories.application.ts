import { ISelectOption } from "@/models";
import { categoryService } from "@/services"

export const getCategoriesToSelect = async (userId:number,setData: React.Dispatch<React.SetStateAction<ISelectOption[]>>) => {
    const categories = await categoryService.get(userId);
    if (categories === null) return;
    const options = categories.map((category): ISelectOption => {
        return {
            value: category.id,
            label: category.name
        }
    })
    setData(options);
}
