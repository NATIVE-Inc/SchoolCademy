import React, { useEffect } from 'react';
import axios from 'axios';
// reactstrap components
import { Container, Row } from 'reactstrap';
import Header from 'components/Headers/DashboardHeader.js';
import Subject from '../components/component/Subject';

// recoil state 
import { useRecoilState } from 'recoil';
import { subjectsState, errorsState } from '../states';

// reactstrap components
import {
	Button,
	Badge,
	Card,
	CardImg,
  Col
} from "reactstrap";

const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';

const Index = (props) => {

	const [subjects, setSubjects] = useRecoilState(subjectsState);
	const [error, setError] = useRecoilState(errorsState);

	
	let posts = <p>Loading...</p>;

	// get data before component mounts
	useEffect(() => {

		if (localStorage.getItem('localSubjects') === "null") {
			getSubjects();	
		}
		else {
			setSubjects(JSON.parse(localStorage.getItem('localSubjects')));
		}

	
	}, []);


	const getSubjects = () => {
		axios
			.post(BACKEND_API + 'subjects', {
				userClass: 'form3',
			})
			.then((res) => {
				// fetching data
				setSubjects(res.data);
				localStorage.setItem('localSubjects', JSON.stringify(res.data));
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
			<section className="section section-lg">
				<Container>
					<Row className="row-grid align-items-center">
						<Col className="order-md-2" md="6">
							<img
								alt="..."
								className="img-fluid floating"
								src={process.env.PUBLIC_URL + '/learn.jpg'}
							/>
						</Col>
						<Col className="order-md-1" md="6">
							<div className="pr-md-5">
								<div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
									<i className="ni ni-settings-gear-65" />
								</div>
								<h3>Bibliothèque de leçons interactives</h3>
								<p>
									les leçons comprennent du texte, des vidéos, des quiz et des pdf, le tout dans le
									même document de leçon, ce qui le rend hautement interactif et facile à utiliser
									pour les étudiants.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg">
				<Container>
					<Row className="row-grid align-items-center pb-100 pt-100">
						<Col className="order-md-1" md="6">
							<img
								alt="..."
								className="img-fluid floating"
								src={process.env.PUBLIC_URL + '/exams.jpg'}
							/>
						</Col>
						<Col className="order-md-2" md="6">
							<div className="pr-md-5">
								<div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
									<i className="ni ni-settings-gear-65" />
								</div>
								<h3>Bibliothèque de questions standard</h3>
								<p>
									Application ELearning qui a une très grande banque de milliers de questions dans sa
									bibliothèque. Ceux-ci sont classés par sujets et sont accompagnés d'explications
									vidéo et textuelles
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg bg-gradient-default">
				<Container className="pt-lg pt-100 pb-100">
					<Row className="text-center justify-content-center">
						<Col lg="10">
							<h2 className="display-3 text-white">À PROPOS DE NOUS</h2>
							<p className="lead text-white">
								Conçu pour les écoles africaines avec une gamme d'outils pour aider les étudiants à
								comprendre les sujets et les sujets et à mieux réussir aux concours et aux examens. Pour
								les enseignants, il fournit une bibliothèque de leçons et d’éléments d’évaluation
								faciles à utiliser qui les aident à identifier les zones de carence des élèves afin
								qu’ils puissent améliorer tous les élèves de leur classe - les faibles et les forts
								ensemble
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="section section-lg">
				<Container>
					<Row className="justify-content-center text-center mb-lg">
						<Col lg="8">
							<h2 className="display-3">La formidable équipe</h2>
							<p className="lead text-muted">le but est de transformer l'accès à l'éducation.</p>
						</Col>
					</Row>
					<Row>
						<Col className="mb-5 mb-lg-0" lg="3" md="6">
							<div className="px-4">
								<img
									alt="..."
									className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
									src={process.env.PUBLIC_URL + '/profile2.jpg'}
									style={{ width: '200px' }}
								/>
								<div className="pt-4 text-center">
									<h5 className="title">
										<span className="d-block mb-1">Ryan Tompson</span>
										<small className="h6 text-muted">Web Developer</small>
									</h5>
									<div className="mt-3">
										<Button
											className="btn-icon-only rounded-circle"
											color="warning"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-twitter" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="warning"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-facebook" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="warning"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-dribbble" />
										</Button>
									</div>
								</div>
							</div>
						</Col>
						<Col className="mb-5 mb-lg-0" lg="3" md="6">
							<div className="px-4">
								<img
									alt="..."
									className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
									src={process.env.PUBLIC_URL + '/profile1.jpg'}
									style={{ width: '200px' }}
								/>
								<div className="pt-4 text-center">
									<h5 className="title">
										<span className="d-block mb-1">Romina Hadid</span>
										<small className="h6 text-muted">Marketing Strategist</small>
									</h5>
									<div className="mt-3">
										<Button
											className="btn-icon-only rounded-circle"
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-twitter" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-facebook" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-dribbble" />
										</Button>
									</div>
								</div>
							</div>
						</Col>
						<Col className="mb-5 mb-lg-0" lg="3" md="6">
							<div className="px-4">
								<img
									alt="..."
									className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
									src={process.env.PUBLIC_URL + '/profile3.jpg'}
									style={{ width: '200px' }}
								/>
								<div className="pt-4 text-center">
									<h5 className="title">
										<span className="d-block mb-1">Alexander Smith</span>
										<small className="h6 text-muted">UI/UX Designer</small>
									</h5>
									<div className="mt-3">
										<Button
											className="btn-icon-only rounded-circle"
											color="info"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-twitter" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="info"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-facebook" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="info"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-dribbble" />
										</Button>
									</div>
								</div>
							</div>
						</Col>
						<Col className="mb-5 mb-lg-0" lg="3" md="6">
							<div className="px-4">
								<img
									alt="..."
									className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
									src={process.env.PUBLIC_URL + '/profile4.jpg'}
									style={{ width: '200px' }}
								/>
								<div className="pt-4 text-center">
									<h5 className="title">
										<span className="d-block mb-1">John Doe</span>
										<small className="h6 text-muted">Founder and CEO</small>
									</h5>
									<div className="mt-3">
										<Button
											className="btn-icon-only rounded-circle"
											color="success"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-twitter" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="success"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-facebook" />
										</Button>
										<Button
											className="btn-icon-only rounded-circle ml-1"
											color="success"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<i className="fa fa-dribbble" />
										</Button>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Index;
