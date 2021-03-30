import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const HeaderTopic = () => {
	return (
		<>
			<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="7" md="10">
							<h1 className="display-2 text-white">Physics</h1>
							<p className="text-white mt-0 mb-5">
								This is your profile page. You can see the progress you've made with your work and
								manage your projects or assigned tasks
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default HeaderTopic;
