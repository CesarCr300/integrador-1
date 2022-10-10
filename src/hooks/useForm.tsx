import { ChangeEventHandler, useState } from 'react';
export const useForm = <T extends {}>(values: T) => {
    const [formValues, setFormValues] = useState<T>({ ...values });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
    return { formValues, handleInputChange, handleSelectChange };
}