import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, Container, CardText, Row, Col } from 'reactstrap';

const About = (props) => {
	return (
		<>
			<Container className="col-lg-12 no-padding no-margin">
				<Row className="studyHeader">
					<Col lg={9} className="studyHeaderContents col-10">
						<h1 className="display-1 mb-0">A Propos de Nous</h1>
						<small> 5 Parts | Multiple Choice </small>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
