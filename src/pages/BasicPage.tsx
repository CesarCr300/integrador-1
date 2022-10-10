import { MainTab } from "@/components/MainTab.component";
import { TabPanel } from "@/components/TabPanel";
import { useState } from "react"
import { useNavigate } from "react-router";
import './styles/BasicPage.styles.css';

interface IBasicPageProps {
    navbarValueProp?: number;
    showTab?: boolean,
    children: React.ReactNode
}

export const BasicPage = ({ navbarValueProp = 0, showTab = true, children }: IBasicPageProps) => {
    const [navbarValue, setNavbarValue] = useState(navbarValueProp);
    const handleNavbarChange = (event: React.SyntheticEvent, newValue: number) => { setNavbarValue(newValue) };
    const navigate = useNavigate();
    return (
        <div className="page">
            <div className="header">Mis finanzas</div>
            <div className="container">
                <MainTab handleNavbarChange={handleNavbarChange} navbarValue={navbarValue} navigate={navigate} />
                {showTab && (children)}
            </div>
        </div>
    )
}
