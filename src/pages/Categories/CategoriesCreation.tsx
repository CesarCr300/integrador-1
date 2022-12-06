import { TabPanel } from "@/components"
import { BasicPage } from "../BasicPage"
import { CategoriesCreationForm } from "./Components/CategoriesCreationForm"

export const CategoriesCreation = () => {
  return (
    <BasicPage navbarValueProp={4}>
      <TabPanel value={4} index={4}>
        <h2>Agregar categoría</h2>
        <CategoriesCreationForm></CategoriesCreationForm>
      </TabPanel>
    </BasicPage>
  )
}
