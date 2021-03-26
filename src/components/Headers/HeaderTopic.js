import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const HeaderTopic = () => {
	return (
		<>
			<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
				<Container fluid>
					<div className="header-body">
						{/* Card stats */}
						<Row className="justify-content-center">
							<Col md={10}>
								<Card className="card-stats mb-4 mb-xl-0">
									<CardBody>
										<Row>
											<div className="col-md-8">
												<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
													Grade Level: Form 5
												</CardTitle>
												<h1>Kinematics</h1>
												<p>
													<small>
														This passage includes a description of a ball tossed upward into
														the air. The description includes a dot diagram, a position-time
														graph, and a velocity-time graph. Questions target a student's
														ability to extract meaningful data from diagrams and graphs, to
														interpret graphs, and to make connections between the diagrams
														and graphs.
													</small>
												</p>
											</div>
											<Col className="d-flex justify-content-end">
												<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
													<i className="fas fa-chart-bar" />
												</div>
											</Col>
										</Row>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span className="text-success mr-2">
												Learn the technical skills for data analyst career paths.
											</span>
										</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default HeaderTopic;
