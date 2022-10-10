import { getCategoriesToSelect } from "@/application/categories.application";
import { Select } from "@/components/Select.component";
import { useForm } from "@/hooks/useForm"
import { ISelectOption } from "@/models";
import { IIncomeCreation } from "@/models/income.model";
import { useEffect, useState } from "react";

export const IncomesCreationForm = () => {
    const { formValues, handleInputChange, handleSelectChange } = useForm<IIncomeCreation>({
        amount: 0,
        description: "",
        date: "",
        categoryId: 1,
        comment: ""
    });
    const [categoriesOptions, setCategoriesOptions] = useState<ISelectOption[]>([]);
    useEffect(() => {
        getCategoriesToSelect(1, setCategoriesOptions);
    }, [])
    useEffect(() => {
        console.log(formValues)
    }, [formValues])


    return (
        <form>
            <div>
                <input type="number" name="amount" value={formValues.amount} onChange={handleInputChange} />
                <input name="description" type="text" />
            </div>
            <div>
                <input type="date" />
                <Select handleSelectChange={handleSelectChange} name="categoryId" value={formValues.categoryId} options={categoriesOptions} />
            </div>
            <div>
                <input type="text" />
                <select name="select">
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
        </form>
    )
}
