import { getAccountsToSelect } from "@/application";
import { getCategoriesToSelect } from "@/application";
import { Select } from "@/components";
import { useForm } from "@/hooks"
import { ISelectOption, IExpenseCreation } from "@/models";
import { createExpense } from "@/pages/Expenses/application/expense.application";
import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const ExpensesCreationForm = () => {
    const navigate = useNavigate();
    const user = useSelector((store: AppStore) => store.user);

    const { formValues, handleInputChange, handleSelectChange, setFormValues } = useForm<IExpenseCreation>({
        amount: 0,
        description: "",
        date: "",
        categoryId: 1,
        comment: "",
        accountId: 1
    });
    const [categoriesOptions, setCategoriesOptions] = useState<ISelectOption[]>([]);
    const [accountsOptions, setAccountsOptions] = useState<ISelectOption[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createExpense(user.userId, formValues, navigate);
    }

    useEffect(() => {
        getCategoriesToSelect(user.userId, setCategoriesOptions);
        getAccountsToSelect(user.userId, setAccountsOptions);
    }, []);
    useEffect(() => {
        setFormValues((prevFormValues) => { return { ...prevFormValues, categoryId: categoriesOptions[0].value as number } })
    }, [categoriesOptions]);
    useEffect(() => {
        setFormValues((prevFormValues) => { return { ...prevFormValues, accountId: accountsOptions[0].value as number } })
    }, [setAccountsOptions]);

    return (
        <form onSubmit={handleSubmit}>
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
