/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
	return (
		<footer className="footer bg-gradient-default">
			<Container>
				<h1 className="display-3 header-title text-white">Life is short and the internet is vast.</h1>
				<hr />
				<Row>
					<Col xl={3}>
					<h1 className="text-gray">CADEMY</h1>
					<p>Online learning for African Students</p>
					<p>
						<span className="btn-inner--icon mr-1">
							<i className="ni ni-chat-round" />
						</span>
						+237 677 77 77 77
					</p>
					<p>
						<span className="btn-inner--icon mr-1">
							<i className="ni ni-email-83" />
						</span>
						contact@cademy.com
					</p>
					</Col>
					<Col xl={3}>
						<h5 className="text-gray">Our School</h5>
						<Nav className="nav-footer d-block">
							<NavItem>
								<NavLink
									href="https://www.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									About Us
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									How it works? 
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="http://blog.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Conditions of Attendance 
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									School Policy
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Homeschooling Online
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col xl={3}>
						<h5 className="text-gray">Learning Stages</h5>
						<Nav className="nav-footer d-block">
							<NavItem>
								<NavLink
									href="https://www.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Primary
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Secondary
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="http://blog.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									University
								</NavLink>
							</NavItem>

						</Nav>
					</Col>
					<Col xl={3}>
						<h5 className="text-gray">Updates</h5>
						<Nav className="nav-footer d-block">
							<NavItem>
								<NavLink
									href="https://www.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Latest News
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Upcoming Events
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="http://blog.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Blog
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Videos
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
				<Row className="align-items-center justify-content-xl-between mt-5">
					<Col xl="6">
						<div className="copyright text-center text-xl-left text-muted">
							© {new Date().getFullYear()}{' '}
							<a
								className="font-weight-bold ml-1"
								href="https://www.creative-tim.com?ref=adr-admin-footer"
								rel="noopener noreferrer"
								target="_blank"
							>
								Cademy
							</a>
						</div>
					</Col>

					<Col xl="6">
						<Nav className="nav-footer justify-content-center justify-content-xl-end">
							<NavItem>
								<NavLink
									href="https://www.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Creative Tim
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									About Us
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="http://blog.creative-tim.com?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									Blog
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
									rel="noopener noreferrer"
									target="_blank"
								>
									MIT License
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
