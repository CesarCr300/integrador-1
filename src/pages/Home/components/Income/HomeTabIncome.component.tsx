import { IIncomes } from '@/models/income.model';
import { useEffect, useState } from 'react';
import { getAllIncomes } from '../../application/home_income.application';
export const HomeTabIncome = () => {
    const [information, setInformation] = useState<IIncomes | null>(null);
    const userId = 1;
    useEffect(() => {
        getAllIncomes(userId, setInformation);
    }, []);
    return (
        <div>
            <div>
                <div><h2>Ingresos: {information?.amount}</h2></div>
                <div><button>Agregar</button></div>
            </div>
            <div>
                <h2>Categorías</h2>
                <section>
                    {information?.categories.map((category, counter) => {
                        return <article key={counter}>
                            <p>{category.name} : s/{category.amount}</p>
                        </article>
                    })}
                </section>
            </div>
            <div>
                <h2>Detalles</h2>
                <section>
                    {information?.details.map(detail => {
                        return (
                            <article key={detail.id}>
                                <p>{detail.description} - {detail.categoryName}: s/{detail.amount}</p>
                                <button>ver</button>
                            </article>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}
