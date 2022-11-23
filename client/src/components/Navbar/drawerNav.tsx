import React from "react"
import {Drawer, List, ListItemButton, ListItemText, ListItemIcon, IconButton } from "@mui/material"
import { FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function DrawerNav() {

    const PAGES = ['Home', 'Services', 'About', 'Contact', 'LogIn', 'LogOut']
    const links = ['/', '/services', '/about', '/contact']

  const navigate = useNavigate()

    const [open, setOpen] = React.useState(false)
    const handleList = (index:number) =>{
        setOpen(false); 
        navigate(`${links[index]}`); 
    }

    return(
        <>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {PAGES.map((page, index) => (
                        <ListItemButton onClick={() => {handleList(index)}} key={index}>
                        <ListItemIcon>
                            <ListItemText onClick={() => navigate(`${links[index]}`)}>
                                    {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))}
                    
                </List>
            </Drawer>
            <IconButton sx={{color: "white", marginLeft: "auto"}} onClick={()=>setOpen(!open)}><FaAlignJustify/></IconButton>
        </>
    )
}