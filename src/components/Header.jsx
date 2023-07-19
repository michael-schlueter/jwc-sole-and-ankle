import styled from "styled-components";

import { COLORS, WEIGHTS } from "../constants";

import Logo from "./Logo";
import SuperHeader from "./SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped together semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  min-height: 4.5rem;
`;

// Both sides take up as much space as possible, automatically centering
// the nav without needing to work with absolute positioning
const Side = styled.div`
  flex: 1;
`;

// Margin to make sure that the nav and the logo don't collide when the view gets smaller
const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
