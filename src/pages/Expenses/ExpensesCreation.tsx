import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { ExpensesCreationForm } from "@/pages/Expenses/components/ExpensesCreationForm.component"

export const ExpensesCreation = () => {
    return (
        <BasicPage navbarValueProp={2}>
            <TabPanel value={2} index={2}>
                <h2>Agregar Egreso</h2>
                <ExpensesCreationForm />
            </TabPanel>
        </BasicPage>
    )
}
