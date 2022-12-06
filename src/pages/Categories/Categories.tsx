import { Button } from "@/components/Buttons/Button"
import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { Link } from "react-router-dom"
import { CategoriesList } from "./Components/CategoriesList"

export const Categories = () => {
  return (
    <BasicPage navbarValueProp={4}>
      <TabPanel value={4} index={4}>
        <div><Link to={{ pathname: "create" }}><Button onClick={() => { }} text="Agregar" /></Link></div>
        <h2>Categorías:</h2>
        <CategoriesList />
      </TabPanel>
    </BasicPage>
  )
}
