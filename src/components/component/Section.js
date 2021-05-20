import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, Col, Progress } from 'reactstrap';


const Section = (props) => {
		return (
			<Card
				className="card-stats col-md-7 mb-xl-0 no-padding"
				to={{
					pathname: '/admin/study',
					state: {
						parts: props.parts,
						title: props.name,
					},
				}}
				tag={Link}
			>
				<CardBody className="row">
					<img
						className="col-md-4 no-padding "
								alt="..."
								src={process.env.PUBLIC_URL + '/' + props.subject + '.jpg'}
						width="300"
						style={{ objectFit: "cover"}}
							/>
						<div className="col-md-8">
							<h3>{props.name}</h3>
							<p className="shortDescr2">{props.descr}</p>
							<Col className="mt-3 mb-0 text-muted text-sm">
								<span>60%</span>

								<Progress style={{ width: '40%' }} max="100" value="60" color="primary" />
							</Col>
						</div>
				</CardBody>
			</Card>
		);
};

export default Section;
