import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, Container, CardText, Row, Col } from 'reactstrap';

const Classes = (props) => {


	return (
		<>
			<Container fluid className="col-md-10">
				<h1>Classes - Section Anglophone </h1>
				<Row>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">FORM 1</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">FORM 2</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">FORM 3</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">FORM 4</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">FORM 5</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			<Container fluid className="col-md-10">
				<h1>Classes - Section Francophone</h1>
				<Row>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">6ieme</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">5ieme</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">4ieme</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">3ieme</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
							to={{
								pathname: '/admin/topics',
								state: {
									// titleSubject: props.name,
									// topics: props.topics,
									// subject: props.name,
									// descr: props.descr,
								},
							}}
							tag={Link}
						>
							<CardBody>
								<CardText className="shortDescr">
									<h1 className="display-3 header-title text-white">2nde</h1>
								</CardText>
								<CardText>
									<small className="text-white">Little description of the class</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Classes;
