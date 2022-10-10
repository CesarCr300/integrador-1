import { IExpenseCategory } from "@/models"

interface IExpenseCategoriesProps {
    categories?: IExpenseCategory[]
}

export const ExpenseCategories = ({ categories }: IExpenseCategoriesProps) => {
    return (
        <div>
            <h2>Categorías</h2>
            <section>
                {
                    categories?.map((category, counter) => {
                        return <article key={counter}>
                            <p>{category.name} : s/{category.amount}</p>
                        </article>
                    })
                }
            </section>
        </div>
    )
}
