import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, CardText, Col } from 'reactstrap';

const Topic = (props) => {

		return (
			<Col xl="3">
				<Card
					className="card-stats mb-4 mb-xl-0"
					style={{
						borderTop: '5px solid red',
					}}
					to={{
						pathname: '/admin/sections',
						state: {
							titleTopic: props.name,
						},
					}}
					tag={Link}
				>
					<CardBody>
						<CardText>
							<h4>{props.name}</h4>
							<small>{props.descr}</small>
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


