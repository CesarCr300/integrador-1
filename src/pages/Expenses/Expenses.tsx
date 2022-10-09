import { TabPanel } from "@/components/TabPanel"
import { BasicPage } from "@/pages/BasicPage"

export const Expenses = () => {
  return (
    <BasicPage navbarValueProp={2}>
      <TabPanel value={2} index={2}>
        Egresos
      </TabPanel>
    </BasicPage>
  )
}
