import { IconDelete } from "@/components/Icons/IconDelete"
import { IIncomeDetail, IIncomes } from "@/models/income.model"
import {useEffect} from "react"
import { Link } from "react-router-dom"
import { deleteIncomeById } from "../application/income.application"

interface IIncomesDetailsProps {
    information?: IIncomes | null,
    setActualizar: React.Dispatch<React.SetStateAction<boolean>>
}

export const IncomesDetails = ({ information, setActualizar }: IIncomesDetailsProps) => {
    const handleDelete = (id: number) => {
        deleteIncomeById(id, setActualizar);
    }
    
    return (
        <div>
            <h2>Detalles</h2>
            <section>
                {information?.details?.map(detail => {
                    return (
                        <article key={detail.id}>
                            <p>{detail.description} - {detail.categoryName}: s/{detail.amount}</p>
                            <IconDelete onClick={() => { handleDelete(detail.id) }} />
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
