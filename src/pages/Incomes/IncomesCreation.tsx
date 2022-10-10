import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { IncomesCreationForm } from "@/pages/Incomes/components/IncomesCreationForm.component"

export const IncomesCreate = () => {
    return (
        <BasicPage navbarValueProp={1}>
            <TabPanel value={1} index={1}>
                <h2>Agregar Ingreso</h2>
                <IncomesCreationForm />
            </TabPanel>
        </BasicPage>
    )
}
