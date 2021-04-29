import React, { useEffect } from 'react';
import axios from 'axios';
// reactstrap components
import { Container, Row } from 'reactstrap';
// core components
import SubjectHeader from 'components/Headers/SubjectHeader.js';
import Topic from './Topic';

// recoil state
import { useRecoilState } from 'recoil';
import { topicsState, errorsState } from '../states';

const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';


const Topics = (props) => {
	const [topics, setTopics] = useRecoilState(topicsState);
	const [error, setError] = useRecoilState(errorsState);

	let topicsDisplay = <p>Loading...</p>;
	let topicsArray = props.location.state.topics;

	// get data before component mounts
	useEffect(() => {
		// fetching topics list
		axios
			.post(BACKEND_API + 'topics', {
				topicsArray: topicsArray,
			})
			.then((res) => {
				// fetching data
				setTopics(res.data);
			})
			.catch((error) => {
				// Error
				setError(error);
				console.log(error);
			});
	}, []);

	if (error) {
		topicsDisplay = (
			<p>
				Something went wrong: <span>{error}</span>
			</p>
		);
	}

	if (!error && topics) {
		topicsDisplay = topics.map((post, id) => {
			return <Topic key={id} name={post.title} descr={post.description} />;
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
					{topicsDisplay}
				</Row>
			</Container>
		</>
	);
};

export default Topics;
