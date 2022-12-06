import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppStore } from "@/redux/store";
import { IExpenses } from "@/models";
import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { ExpenseCategories } from "@/pages/Expenses/components/ExpenseCategories.component";
import { ExpensesDetails } from "@/pages/Expenses/components/ExpensesDetails.component";
import { getAllExpenses } from "@/pages/Expenses/application/expense.application";
import { Button } from "@/components/Buttons/Button";
import { Row } from "@/components/Row";

export const Expenses = () => {
  const user = useSelector((store: AppStore) => store.user);

  const [information, setInformation] = useState<IExpenses | null>(null);

  useEffect(() => {
    getAllExpenses(user.userId, setInformation);
  }, []);
  return (
    <BasicPage navbarValueProp={2}>
      <TabPanel value={2} index={2}>
        <div>
          <Row>
            <div><h2>Egresos: {information?.amount}</h2></div>
            <div><Link to={{ pathname: "create" }}><Button onClick={() => { }} text="Agregar" /></Link></div>
          </Row>
          <ExpenseCategories categories={information?.categories} />
          <ExpensesDetails details={information?.details} />
        </div>
      </TabPanel>
    </BasicPage>
  )
}
