import { TabPanel } from "@/components"
import { BasicPage } from "@/pages"

export const Accounts = () => {
    return (
        <BasicPage navbarValueProp={3}>
            <TabPanel value={3} index={3}>
                Cuentas
            </TabPanel>
        </BasicPage>
    )
}
