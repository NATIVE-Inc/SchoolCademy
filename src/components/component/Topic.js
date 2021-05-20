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
							descrTopic: props.descr,
							sections: props.sections,
						},
					}}
					tag={Link}
				>
					<CardBody>
						<CardTitle>
							<h4 className="display-4 header-title">{props.name}</h4>
						</CardTitle>
						<CardText className="shortDescr">
							<p className="header-title text-darker">{props.descr}</p>
						</CardText>
						<CardText>
							<small className="text-gray">Little description of the class</small>
						</CardText>
					</CardBody>
				</Card>
			</Col>
		);
};

export default Topic;


