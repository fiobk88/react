
import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import "./NavBar.css";



function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<Logo />
				<NavItem href="/inicio" text="Inicio" />
				<NavItem href="/bestsellers" text="Best Sellers" />
				<NavItem href="/brands" text="Brands" />
				<NavItem href="/about" text="About Us" />
				<NavItem href="/contact" text="Contact Us" />


				<CartWidget />

			</nav>
		</div>
	);
};

export default Navbar;