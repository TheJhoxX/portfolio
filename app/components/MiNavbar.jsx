"use client";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const menuItems = [
  {
    path: "/",
    label: "Inicio",
  },
  {
    path: "/proyectos",
    label: "Proyectos",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isBlurred onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-foreground font-bold text-lg drop-shadow-glow">
            TheJhoxX
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            <strong className="drop-shadow-glow">Inicio</strong>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/proyectos">
            <strong className="drop-shadow-glow">Proyectos</strong>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full drop-shadow-glow"
              href={item.path}
              size="lg"
            >
              <strong>{item.label}</strong>
              <div></div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
