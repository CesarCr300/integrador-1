import { Box, Tabs, Tab } from '@mui/material'
import React from 'react'
import { NavigateFunction } from 'react-router'

export const MainTab = ({ navbarValue, handleNavbarChange, navigate }: { navbarValue: number, handleNavbarChange: (event: React.SyntheticEvent, newValue: number) => void, navigate: NavigateFunction }) => {
  return (
    <Box>
      <Tabs value={navbarValue} onChange={handleNavbarChange} aria-label="basic tabs example">
        <Tab label="Resumen" value={0} onClick={() => { navigate("/home") }} />
        <Tab label="Ingresos" value={1} onClick={() => { navigate("/home/incomes") }} />
        <Tab label="Egresos" value={2} onClick={() => { navigate("/home/expenses") }} />
        <Tab label="Cuentas" value={3} onClick={() => { navigate("/home/accounts") }} />
        <Tab label="Categorías" value={4} onClick={() => { navigate("/home/categories") }} />
      </Tabs>
    </Box>
  )
}
