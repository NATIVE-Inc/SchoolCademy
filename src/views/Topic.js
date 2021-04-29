import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';

const Topic = (props) => {

		return (
			<Col xl="4">
				<Card
					className="card-stats mb-4 mb-xl-0"
					style={{
						borderTop: '5px solid red',
					}}
					to={{
						pathname: '/admin/sections',
						state: {
							titleTopic: props.name,
							titleSubject: props.name,
						},
					}}
					tag={Link}
				>
					<CardBody>
						<CardTitle>{props.name}</CardTitle>
						<CardText>
							<small className="shortDescr">{props.descr}</small>
							<br />
							<br />
							<small className="text-muted">Last updated 3 mins ago</small>
						</CardText>
					</CardBody>
				</Card>
			</Col>
		);
};

export default Topic;


