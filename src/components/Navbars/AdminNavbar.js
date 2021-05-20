import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
	Button,
	UncontrolledCollapse,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	Media,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

class AdminNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById('navbar-main'));
		// initialise
		headroom.init();
	}
	state = {
		collapseClasses: '',
		collapseOpen: false,
	};

	onExiting = () => {
		this.setState({
			collapseClasses: 'collapsing-out',
		});
	};

	onExited = () => {
		this.setState({
			collapseClasses: '',
		});
	};
	switchPage = () => {
		this.onExiting();
		this.onExited();
	}

	render() {
		return (
			<>
				<header className="header-global">
					<Navbar
						className="navbar-main navbar-transparent navbar-dark headroom bg-gradient-default  "
						expand="lg"
						id="navbar-main"
					>
						<Container>
							<NavbarBrand className="mr-lg-5 text-white" to="/" tag={Link}>
								CADEMY
							</NavbarBrand>
							<button className="navbar-toggler" id="navbar_global">
								<span className="navbar-toggler-icon" />
							</button>
							<UncontrolledCollapse
								toggler="#navbar_global"
								navbar
								className={'justify-content-center ' + this.state.collapseClasses}
								onExiting={this.onExiting}
								onExited={this.onExited}
							>
								<div className="navbar-collapse-header text-white">
									<Row>
										<Col className="collapse-brand" xs="6">
											<Link to="/">CADEMY</Link>
										</Col>
										<Col className="collapse-close" xs="6">
											<button className="navbar-toggler" id="navbar_global">
												<span />
												<span />
											</button>
										</Col>
									</Row>
								</div>
								<Nav className="align-items-lg-center text-white" navbar>
									<NavItem>
										<Link className="nav-link text-white" to="/admin/classes">
											Classes
										</Link>
									</NavItem>
									<NavItem>
										<Link className="nav-link text-white" to="/admin/subjects">
											Subjects
										</Link>
									</NavItem>
									<NavItem>
										<NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
											How it works
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
											About Us
										</NavLink>
									</NavItem>
								</Nav>
							</UncontrolledCollapse><Nav className="align-items-center d-none d-md-flex" navbar>
						<UncontrolledDropdown nav>
							<DropdownToggle className="pr-0" nav>
								<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img
											alt="..."
											src={require('../../assets/img/theme/team-4-800x800.jpg').default}
										/>
									</span>
									<Media className="ml-2 d-none d-lg-block">
										<span className="mb-0 text-sm font-weight-bold">Jessica Jones</span>
									</Media>
								</Media>
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
								<DropdownItem className="noti-title" header tag="div">
									<h6 className="text-overflow m-0">Welcome!</h6>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-single-02" />
									<span>My profile</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-settings-gear-65" />
									<span>Settings</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-calendar-grid-58" />
									<span>Activity</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-support-16" />
									<span>Support</span>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="ni ni-user-run" />
									<span>Logout</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				
						</Container>
					</Navbar>
				</header>
			</>
		);
	}
}

export default AdminNavbar;
