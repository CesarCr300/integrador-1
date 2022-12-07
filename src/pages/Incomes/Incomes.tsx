import { TabPanel } from "@/components/TabPanel"
import { IIncomes } from "@/models/income.model";
import { BasicPage } from "@/pages/BasicPage"
import { useEffect, useState } from "react";
import { getAllIncomes } from "@/pages/Incomes/application/income.application";
import { IncomesCategories } from "@/pages/Incomes/components/IncomesCategories.component";
import { IncomesDetails } from "@/pages/Incomes/components/IncomesDetails.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Button } from "@/components/Buttons/Button";
import { Row } from "@/components/Row";

export const Incomes = () => {
  const [information, setInformation] = useState<IIncomes | null>(null);
  const [actualizar, setActualizar] = useState(true);
  const user = useSelector((store: AppStore) => store.user);
  useEffect(() => {
    getAllIncomes(user.userId, setInformation);
  }, [actualizar]);
  return (
    <BasicPage navbarValueProp={1}>
      <TabPanel value={1} index={1}>
        <div>
          <Row>
            <div><h2>Ingresos: {information?.amount}</h2></div>
            <div><Link to={{ pathname: "create" }}><Button text="Agregar" onClick={() => { }}></Button></Link></div>
          </Row>
          <IncomesCategories categories={information?.categories} />
          <IncomesDetails information={information} setActualizar={setActualizar} />
        </div>
      </TabPanel>
    </BasicPage>
  )
}
