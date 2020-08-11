import React from "react";
import styled from "styled-components";
import { Column, Row } from "./components/Flex";
import useToggle from "./hooks/useToggle";

const Sidebar = styled(Column)`
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  height: 100vh;
  width: 300px;
  padding: 24px 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.opened ? "translateX(0)" : "translateX(100%)")};
`;

const Nav = styled.nav`
  color: var(--reversed-text-color);
  background: var(--primary-color);
  font-family: var(--title-font);
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 32px;
  box-shadow: #333333 0px 0px 12px 0px;
`;

const Navbar = () => {
  const [sidebarOpened, toggle] = useToggle();

  return (
    <>
      <Nav>
        <span role="img" aria-label="baby emoji">
          👶
        </span>

        <span>Kinderie</span>

        <img
          src="/assets/hamburger.svg"
          alt="menu"
          role="button"
          className="ml-auto"
          onClick={() => toggle()}
        />
      </Nav>

      <Sidebar opened={sidebarOpened}>
        <Row
          style={{ maxHeight: 42 }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <img
            height={32}
            src="/assets/close.svg"
            alt="close"
            role="button"
            onClick={() => toggle()}
          />
        </Row>

        <a className="py-2" href="#">
          Home
        </a>
        <a className="py-2" href="#">
          Dashboard
        </a>
        <a className="py-2" href="#">
          About
        </a>
      </Sidebar>
    </>
  );
};

export default Navbar;
