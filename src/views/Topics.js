import React from 'react';
// reactstrap components
import { Card, CardText, CardBody, Container, Row, Col } from 'reactstrap';
// core components
import SubjectHeader from 'components/Headers/SubjectHeader.js';

const Topics = () => {
	return (
		<>
			<SubjectHeader />
			{/* Page content */}
			<Container fluid className="col-md-10">
				{/* Table */}
				<Row className="card-group ">
					{/* Topic 1 */}
					<Col xl="3">
						<Card
							className="card-stats mb-4 mb-xl-0"
							style={{
								borderTop: "5px solid red"
								
							}}
						>
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<CardText>
									<h4>Title of card</h4>
									<small>
										This card has supporting text below as a natural lead-in to additional content.
									</small>
									<br />
									<br />
									<small className="text-muted">Last updated 3 mins ago</small>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Topics;
