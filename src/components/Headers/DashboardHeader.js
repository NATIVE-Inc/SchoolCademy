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
									JOIN OUR VIRTUAL LEARNING COMMUNITY
								</h1>
								<h3 className="text-white header-subtitle">
									<br />
									<br />
									CADEMY delivers a fully interactive education from the comfort of your home or wherever you may be. Our unique online school offers the best in Primary, Secondary and A Level courses, delivered by expert teachers. We are able to offer you everything you expect from a school, plus a whole lot more!
									<br />
									<br />
								</h3>
								<p className="text-white">
									<Button className="btn-icon btn-3 ml-1" color="primary" type="button">
										<span className="btn-inner--text">GET STARTED</span>
									</Button>
									<span className="btn-inner--icon mr-1 pl-2">
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
										Students
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">30+</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
										<i className="fas fa-child" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								from over 10 Regions
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
										Lessons
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">1,000+</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-warning text-white rounded-circle shadow">
										<i className="fas fa-book" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
									Live interactive lessons
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
										Teachers
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">50+</span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-green text-white rounded-circle shadow">
										<i className="fas fa-users" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
									fully qualified teachers 
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
										Awards
									</CardTitle>
									<span className="h2 font-weight-bold mb-0">100+ </span>
								</div>
								<Col className="col-auto">
									<div className="icon icon-shape bg-blue text-white rounded-circle shadow">
										<i className="fas fa-gift" />
									</div>
								</Col>
							</Row>
							<p className="mt-3 mb-0 text-muted text-sm">
								Certifications issued 
							</p>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
  );
};

export default Header;
