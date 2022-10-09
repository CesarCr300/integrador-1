import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"

export const Accounts = () => {
    return (
        <BasicPage navbarValueProp={3}>
            <TabPanel value={3} index={3}>
                Cuentas
            </TabPanel>
        </BasicPage>
    )
}
