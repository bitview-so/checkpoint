import React from 'react';
import Logo from '@theme/Logo';

export default function NavbarLogo(): JSX.Element {
  return (
    <a href="https://checkpoint.bitview.so"><img src="/img/bitview-main.png" alt="BitView" width="100" height="100" /></a>
    /*
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
    */
  );
}
