import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/products',
    exact: true
  }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        let active = match ? 'active' : '';
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">TN Shop</span>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {this.showMenu(menus)}
          </ul>
        </div>
      </nav>
    );
  };

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return <MenuLink key={index} to={menu.to} activeOnlyWhenExact={menu.exact} label={menu.name} />
      });
    }
    return result;
  }
}

export default Menu;
