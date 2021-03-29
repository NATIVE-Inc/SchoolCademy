/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import LectureHeader from "components/Headers/LectureHeader.js";

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
		<>
			<LectureHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row className="mt-5">
					{/* Topic 1 */}
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
				<Row className="mt-5">
					{/* Topic 1 */}
					<Col xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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
							<CardImg
								alt="..."
								src={process.env.PUBLIC_URL + '/physics.jpg'}
								height="100"
								top
								style={{ objectFit: 'cover' }}
							/>
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

export default Icons;
