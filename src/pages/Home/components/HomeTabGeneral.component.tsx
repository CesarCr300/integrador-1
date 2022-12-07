import { IGeneralInformation } from "@/models/general-information.model"
import { useEffect, useState } from "react"
import { getGeneralInformation } from "@/pages/Home/application/home-general.application";
import { Button } from "@/components/Buttons/Button";

export const HomeTabGeneral = () => {
  const [information, setInformation] = useState<IGeneralInformation | null>(null);
  const userId = 1;
  useEffect(() => {
    getGeneralInformation(userId, setInformation);
  }, [])
  return (
    <div>
      <section>
        <h2>Ingresos: {information?.incomesAmount}</h2>
        <h2>Egresos: {information?.expensesAmount}</h2>
      </section>
      <section>
        <h2>Cuentas</h2>
        <section>
          {information?.accounts.map((account, counter) => {
            return <article key={counter}>
              <h3>{account.name}: s/{account.amount}</h3>
            </article>
          })}
        </section>
      </section>
      <section>
        <Button text="Descargar reporte (pdf)" onClick={() => {}}></Button>
      </section>
    </div>
  )
}
