import { TabPanel } from "@/components/TabPanel";
import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { HomeTabGeneral } from "./components/General/HomeTabGeneral.component";
import { HomeTabIncome } from "./components/Income/HomeTabIncome.component";

export const Home = () => {
    const [navbarValue, setNavbarValue] = useState(0);
    const handleNavbarChange = (event: React.SyntheticEvent, newValue: number) => { setNavbarValue(newValue) };
    return (
        <>
            <Box>
                <Tabs value={navbarValue} onChange={handleNavbarChange} aria-label="basic tabs example">
                    <Tab label="Resumen" value={0} />
                    <Tab label="Ingresos" value={1} />
                    <Tab label="Egresos" value={2} />
                    <Tab label="Cuentas" value={3} />
                    <Tab label="Categorías" value={4} />
                </Tabs>
            </Box>
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
            </TabPanel>
        </>
    )
}
