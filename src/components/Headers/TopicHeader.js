import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

const TopicHeader = (props) => {
	return (
		<>
			<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="10" md="10">
							<h1 className="display-2 text-white">{props.name}</h1>
							<p className="text-white mt-0 mb-5">
							{props.descr}
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default TopicHeader;
