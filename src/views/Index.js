import React from 'react';
// import React, { useEffect } from 'react';
// import axios from 'axios';
// reactstrap components
import { Container, Row } from 'reactstrap';
import Header from 'components/Headers/DashboardHeader.js';
// import Subject from '../components/component/Subject';

// recoil state
// import { useRecoilState } from 'recoil';
// import { subjectsState, errorsState } from '../states';

// reactstrap components
import {
	Button,
	Card,
	Col,
	CardBody,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormGroup,
	Input
} from 'reactstrap';


// const BACKEND_API = 'http://127.0.0.1:5000/cademy/api/';

const Index = (props) => {
	/* 
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
 */
	return (
		<>
			<Header />
			{/* Page content */}
			<section className="section section-lg pt-8 pb-8">
				<Container className="justify-content-center text-center">
					<h1 className="display-3 header-title">Categories</h1>
					<Row className="row-grid align-items-center pt-4">
						<Col className="order-md-3" md="4">
							<img
								title="Brand_Monitoring"
								alt="features"
								src={require('../assets/img/theme/primary.png').default}
								width="100px"
							></img>
							<h1>PRIMARY </h1>
							<p className="subtitle">
								Pupils as young as 8 years of age have the chance to go to school online. Our qualified and experienced primary school teachers focus on developing young learners.
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
						<Col className="order-md-2" md="4">
							<img
								title="Brand_Monitoring"
								alt="features"
								src={require('../assets/img/theme/secondary.png').default}
								width="100px"
							></img>
							<h1>SECONDARY</h1>
							<p className="subtitle">
								Study all the subjects to prepare you for all the national examinations, we guide and track your progress leading up to the exams and afterwards. 
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
						<Col className="order-md-1" md="4">
							<img
								title="Brand_Monitoring"
								alt="features"
								src={require('../assets/img/theme/university.png').default}
								width="100px"
							></img>
							<h1>UNIVERSITY</h1>
							<p className="subtitle">
								Explore Courses from the different University programs which covers a variety of topics. Curated material from professors across the country. 
							</p>
							<Button className="btn-icon btn-3 ml-1" color="regular" type="button">
								<span className="btn-inner--text">Learn More...</span>
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg bg-gradient-lighter  pt-4 pb-4">
				<Container>
					<Row className="row-grid  pb-50 pt-100">
						<Col className="order-md-2" md="6">
							<img alt="..." className="img-fluid" src={process.env.PUBLIC_URL + '/mathematics.jpg'} />
						</Col>
						<Col className="order-md-1" md="6">
							<h1 className="display-4 header-title">
								WHY YOU SHOULD CHOOSE US
							</h1>
							<p>
							<br/>
							Our online school is unique in its flexibility, approach and accessibility. Effective classroom learning without interruptions allows pupils to progress in their learning giving them time to pursue other interests.
							</p>
							<p>
								Our online classrooms let you manage how you interact with your peers and you have direct and confidential access to the teacher at all times. Our online courses mean you can organise your studies. The effectiveness of our learning platform means that you are able to watch missed lessons back in full, giving you an unrivalled opportunity to pursue their own interests, hobbies, pastimes and goals without missing any classes.
							</p>
							<br/>
							<Button className="btn-1" color="primary" outline type="button">
								Learn more...
							</Button>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="row-grid  pb-50 pt-100">
						<Col className="order-md-1" md="6">
							<img alt="..." className="img-fluid" src={process.env.PUBLIC_URL + '/chemistry.jpg'} />
						</Col>
						<Col className="order-md-2" md="6">
							<h1 className="display-4 header-title">
								WE ARE HERE FOR YOU
							</h1>
							<p>
								<br />
								No matter where you are in the world or what challenges your child faces, our teachers and management staff are dedicated to supporting your family throughout your child’s educational journey. With a team culture rooted in fairness and transparency, we strive to offer a rich, inclusive and accessible education where our pupils feel supported and, most of all, enjoy learning.
							</p>
							<Button className="btn-1" color="primary" outline type="button">
								Learn more...
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
								WHY ONLINE SCHOOLING? 
							</h1>
							<p>
								<br/>
								Online schooling has the power and the potential to transform the prospects of young people all over the world. It’s an approach that opens doors and widens horizons, offering every pupil greater access to quality education and a greater opportunity to fulfil their potential.
							</p>
							<p>
								While lessons may be remote and classes virtual, the impact is very real – nurturing a generation of happy, well-rounded and resilient pupils who love independent learning and can’t wait to get up for school in the morning.
							</p>
							<br/>
							<Button className="btn-1" color="primary" outline type="button">
								Start Now
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg bg-gradient-default pt-4 pb-4">
				<Container className="pt-lg pt-100 pb-100">
					<Row className="text-center justify-content-center">
						<Col lg="10">
							<h2 className="display-3 text-white header-title">About Us</h2>
							<p className="text-white pt-4">
								Established with one simple aim: to improve the educational possibilities for young people. We recognise that pupils learn in all different ways and at different paces. That’s why we’ve chosen to create an alternative pathway to the traditional one-size-fits-all approach to education.
							</p>
							<p>
								Our schools provide a full-time British education online to all children of school age. We believe that all young people deserve access to a quality education, which is why all of our teaching is based online. In doing so, we have opened the doors for pupils worldwide to study the highly regarded English National Curriculum.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="section section-lg bg-gradient-pink ">
				<Container className="pt-lg pt-100 pb-100">
					<h2 className="display-3 header-title text-center justify-content-center">
						Features 
					</h2>
					<Row className="pt-3">
						<Col md={4}>
							<Card className="shadow shadow-lg--hover ml-2 mr-2">
								<CardBody>
									<h2 className="title text-success">How We Teach</h2>
									<p>
										We’ve harnessed the power of technology to develop a system that works. We can deliver the standard of teaching that supports their achievement and drives their development. We’ll provide access to our online school portal where you can find class pages for each of their chosen subjects.
									</p>
								</CardBody>
							</Card>
						</Col>

						<Col md={4}>

						<Card className="shadow shadow-lg--hover ml-2 mr-2">
							<CardBody>
								<h2 className="title text-warning">View Our Courses</h2>
								<p>
									we teach the English National Curriculum. It’s a well-established curriculum that’s recognised for offering a broad, balanced and progressive education. Having been developed in the late 1980s, it has been reviewed regularly ever since, ensuring every programme and every subject is relevant and up to date. 
								</p>
							</CardBody>
						</Card>
						</Col>
						<Col md={4}>

						<Card className="shadow shadow-lg--hover ml-2 mr-2">
							<CardBody>
								<h2 className="title text-info">Course Fees</h2>
								<p>
									We’re committed to providing high standards at a reasonable cost. We believe that we offer an accessible, engaging education at a fraction of the cost of many private or international schools. The cost of our Online Schooling covers a wide range of services and benefits providing quality content to every level.
								</p>
							</CardBody>
						</Card>
							</Col>
					</Row>
				</Container>
			</section>
			<section className="section section-lg pt-100 pb-100">
				<Container>
					<Row className="justify-content-center text-center mb-lg">
						<Col lg="8">
							<h2 className="display-3">The Team</h2>
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
				<Container>
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
