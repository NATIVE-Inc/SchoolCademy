import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../reducers/Store';
// reactstrap components
import { Container, Row } from 'reactstrap';
import Header from 'components/Headers/DashboardHeader.js';
import Subject from './Subject';

const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';

const Index = (props) => {

	const [state, dispatch] = useContext(Context);

	// get data before component mounts
	useEffect(() => {

		getSubjects();
		getTopics();
		
		console.log(state.topicsList);
	
	}, []);


	const getSubjects = () => {
		// fetching subjects list 
		axios
			.post(BACKEND_API + 'subjects', {
				userClass: 'form3',
			})
			.then((res) => {
				// fetching data
				dispatch({ type: 'SET_SUBJECTS', payload: res.data });
			})
			.catch((error) => {
				// Error
				dispatch({ type: 'SET_ERROR', payload: error });
				console.log(error);
			});
	}

	const getTopics = () => {
		// fetching topics list 
		axios
			.post(BACKEND_API + 'topics', {
				userClass: 'form3',
			})
			.then((res) => {
				// fetching data
				dispatch({ type: 'SET_TOPICS', payload: res.data });
			})
			.catch((error) => {
				// Error
				dispatch({ type: 'SET_ERROR', payload: error });
				console.log(error);
			});
		
	}

	let posts = <p>Loading...</p>;

	if (state.error) {
		posts = (
			<p>
				Something went wrong: <span>{state.error}</span>
			</p>
		);
	}

	if (!state.error && state.subjectsList) {
		posts = state.subjectsList.map((post) => {
			return (
				<Subject
					key={post.name}
					name={post.name}
					descr={post.description}
					class={post.class}
					duration={post.duration}
					difficulty={post.difficulty}
				/>
			);
		});
	}
 
	return (
		<>
			<Header />
			{/* Page content */}
			<Container fluid>
				<Row className="mt-7 block-display">
					<h1>World-Class Programs Built With Industry Experts</h1>
					<p>Complete portfolio-ready projects and advance your career.</p>
				</Row>
				<h1>Subjects</h1>
				<Row className="mt-1 subject-list">
					{posts}
				</Row>
			</Container>
		</>
	);
};

export default Index;
