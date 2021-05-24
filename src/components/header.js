import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0; //only on the right
  padding: 0.25rem; //make it easier to click
  text-decoration: none; //remove underline

  /* & means 'this element' */
  /* "When this elements has a class name of _____ apply " */
  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2); //!
    `}
  >
    <NavLink to="/" fontWeight="bold">
      FEM Workshop
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      {/* Gatsby has a prop name called activeClassName which knows what link is active and you specify the name to add when this is true. */}
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
