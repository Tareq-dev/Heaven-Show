import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavPage.css";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const NavPage = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          <span className="text-primary">Heaven</span> Show
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
            {user ? (
              <button className="border mx-5 mt-2 rounded-3 bg-info fw-bold" onClick={() => signOut(auth)}>
                Sign Out
              </button>
            ) : (
              <NavLink
                as={Link}
                to="/login"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Login
              </NavLink>
            )}
            {user?.uid ? (
              ""
            ) : (
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Sign Up
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPage;
