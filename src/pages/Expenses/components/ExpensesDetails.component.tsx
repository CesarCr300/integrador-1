import { IExpenseDetail } from "@/models"
import { Link } from "react-router-dom"

interface IExpensesDetailsProps {
    details?: IExpenseDetail[]
}

export const ExpensesDetails = ({ details }: IExpensesDetailsProps) => {
    return (
        <div>
            <h2>Detalles</h2>
            <section>
                {details?.map(detail => {
                    return (
                        <article key={detail.id}>
                            <p>{detail.description} - {detail.categoryName}: s/{detail.amount}</p>
                            <Link to={{ pathname: `${detail.id}` }}>ver</Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
