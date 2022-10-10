import { TabPanel } from "@/components/TabPanel"
import { IIncomes } from "@/models/income.model";
import { BasicPage } from "@/pages/BasicPage"
import { useEffect, useState } from "react";
import { getAllIncomes } from "@/pages/Incomes/application/income.application";
import { IncomesCategories } from "@/pages/Incomes/components/IncomesCategories.component";
import { IncomesDetails } from "@/pages/Incomes/components/IncomesDetails.component";
import { Link } from "react-router-dom";

export const Expenses = () => {
  const [information, setInformation] = useState<IIncomes | null>(null);
  const userId = 1;
  useEffect(() => {
    getAllIncomes(userId, setInformation);
  }, []);
  return (
    <BasicPage navbarValueProp={1}>
      <TabPanel value={1} index={1}>
        <div>
          <div>
            <div><h2>Ingresos: {information?.amount}</h2></div>
            <div><Link to={{ pathname: "create" }}>Agregar</Link></div>
          </div>
          <IncomesCategories categories={information?.categories} />
          <IncomesDetails details={information?.details} />
        </div>
      </TabPanel>
    </BasicPage>
  )
}
