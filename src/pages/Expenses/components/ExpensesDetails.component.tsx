import { IconDelete } from "@/components/Icons/IconDelete"
import { IExpenseDetail } from "@/models"
import { Link, useNavigate } from "react-router-dom"
import { deleteExpenseById } from "../application/expense.application"

interface IExpensesDetailsProps {
    details?: IExpenseDetail[]
}

export const ExpensesDetails = ({ details }: IExpensesDetailsProps) => {
    const navigate = useNavigate();
    const handleDelete = (id: number) => { 
        deleteExpenseById(id, navigate);
    }
    return (
        <div>
            <h2>Detalles</h2>
            <section>
                {details?.map(detail => {
                    return (
                        <article key={detail.id}>
                            <p>{detail.description} - {detail.categoryName}: s/{detail.amount}</p>
                            <IconDelete onClick={() => { handleDelete(detail.id) }}></IconDelete>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
