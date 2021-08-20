import {Component, React} from 'react'
import "../../Styles/Blocks.css"
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

const size = 70;
export default class Header extends Component {
	render() {
		return (
			<Navbar id={"header"} collapseOnSelect fixed={"top"} sticky={"top"} variant="dark" expand="lg" className="back header px-2 mb-4">
				<Navbar.Toggle className="" variant="dark" aria-controls="responsive-navbar-nav"/>

				<Navbar.Brand as={Link} to={"/"} className="mx-auto">
					<img className="mb-1 mt-1 mr-2" src={"/logo_daRoberto_old.png"} height={size} alt="Home"/>
				</Navbar.Brand>

				<Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
					<Nav className="mx-auto">
						<Nav.Link className="text-light mx-auto" as={Link} to={"/about"}>О нас</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/menu"}>Меню</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/sales"}>Акции</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/contacts"}>Контакты</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/details"}>Подробнее о сайте</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/admin"}>Панель
							Администратора</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}