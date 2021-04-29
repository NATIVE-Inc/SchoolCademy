import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Progress } from 'reactstrap';

// recoil state
import { useRecoilState } from 'recoil';
import { topicsState, errorsState } from '../states';

// core components
import TopicHeader from 'components/Headers/TopicHeader';
import Section from './Section';

const Sections = (props) => {
	
	const sections = props.location.state.sections;
	const topicName = props.location.state.titleTopic;
	const topicDescr = props.location.state.descrTopic;

	let topic = <p>Loading...</p>;

	if (!sections) {
		topic = (
			<p>
				Something went wrong: <span>error</span>
			</p>
		);
	}

	else {
		topic = sections.map((post, id) => {
			return <Section key={id} name={post.title} descr={post.description} parts={post.parts} subject="physics"/>;
		});
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
										<h1>{topicName}</h1>
										<p>
											<small>
												{topicDescr}
											</small>
										</p>
									</div>
									<Col className="d-flex justify-content-end">
										<div className="icon icon-shape bg-danger text-white rounded-circle shadow">
											<i className="fas fa-chart-bar" />
										</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>

					{topic}
				</Row>
			</Container>
		</>
	);
};

export default Sections;
