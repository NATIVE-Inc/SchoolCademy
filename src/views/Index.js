import React from 'react';
// reactstrap components
import {  Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col } from 'reactstrap';


import Header from 'components/Headers/DashboardHeader.js';

const Index = (props) => {

	return (
		<>
			<Header />
			{/* Page content */}
			<Container fluid>
				<Row className="mt-7 block-display">
					<h1>World-Class Programs Built With Industry Experts</h1>
					<p>Complete portfolio-ready projects and advance your career.</p>
				</Row>
				<h1>Subjects</h1>
				<Row className="mt-1 subject-list">
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardImg alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} top />
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</CardText>
								<CardText>
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardImg alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} top />
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</CardText>
								<CardText>
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardImg alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} top />
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</CardText>
								<CardText>
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardImg alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} top />
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</CardText>
								<CardText>
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardImg alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} top />
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</CardText>
								<CardText>
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-success">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h1 font-weight-bold mb-0 text-white">Biology</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since last week</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 bg-gradient-default">
							<CardBody>
								<Row>
									<div className="col">
										<h1 className="h2 font-weight-bold mb-0 text-white">Chemistry</h1>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since yesterday</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 bg-gradient-primary text-white">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h2 font-weight-bold mb-0 text-white">Mathematics</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since last month</span>
								</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
				
			</Container>
		</>
	);
};

export default Index;
