import { Button } from "@/components/Buttons/Button"
import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"
import { CategoriesList } from "./Components/CategoriesList"

export const Categories = () => {
  return (
    <BasicPage navbarValueProp={4}>
      <TabPanel value={4} index={4}>
        <Button onClick={()=>{}} text="Agregar"/>
        <h2>Categorías:</h2>
        <CategoriesList />
      </TabPanel>
    </BasicPage>
  )
}
