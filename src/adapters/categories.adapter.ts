import { ICategory } from "@/models/category.model"

export const createCategoryAdapter = (data: any): ICategory[] => {
    return data.map((category: any) => {
        return {
            name: category.nameCategory,
            id: category.idCategory
        }
    })
}