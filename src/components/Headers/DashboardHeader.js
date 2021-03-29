import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: '600px',
					backgroundImage: 'url(' + require('../../assets/img/theme/profile-cover.jpg').default + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'center top',
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-8" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<div className="header-body col-xl-12">
						{/* Card stats */}
						<Row className="justify-content-md-center d-flex">
							<Col xs="8">
								<h1 className="display-1 text-white header-title">Think Forward</h1>
								<p className="text-white header-subtitle">
									Build skills for today, tomorrow, and beyond. <br />
									Education to future-proof your career
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
