import React from "react";
//import { default } from './Title';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

interface Auther {
  avatar: string,
  name: string,
  username: string
}

interface NevBarProps {
  user: Auther;
}

const MyNavbar: React.FC<NevBarProps> = ({ user }) => {

  // const handdleRefresh = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   event.preventDefault();
  //   window.location.reload();
  // }

  return (
    <main>
      <Navbar
        isBordered
        style={{ background: "linear-gradient(to right, #8B5CF6, #2563EB)" }}
      >
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit text-white">MYAPP</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/src/pages/index.tsx">
              <div className="text-white">HOME</div>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              <div className="text-gradient-to-tr from-rgba(255, 255, 255, 1) 0% to-rgba(179, 240, 252, 1) 100%">ABOUT ME</div>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <div className="text-white">FOLLOWING</div>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user.name}
                size="sm"
                src={user.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" >
              <DropdownItem key="profile" className="h-14 gap-2 bg-smoke">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </main>
  );
}

export default MyNavbar;