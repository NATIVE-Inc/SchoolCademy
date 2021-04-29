import React, { useEffect } from 'react';
import axios from 'axios';
// reactstrap components
import { Container, Row } from 'reactstrap';
import Header from 'components/Headers/DashboardHeader.js';
import Subject from './Subject';

// recoil state 
import { useRecoilState } from 'recoil';
import { subjectsState, errorsState } from '../states';

const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';

const Index = (props) => {

	const [subjects, setSubjects] = useRecoilState(subjectsState);
	const [error, setError] = useRecoilState(errorsState);

	
	let posts = <p>Loading...</p>;

	// get data before component mounts
	useEffect(() => {

		getSubjects();
		// getTopics();
		
	
	}, []);


	const getSubjects = () => {
		axios
			.post(BACKEND_API + 'subjects', {
				userClass: 'form3',
			})
			.then((res) => {
				// fetching data
				setSubjects(res.data)
			})
			.catch((error) => {
				// Error
				setError(error);
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
				
			})
			.catch((error) => {
				// Error

				console.log(error);
			});
		
	}
	

	if (error) {
		posts = (
			<p>
				Something went wrong: <span>{error}</span>
			</p>
		);
	}

	if (!error && subjects) {
		posts = subjects.map((post, id) => {
			return (
				<Subject
					className="subjects"
					key={id}
					name={post.title}
					descr={post.description}
					class={post.class}
					duration={post.duration}
					difficulty={post.difficulty}
					topics={post.topics}
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
