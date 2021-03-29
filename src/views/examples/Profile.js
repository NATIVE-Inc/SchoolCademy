import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
// core components
import SectionHeader from "components/Headers/SectionHeader.js";
import SectionTimeline from "./SectionTimeline";

const Profile = () => {
  return (
		<>
			<SectionHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="order-xl-2" xl="8">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h3 className="mb-0">My account</h3>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<h6 className="heading-small text-muted mb-4">User information</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-username">
														Username
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="lucky.jesse"
														id="input-username"
														placeholder="Username"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-email">
														Email address
													</label>
													<Input
														className="form-control-alternative"
														id="input-email"
														placeholder="jesse@example.com"
														type="email"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="6">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-first-name">
														First name
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Lucky"
														id="input-first-name"
														placeholder="First name"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-last-name">
														Last name
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Jesse"
														id="input-last-name"
														placeholder="Last name"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									{/* Address */}
									<h6 className="heading-small text-muted mb-4">Contact information</h6>
									<div className="pl-lg-4">
										<Row>
											<Col md="12">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-address">
														Address
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
														id="input-address"
														placeholder="Home Address"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="4">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-city">
														City
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="New York"
														id="input-city"
														placeholder="City"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="4">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-country">
														Country
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="United States"
														id="input-country"
														placeholder="Country"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="4">
												<FormGroup>
													<label className="form-control-label" htmlFor="input-country">
														Postal code
													</label>
													<Input
														className="form-control-alternative"
														id="input-postal-code"
														placeholder="Postal code"
														type="number"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									{/* Description */}
									<h6 className="heading-small text-muted mb-4">About me</h6>
									<div className="pl-lg-4">
										<FormGroup>
											<label>About Me</label>
											<Input
												className="form-control-alternative"
												placeholder="A few words about you ..."
												rows="4"
												defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
												type="textarea"
											/>
										</FormGroup>
									</div>
								</Form>
							</CardBody>
							<CardFooter>
								<Row>
									<Col className="text-left" xs="6">
										<Button
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											size="md"
										>
											Prev
										</Button>
									</Col>
									<Col className="text-right" xs="6">
										<Button
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											size="md"
										>
											Next
										</Button>
									</Col>
								</Row>
							</CardFooter>
						</Card>
					</Col>
					<Col className="order-xl-1 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<CardBody className="pt-0 pt-md-4">
								<h2>Timeline</h2>
								<SectionTimeline />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
  );
};

export default Profile;
