import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

const Header = () => {
  return (
		<>
			<div
				className="header align-items-center"
				style={{
					minHeight: '45rem',
					backgroundImage: 'url(' + require('../../assets/img/theme/classroom.jpg').default + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'center top',
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default2  opacity-8" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<div className="header-body col-xl-12">
						{/* Card stats */}
						<Row className="pl-lg-8 pt-lg-6 d-flex">
							<Col lg="6">
								<h1 className="display-2 text-white header-title">
									Measure, improve and report on your social media impact with confidence.
								</h1>
								<h3 className="text-white header-subtitle">
									<br />
									<br />
									Keyhole’s social listening, influencer tracking and social media analytics products
									help marketers improve their social media strategy, and prove their impact to
									colleagues and clients.
									<br />
									<br />
								</h3>
								<h3 className="text-white header-subtitle">
									Keyhole’s easy-to-use dashboard allows you to build and share reports instantly,
									saving hundreds of hours a year.
									<br />
									<br />
								</h3>
								<Button className="btn-icon btn-3 ml-1" color="primary" type="button">
									<span className="btn-inner--text">GET STARTED</span>
									<span className="btn-inner--icon mr-1">
										<i className="ni ni-bag-17" />
									</span>
								</Button>
								<p className="text-white pl-2">
									<br />
									<span className="btn-inner--icon mr-1">
										<i className="ni ni-bag-17" />
									</span>
									No Credit Card Required
								</p>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
			<Row className="container-fluid dashboard-analytics justify-content-md-center">
				<Col lg="4" xl="2">
					<Card className="card-stats mb-4 mb-xl-0">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle tag="h5" className="text-uppercase text-muted mb-0">
										Traffic
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">350,897</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
										<i className="fas fa-chart-bar" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								<span className="text-success mr-2">
									<i className="fa fa-arrow-up" /> 3.48%
								</span>{' '}
								<span className="text-nowrap">Since last month</span>
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" xl="2">
					<Card className="card-stats mb-4 mb-xl-0">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle tag="h5" className="text-uppercase text-muted mb-0">
										New users
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">2,356</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
										<i className="fas fa-chart-pie" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								<span className="text-danger mr-2">
									<i className="fas fa-arrow-down" /> 3.48%
								</span>{' '}
								<span className="text-nowrap">Since last week</span>
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" xl="2">
					<Card className="card-stats mb-4 mb-xl-0">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle tag="h5" className="text-uppercase text-muted mb-0">
										Sales
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">924</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
										<i className="fas fa-users" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								<span className="text-warning mr-2">
									<i className="fas fa-arrow-down" /> 1.10%
								</span>{' '}
								<span className="text-nowrap">Since yesterday</span>
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4" xl="2">
					<Card className="card-stats mb-4 mb-xl-0">
						<CardBody>
							<Row>
								<div className="col">
									<CardTitle tag="h5" className="text-uppercase text-muted mb-0">
										Perform
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">49,65%</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-info text-white rounded-circle shadow">
										<i className="fas fa-percent" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								<span className="text-success mr-2">
									<i className="fas fa-arrow-up" /> 12%
								</span>{' '}
								<span className="text-nowrap">Since last month</span>
							</p>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
  );
};

export default Header;
