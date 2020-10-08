import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Icon, Image, Menu } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const Header = ({ logout }) => {
  const { pathname } = useLocation();
  return (
    <Menu secondary pointing>
      <Container>
        <Image src={logo} width={60} />

        <Menu.Item as={Link} to="/" style={{ fontSize: 20 }}>
          Contacts
        </Menu.Item>
        {(pathname === "/" || pathname === "/contacts/create") && (
          <Menu.Item position="right">
            <Button as={Link} to="/contacts/create" basic primary icon>
              <Icon name="add" /> Create Contact
            </Button>
          </Menu.Item>
        )}

        {(pathname === "/auth/login" || pathname === "/auth/register") && (
          <Menu.Item position="right">
            <Link to="/auth/login">Login</Link>
          </Menu.Item>
        )}
        {(pathname === "/auth/login" || pathname === "/auth/register") && (
          <Menu.Item>
            <Button as={Link} to="/auth/register" primary icon>
              Sign Up
            </Button>
          </Menu.Item>
        )}

        {(pathname === "/" || pathname === "/contacts/create") && (
          <Menu.Item onClick={() => logout()}>
            <Button color="red" basic icon>
              <Icon name="sign out" /> Logout
            </Button>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default connect(null, { logout })(Header);
