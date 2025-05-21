import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Image from "next/image";

const NavbarComponent = () => {
  const NavbarJSON = {
    title: "NaturExpress",
    links: [
      { name: "Home", href: "/", imageUrl: "" }, // Added Home
      { name: "Contact Us", href: "/contact", imageUrl: "" }, // Added Contact Us
      { name: "About Us", href: "/about", imageUrl: "" }, // Added About Us
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Navbar expand="lg" className="navbar py-2 bg-dark text-white" fixed="top">
      <Container fluid className="navbar-cotnainer">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/" className="text-black ps-5">
            {/* Add your logo here if needed */}
          </Navbar.Brand>
        </div>
        <Nav className="mx-auto">
          {NavbarJSON.links.map((link, index) => (
            <Nav.Link key={index} href={link.href} className="text-white d-flex align-items-center mx-2">
              {link.imageUrl && <Image width={15} height={15} src={link.imageUrl} alt="icon" className="me-1" />}
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
        {/* <div className="d-flex align-items-center pe-4 position-relative">
          <Dropdown align="end">
            <Dropdown.Toggle variant="transparent" className="text-white border-0 d-flex align-items-center" id="dropdown-profile">
              <Image src="/assets/user-profile.png" alt="User" width={32} height={32} className="rounded-circle me-2" />
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="dropdown-menu-end mt-2"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                zIndex: 1050,
              }}
            >
              <Dropdown.Item onClick={handleLogout} className="d-flex align-items-center">
                <Image width={30} height={30} src="/assets/icons/logout-icon.png" alt="Logout Icon" className="me-2" />
                <span>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;