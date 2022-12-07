import { Box, Tabs, Tab } from '@mui/material'
import { NavigateFunction } from 'react-router'

export const MainTab = ({ navbarValue, handleNavbarChange, navigate }: { navbarValue: number, handleNavbarChange: (event: React.SyntheticEvent, newValue: number) => void, navigate: NavigateFunction }) => {
  return (
    <Box style={{ marginBottom: "30px" }}>
      <Tabs value={navbarValue} onChange={handleNavbarChange} aria-label="basic tabs example">
        <Tab label="Resumen" value={0} onClick={() => { navigate("/home") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
        <Tab label="Ingresos" value={1} onClick={() => { navigate("/incomes") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
        <Tab label="Egresos" value={2} onClick={() => { navigate("/expenses") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
        <Tab label="Cuentas" value={3} onClick={() => { navigate("/accounts") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
        <Tab label="Categorías" value={4} onClick={() => { navigate("/categories") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
        <Tab label="Configuración" value={5} onClick={() => { navigate("/configuration") }} style={{ fontSize: "24px", color: "black", fontWeight: "bold" }} />
      </Tabs>
    </Box>
  )
}
