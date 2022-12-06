import { TabPanel } from "@/components"
import { BasicPage } from "../BasicPage"
import { AccountCreationForm } from "./components/AccountCreationForm"

export const AccountsCreation = () => {
  return (
    <BasicPage navbarValueProp={3}>
      <TabPanel value={3} index={3}>
        <h2>Agregar Cuenta</h2>
        < AccountCreationForm />
      </TabPanel>
    </BasicPage>
  )
}
