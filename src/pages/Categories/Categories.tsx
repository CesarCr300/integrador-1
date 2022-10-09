import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"

export const Categories = () => {
  return (
    <BasicPage navbarValueProp={4}>
      <TabPanel value={4} index={4}>
        Categorías
      </TabPanel>
    </BasicPage>
  )
}
