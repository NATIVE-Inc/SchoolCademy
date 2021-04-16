import React, { useContext } from 'react';
import { Context } from '../reducers/Store';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Progress } from 'reactstrap';

// core components
import TopicHeader from 'components/Headers/TopicHeader';

const Sections = (props) => {
	
	const [state] = useContext(Context);
	const { titleTopic } = props.location.state;

	let topic = <p>Loading...</p>;

	if (state.error) {
		topic = (
			<p>
				Something went wrong: <span>{state.error}</span>
			</p>
		);
	}

	if (!state.error) {
		topic = state.topicsList.find((element) => {
			return element.name === titleTopic;
		});
		console.log(topic);
	}

	return (
		<>
			<TopicHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row className="justify-content-center">
					<Col md={10}>
						<Card className="card-stats mb-4 mb-xl-0" >
							<CardBody>
								<Row>
									<div className="col-md-8">
										<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
											Grade Level: Form 5
										</CardTitle>
										<h1>{topic.name}</h1>
										<p>
											<small>
												{topic.description}
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
										{topic.subject}
									</span>
								</p>
							</CardBody>
						</Card>
					</Col>

					{topic.sections.map((post) => {
						return (
							<Col md={7}>
								<Card className="card-stats mb-4 mb-xl-0" to="/admin/study" tag={Link}>
									<CardBody>
										<Row>
											<Col className="col-auto">
												<img
													alt="..."
													src={process.env.PUBLIC_URL + '/physics.jpg'}
													width="200"
												/>
											</Col>
											<div className="col">
												<CardTitle tag="h6" className="text-uppercase text-muted mb-0">
													Topic 1
												</CardTitle>
												<h4>{post.subTitle}</h4>
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
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Sections;
