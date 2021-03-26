import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Progress } from 'reactstrap';

// core components
import HeaderTopic from "components/Headers/HeaderTopic";

const Maps = () => {
  return (
		<>
			<HeaderTopic />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row className="justify-content-center">
					{/* Topic 1 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<Col className="col-auto">
										<img alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} width="200" />
									</Col>
									<div className="col">
										<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
											Topic 1
										</CardTitle>
										<h4>Analyzing and Interpreting Data</h4>
											<small>
												Analyze data using tools, technologies, and/or models (e.g.,
												computational, mathematical) in order to make valid and reliable
												scientific claims or determine an optimal design solution.
											</small>
										<p className="mt-3 mb-0 text-muted text-sm">
														<span>60%</span>

												<Progress
													style={{ width: '40%' }}
													max="100"
													value="60"
													color="primary"
												/>
										</p>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
					{/* Topic 2 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<Col className="col-auto">
										<img alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} width="200" />
									</Col>
									<div className="col">
										<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
											Topic 2
										</CardTitle>
										<h4>Developing and Using Models</h4>
											<small>
												Develop and/or use a model to generate data to support explanations,
												analyze systems, or solve problems.
											</small>
										<p className="mt-3 mb-0 text-muted text-sm">
														<span>60%</span>

												<Progress
													style={{ width: '40%' }}
													max="100"
													value="60"
													color="primary"
												/>
										</p>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
					{/* Topic 3 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<Col className="col-auto">
										<img alt="..." src={process.env.PUBLIC_URL + '/physics.jpg'} width="200" />
									</Col>
									<div className="col">
										<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
											Topic 3
										</CardTitle>
										<h4>Patterns</h4>
											<small>
												Different patterns may be observed at each of the scales at which a
												system is studied and can provide evidence for causality in explanations
												of phenomena.
											</small>
										<p className="mt-3 mb-0 text-muted text-sm">
														<span>60%</span>

												<Progress
													style={{ width: '40%' }}
													max="100"
													value="60"
													color="primary"
												/>
										</p>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
  );
};

export default Maps;
