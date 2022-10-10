import { TabPanel } from "@/components/TabPanel";
import { BasicPage } from "@/pages/BasicPage";
import { HomeTabGeneral } from "@/pages/Home/components/HomeTabGeneral.component";
import { AppStore } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export const Home = () => {
    const user = useSelector((store: AppStore) => store.user);
    useEffect(() => { console.log(user) }, [user])
    return (
        <BasicPage navbarValueProp={0}>
            <TabPanel value={0} index={0}>
                <HomeTabGeneral />
            </TabPanel>
        </BasicPage>
    )
}
