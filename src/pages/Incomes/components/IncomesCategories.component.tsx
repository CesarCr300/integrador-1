import { IIncomeCategory } from "@/models/income.model"

interface IIncomesCategoriesProps {
    categories?: IIncomeCategory[]
}

export const IncomesCategories = ({ categories }: IIncomesCategoriesProps) => {
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
