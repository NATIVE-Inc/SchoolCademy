import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, Row, Col, Progress } from 'reactstrap';


const Section = (props) => {
		return (
			<Card
				className="card-stats col-md-7 mb-xl-0"
				to={{
					pathname: '/admin/study',
					state: {
						parts: props.parts,
						title: props.name,
					},
				}}
				tag={Link}
			>
				<CardBody>
					<Row>
						<Col className="col-auto">
							<img alt="..." src={process.env.PUBLIC_URL + '/' + props.subject + '.jpg'} width="200" />
						</Col>
						<div className="col">
							<h3>{props.name}</h3>
							<p>{props.descr}</p>
							<Col className="mt-3 mb-0 text-muted text-sm">
								<span>60%</span>

								<Progress style={{ width: '40%' }} max="100" value="60" color="primary" />
							</Col>
						</div>
					</Row>
				</CardBody>
			</Card>
		);
};

export default Section;
