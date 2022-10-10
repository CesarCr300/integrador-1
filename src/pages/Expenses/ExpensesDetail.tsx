import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { useNavigate, useParams } from "react-router";
import { deleteExpenseById } from "@/pages/Expenses/application/expense.application";
import { useEffect, useState } from "react";

export const ExpensesDetail = () => {
    let { id } = useParams();
    const [expenseId, setExpenseId] = useState<number | null>(null);
    const navigate = useNavigate();
    const handleDelete = () => {
        if (expenseId === null) return;
        deleteExpenseById(expenseId, navigate);
    }
    useEffect(() => {
        if (id === undefined) return;
        setExpenseId(parseInt(id));
    }, [id])

    return (
        <BasicPage navbarValueProp={2}>
            <TabPanel value={2} index={2}>
                Detalles
                <button onClick={handleDelete}>Eliminar</button>
            </TabPanel>
        </BasicPage>
    )
}
