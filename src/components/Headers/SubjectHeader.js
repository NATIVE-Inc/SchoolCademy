import React from 'react';

// reactstrap components
import { Card, CardBody, Container, Row, Col } from 'reactstrap';

const SubjectHeader = (props) => {
	return (
		<>
			<div
				className="header pb-4 pt-5 pt-lg-8  align-items-center"
				style={{
					minHeight: '150px',
					backgroundImage: 'url(' + require('../../assets/img/theme/profile-cover.jpg').default + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'center top',
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-8" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="10" md="10">
							<h1 className="display-2 header-title text-white">{props.name.toUpperCase()}</h1>
							<p className="text-white mt-0 mb-5">
								{props.descr}
							</p>
						</Col>
					</Row>
				</Container>
				<Row className="container-fluid justify-content-md-center">
					<Col lg="4" xl="2">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<span className="h2 font-weight-bold mb-0">350,897</span>
							</CardBody>
						</Card>
					</Col>
					<Col lg="4" xl="2">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<span className="h2 font-weight-bold mb-0">350,897</span>
							</CardBody>
						</Card>
					</Col>
					<Col lg="4" xl="2">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<span className="h2 font-weight-bold mb-0">350,897</span>
							</CardBody>
						</Card>
					</Col>
					<Col lg="4" xl="2">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<span className="h2 font-weight-bold mb-0">350,897</span>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default SubjectHeader;
