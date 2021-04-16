import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';

const Subject = (props) => {

		return (
			<Col lg="6" xl="3">
				<Card
					className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default"
					to={{
						pathname: '/admin/topics',
						state: {
							titleSubject: "mathematics",
						},
					}}
					tag={Link}
				>
					<CardImg alt="..." src={process.env.PUBLIC_URL + '/' + props.name + '.jpg'} top />
					<CardBody>
						<CardTitle>{props.name}</CardTitle>
						<CardText>{props.descr}</CardText>
						<CardText>
							<small className="text-muted">{props.duration}</small>
						</CardText>
					</CardBody>
				</Card>
			</Col>
		);
};

export default Subject;
