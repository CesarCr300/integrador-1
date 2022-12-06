import { TabPanel } from "@/components"
import { Button } from "@/components/Buttons/Button"
import { BasicPage } from "@/pages"
import { Link } from "react-router-dom"
import { AccountList } from "./components/AccountList"

export const Accounts = () => {
    return (
        <BasicPage navbarValueProp={3}>
            <TabPanel value={3} index={3}>
                <div><Link to={{ pathname: "create" }}><Button onClick={() => { }} text="Agregar" /></Link></div>
                <h2>Cuentas</h2>
                <AccountList />
            </TabPanel>
        </BasicPage>
    )
}
