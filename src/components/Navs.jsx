import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Strarred' },
];

const Nave = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {Links.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Nave);
