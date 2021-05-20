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
	Col,
	CardBody,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormGroup,
	Input
} from 'reactstrap';


const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';

const Index = (props) => {
	const [subjects, setSubjects] = useRecoilState(subjectsState);
	const [error, setError] = useRecoilState(errorsState);

	let posts = <p>Loading...</p>;

	// get data before component mounts
	useEffect(() => {
		if (localStorage.getItem('localSubjects') === 'null') {
			getSubjects();
		} else {
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
	};

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
	};

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
			<section className="section section-lg pt-8 pb-8">
				<Container className="justify-content-center text-center">
					<h1 className="display-3 header-title">Keyhole for</h1>
					<Row className="row-grid align-items-center pt-4">
						<Col className="order-md-3" md="4">
							<img
								title="Brand_Monitoring"
								alt="Brand_Monitoring - Social Listening"
								src={require('../assets/img/theme/angular.jpg').default}
								width="100px"
							></img>
							<h1>Campaign Tracking </h1>
							<p className="subtitle">
								Measure and analyze your campaigns from start to finish. Optimize your strategy
								throughout for better results with transparent.
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
						<Col className="order-md-2" md="4">
							<img
								title="Brand_Monitoring"
								alt="Brand_Monitoring - Social Listening"
								src={require('../assets/img/theme/angular.jpg').default}
								width="100px"
							></img>
							<h1>Influencer Marketing</h1>
							<p className="subtitle">
								Who says you can’t buy love? Use Keyhole to discover, screen and optimize the
								performance of your influencer partnerships.
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
						<Col className="order-md-1" md="4">
							<img
								title="Brand_Monitoring"
								alt="Brand_Monitoring - Social Listening"
								src={require('../assets/img/theme/angular.jpg').default}
								width="100px"
							></img>
							<h1>Social Listening & Analytics</h1>
							<p className="subtitle">
								Monitor real-time conversations to protect your brand online, stay ahead of competitors
								and improve your social media strategy.
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg bg-gradient-lighter">
				<Container>
					<Row className="row-grid  pb-100 pt-100">
						<Col className="order-md-2" md="6">
							<img alt="..." className="img-fluid" src={process.env.PUBLIC_URL + '/mathematics.jpg'} />
						</Col>
						<Col className="order-md-1" md="6">
							<h1 className="display-4 header-title">
								Prove your impact with instant reports from your social monitoring
							</h1>
							<p>Showing off your hard work is the easy part.</p>
							<p>
								Measure all your social media efforts with Keyhole’s beautiful, comprehensive reports,
								and share them with colleagues, managers & clients easily.
							</p>
							<p>
								“I feel really confident on the numbers we get from Keyhole. The numbers help us prove
								the impact of what we’re doing to clients.” – Windsor Hanger-Western, Cofounder,
								HerCampus Media
							</p>
							<Button className="btn-1" color="primary" outline type="button">
								Start Now
							</Button>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="row-grid  pb-100 pt-100">
						<Col className="order-md-1" md="6">
							<img alt="..." className="img-fluid" src={process.env.PUBLIC_URL + '/chemistry.jpg'} />
						</Col>
						<Col className="order-md-2" md="6">
							<h1 className="display-4 header-title">
								Save time and take control of the social media analytics you need
							</h1>
							<i>
								<br />
								All your social media analytics simplified.
							</i>
							<p>
								<br />
								Don’t have a full data science team to analyze and report on every online conversation?
								With our vast social listening and brand monitoring features, Keyhole will have your
								insights ready in minutes with no data scientist required.
							</p>
							<p>
								“So easy to use, you won’t waste time retraining your team or reading countless
								tutorials.” – Customer on G2
							</p>
							<Button className="btn-1" color="primary" outline type="button">
								Learn More About
							</Button>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="row-grid  pb-100 pt-100">
						<Col className="order-md-2" md="6">
							<img alt="..." className="img-fluid" src={process.env.PUBLIC_URL + '/exams.jpg'} />
						</Col>
						<Col className="order-md-1" md="6">
							<h1 className="display-4 header-title">
								Influencer Marketing with no spreadsheets or screenshots
							</h1>
							<p>Showing off your hard work is the easy part.</p>
							<p>
								Measure all your social media efforts with Keyhole’s beautiful, comprehensive reports,
								and share them with colleagues, managers & clients easily.
							</p>
							<p>
								“I feel really confident on the numbers we get from Keyhole. The numbers help us prove
								the impact of what we’re doing to clients.” – Windsor Hanger-Western, Cofounder,
								HerCampus Media
							</p>
							<Button className="btn-1" color="primary" outline type="button">
								Start Now
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg bg-gradient-default">
				<Container className="pt-lg pt-100 pb-100">
					<Row className="text-center justify-content-center">
						<Col lg="10">
							<h2 className="display-3 text-white header-title">À PROPOS DE NOUS</h2>
							<p className="text-white pt-4">
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

			<section className="section section-lg bg-gradient-pink">
				<Container className="pt-lg pt-100 pb-100">
					<h2 className="display-3 header-title text-center justify-content-center">
						The latest on Social Media Analytics, Influencer Marketing and Social Listening
					</h2>
					<Row className="pt-4">
						<Card className="shadow shadow-lg--hover ml-2 mr-2 col">
							<CardBody>
								<div className="icon icon-shape bg-gradient-success rounded-circle text-white">
									<i className="ni ni-satisfied" />
								</div>
								<h5 className="title text-success">Awesome Support</h5>
								<p>
									The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
									summer, and that process will continue whatever.
								</p>
								<a className="text-success" href="#pablo" onClick={(e) => e.preventDefault()}>
									Learn more
								</a>
							</CardBody>
						</Card>
						<Card className="shadow shadow-lg--hover ml-2 mr-2  col">
							<CardBody>
								<div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
									<i className="ni ni-active-40" />
								</div>
								<h5 className="title text-warning">Modular Components</h5>
								<p>
									The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
									summer, and that process will continue whatever.
								</p>
								<a className="text-warning" href="#pablo" onClick={(e) => e.preventDefault()}>
									Learn more
								</a>
							</CardBody>
						</Card>
						<Card className="shadow shadow-lg--hover ml-2 mr-2  col">
							<CardBody>
								<div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
									<i className="ni ni-active-40" />
								</div>
								<h5 className="title text-warning">Modular Components</h5>
								<p>
									The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
									summer, and that process will continue whatever.
								</p>
								<a className="text-warning" href="#pablo" onClick={(e) => e.preventDefault()}>
									Learn more
								</a>
							</CardBody>
						</Card>
					</Row>
				</Container>
			</section>
			<section className="section section-lg pt-100 pb-100">
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
			<section className="section section-lg pt-0">
				<Container >
					<Row className="justify-content-center">
						<Card className="bg-gradient-warning shadow-lg border-0 col-lg-8">
							<div className="p-5">
								<h1 className="text-white">Keep Updated with all the new Features</h1>
								<p className="	text-white">
									I will be the leader of a company that ends up being worth billions of dollars,
									because I got the answers. I understand culture.
								</p>
								<FormGroup>
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-email-83" />
											</InputGroupText>
										</InputGroupAddon>
										<Input placeholder="Email address" type="email" />
									</InputGroup>
								</FormGroup>
								<Button
									block
									className="btn-white"
									color="default"
									href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
									size="lg"
								>
									Subscribe
								</Button>
							</div>
						</Card>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Index;
