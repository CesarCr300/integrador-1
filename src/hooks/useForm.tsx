import { ChangeEventHandler, useState } from 'react';
export const useForm = <T extends {}>(values: T) => {
    const [formValues, setFormValues] = useState<T>({ ...values });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, isNumber = false) => {
        const { name, value } = event.target;
        if (isNumber) {
            setFormValues({ ...formValues, [name]: Number(value) });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    }
    return { formValues, handleInputChange, handleSelectChange };
}