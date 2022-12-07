import { TabPanel } from "@/components"
import { BasicPage } from "../BasicPage"
import { ConfigurationForm } from "./components/ConfigurationForm"

export const Configuration = () => {
    return (
        <BasicPage navbarValueProp={5}>
            <TabPanel value={5} index={5}>
                <ConfigurationForm />
            </TabPanel>
        </BasicPage>
    )
}
