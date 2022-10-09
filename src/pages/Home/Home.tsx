import { MainTab } from "@/components/MainTab.component";
import { TabPanel } from "@/components/TabPanel";
import { useState } from "react"
import { useNavigate } from "react-router";
import { HomeTabGeneral } from "./components/General/HomeTabGeneral.component";
import { HomeTabIncome } from "./components/Income/HomeTabIncome.component";

interface IHomeProps {
    navbarValueProp: number;
    showTab?: boolean
}

export const Home = ({ navbarValueProp = 0, showTab = true }: IHomeProps) => {
    const [navbarValue, setNavbarValue] = useState(navbarValueProp);
    const handleNavbarChange = (event: React.SyntheticEvent, newValue: number) => { setNavbarValue(newValue) };
    const navigate = useNavigate();
    return (
        <>
            <MainTab handleNavbarChange={handleNavbarChange} navbarValue={navbarValue} navigate={navigate} />
            {showTab && (<>
                <TabPanel value={navbarValue} index={0}>
                    <HomeTabGeneral />
                </TabPanel>
                <TabPanel value={navbarValue} index={1}>
                    <HomeTabIncome />
                </TabPanel>
                <TabPanel value={navbarValue} index={2}>
                    Egresos
                </TabPanel>
                <TabPanel value={navbarValue} index={3}>
                    Cuentas
                </TabPanel>
                <TabPanel value={navbarValue} index={4}>
                    Categorías
                </TabPanel></>)}
        </>
    )
}
