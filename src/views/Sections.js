import React from 'react';

// reactstrap components
import { Container, Row } from 'reactstrap';


// core components
import TopicHeader from 'components/Headers/TopicHeader';
import Section from '../components/component/Section';

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
	} else {
		topic = sections.map((post, id) => {
			return <Section key={id} name={post.title} descr={post.description} parts={post.parts} subject="physics" />;
		});
	}

	return (
		<>
			<TopicHeader name={topicName} descr={topicDescr} />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row className="justify-content-center">{topic}</Row>
			</Container>
		</>
	);
};

export default Sections;
