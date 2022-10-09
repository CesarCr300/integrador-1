import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"

export const Incomes = () => {
  return (
    <BasicPage navbarValueProp={1}>
      <TabPanel value={1} index={1}>
        Ingresos
      </TabPanel>
    </BasicPage>
  )
}
