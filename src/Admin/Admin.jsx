import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/Dashboard';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ShoppingCartIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <ControlPointIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();


    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height:"100%"
            }}
        >
            <>
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>
            </>

            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                            
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )


    return (


            <div className='relative flex h-[100vh] '>

                <CssBaseline />

                   <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
                        {drawer}
                   </div>
                
                <div className='w-[85%] h-full ml-44'>

                    <Routes>

                        <Route path='/' element={<AdminDashboard/>}></Route>
                        <Route path='/product/create' element={<CreateProductForm/>}></Route>
                        <Route path='/products' element={<ProductsTable/>}></Route>
                        <Route path='/orders' element={<OrdersTable/>}></Route>
                        <Route path='/customers' element={<CustomersTable/>}></Route>

                    </Routes>
                </div>

            </div>

    )
}

export default Admin