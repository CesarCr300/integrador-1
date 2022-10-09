import { TabPanel } from "@/components/TabPanel";
import { BasicPage } from "@/pages/BasicPage";
import { HomeTabGeneral } from "./components/General/HomeTabGeneral.component";

export const Home = () => {
    return (
        <BasicPage navbarValueProp={0}>
            <TabPanel value={0} index={0}>
                <HomeTabGeneral />
            </TabPanel>
        </BasicPage>
    )
}
