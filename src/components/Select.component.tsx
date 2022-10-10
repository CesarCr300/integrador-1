import { ISelectOption } from "@/models"

interface ISelectProps {
    name: string,
    value: string | number,
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>, isNumber: boolean) => void,
    options: ISelectOption[],
    valueIsNumber?: boolean
}
export const Select = ({ name, value, handleSelectChange, options, valueIsNumber=false }: ISelectProps) => {
    return (
        <select name={name} onChange={e => { handleSelectChange(e, valueIsNumber) }} value={value}>
            {options.map((option, counter) => <option key={counter} value={option.value}>{option.label}</option>)}
        </select>
    )
}