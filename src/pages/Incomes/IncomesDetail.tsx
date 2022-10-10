import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { useNavigate, useParams } from "react-router";
import { deleteById } from "@/pages/Incomes/application/income.application";
import { useEffect, useState } from "react";

export const IncomesDetail = () => {
    let { id } = useParams();
    const [incomeId, setIncomeId] = useState<number | null>(null);
    const navigate = useNavigate();
    const handleDelete = () => {
        if (incomeId === null) return;
        deleteById(incomeId, navigate);
    }
    useEffect(() => {
        if (id === undefined) return;
        setIncomeId(parseInt(id));
    }, [id])

    return (
        <BasicPage navbarValueProp={1}>
            <TabPanel value={1} index={1}>
                Detalles
                <button onClick={handleDelete}>Eliminar</button>
            </TabPanel>
        </BasicPage>
    )
}
