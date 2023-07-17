import React, { useState } from 'react';
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavebarWrapper } from './NavBar.elements';
import { ImEvil } from "react-icons/im";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const changeClick = () => {
    setClick(!click);
  }


  return (
    <>
      <NavbarContainer>
        <NavebarWrapper>
          <IconLogo>
            <ImEvil size={"2em"} ml={3} />
            E-morket
          </IconLogo>
          <IconLogoMobile onClick={() => changeClick()}>
            {
              click ? <FaTimes /> : <FaBars />
            }
          </IconLogoMobile>
          
              <Menu click={click} >
                <MenuItem onClick={() => changeClick()} >
                  <MenuItemLink href='portafolio'>HOME</MenuItemLink>
                </MenuItem>

                <MenuItem onClick={() => changeClick()}>
                  <MenuItemLink href='/src/components/administracion'>SOPORTE</MenuItemLink>
                </MenuItem>

                <MenuItem onClick={() => changeClick()}>
                  <MenuItemLink href='/src/components/tablaUsuarios'>CONTACT ME</MenuItemLink>
                </MenuItem>

                <MenuItem onClick={() => changeClick()} >

                  <MenuItemLink href='/src/components/mensaje'>ABOUT ME</MenuItemLink>
                 
                </MenuItem>

              </Menu>
         
        </NavebarWrapper>

      </NavbarContainer>



    </>
  )
}


export default Navbar
