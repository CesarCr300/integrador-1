import { ICategory } from "@/models"

export const createCategoryAdapter = (data: any): ICategory[] => {
    return data.categorys?.map((category: any) => {
        return {
            name: category.nameCategory,
            id: category.idCategory
        }
    })
}