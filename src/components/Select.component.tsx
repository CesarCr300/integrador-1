import { ISelectOption } from "@/models"

interface ISelectProps {
    name: string,
    value: string | number,
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    options: ISelectOption[]
}
export const Select = ({ name, value, handleSelectChange, options }: ISelectProps) => {
    return (
        <select name={name} onChange={e => { handleSelectChange(e) }} value={value}>
            {options.map((option, counter) => <option key={counter} value={option.value}>{option.label}</option>)}
        </select>
    )
}