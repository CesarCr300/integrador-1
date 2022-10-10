import { getAccountsToSelect } from "@/application";
import { getCategoriesToSelect } from "@/application";
import { Select } from "@/components";
import { useForm } from "@/hooks"
import { ISelectOption, IIncomeCreation } from "@/models";
import { useEffect, useState } from "react";

export const IncomesCreationForm = () => {
    const { formValues, handleInputChange, handleSelectChange } = useForm<IIncomeCreation>({
        amount: 0,
        description: "",
        date: "",
        categoryId: 1,
        comment: "",
        accountId: 1
    });
    const [categoriesOptions, setCategoriesOptions] = useState<ISelectOption[]>([]);
    const [accountsOptions, setAccountsOptions] = useState<ISelectOption[]>([]);
    useEffect(() => {
        getCategoriesToSelect(1, setCategoriesOptions);
        getAccountsToSelect(1, setAccountsOptions);
    }, []);
    return (
        <form>
            <div>
                <input type="number" name="amount" value={formValues.amount} onChange={handleInputChange} />
                <input name="description" type="text" value={formValues.description} onChange={handleInputChange} />
            </div>
            <div>
                <input type="date" name="date" value={formValues.date} onChange={handleInputChange} />
                <Select handleSelectChange={handleSelectChange} name="categoryId" value={formValues.categoryId} options={categoriesOptions} valueIsNumber={true} />
            </div>
            <div>
                <input type="text" name="comment" value={formValues.comment} onChange={handleInputChange} />
                <Select handleSelectChange={handleSelectChange} name="accountId" value={formValues.accountId} options={accountsOptions} valueIsNumber={true} />
            </div>
            <button>Crear</button>
        </form>
    )
}
