import React, { useContext, useEffect } from 'react';
import { Context } from '../reducers/Store';
// reactstrap components
import { Container, Row } from 'reactstrap';
// core components
import SubjectHeader from 'components/Headers/SubjectHeader.js';
import Topic from './Topic';

const Topics = (props) => {
	const [state] = useContext(Context);
	const { titleSubject } = props.location.state;

	// get data before component mounts
	useEffect(() => {
		console.log('titleSubject ---------------------------');
		console.log(titleSubject);
	}, []);

	let topics = <p>Loading...</p>;

	if (state.error) {
		topics = (
			<p>
				Something went wrong: <span>{state.error}</span>
			</p>
		);
	}

	if (!state.error && state.topicsList) {
		topics = state.topicsList
			.filter((post) => post.subject === titleSubject)
			.map((post) => {
				return <Topic key={post.name} name={post.name} descr={post.description} />;
			});
	}

	return (
		<>
			<SubjectHeader />
			{/* Page content */}
			<Container fluid className="col-md-10">
				{/* Table */}
				<Row className="card-group ">
					{/* Topic 1 */}
					{topics}
				</Row>
			</Container>
		</>
	);
};

export default Topics;
