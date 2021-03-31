import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Progress } from 'reactstrap';

// core components
import TopicHeader from "components/Headers/TopicHeader";

const Sections = () => {
  return (
		<>
			<TopicHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row className="justify-content-center">
					<Col md={10}>
					  <Card
						  className="card-stats mb-4 mb-xl-0"
						  to="/admin/study"
						  tag={Link}
					  >
							<CardBody>
								<Row>
									<div className="col-md-8">
										<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
											Grade Level: Form 5
										</CardTitle>
										<h1>Kinematics</h1>
										<p>
											<small>
												This passage includes a description of a ball tossed upward into the
												air. The description includes a dot diagram, a position-time graph, and
												a velocity-time graph. Questions target a student's ability to extract
												meaningful data from diagrams and graphs, to interpret graphs, and to
												make connections between the diagrams and graphs.
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

					{/* Topic 1 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0" to="/admin/study"
							tag={Link}>
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
											Analyze data using tools, technologies, and/or models (e.g., computational,
											mathematical) in order to make valid and reliable scientific claims or
											determine an optimal design solution.
										</small>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span>60%</span>

											<Progress style={{ width: '40%' }} max="100" value="60" color="primary" />
										</p>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
					{/* Topic 2 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0" to="/admin/study"
							tag={Link}>
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
											Develop and/or use a model to generate data to support explanations, analyze
											systems, or solve problems.
										</small>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span>60%</span>

											<Progress style={{ width: '40%' }} max="100" value="60" color="primary" />
										</p>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
					{/* Topic 3 */}
					<Col md={7}>
						<Card className="card-stats mb-4 mb-xl-0" to="/admin/study"
							tag={Link}>
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
											Different patterns may be observed at each of the scales at which a system
											is studied and can provide evidence for causality in explanations of
											phenomena.
										</small>
										<p className="mt-3 mb-0 text-muted text-sm">
											<span>60%</span>

											<Progress style={{ width: '40%' }} max="100" value="60" color="primary" />
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

export default Sections;
