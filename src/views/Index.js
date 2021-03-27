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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row className="mt-5">
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-default">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h1 font-weight-bold mb-0 text-white">Physics</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap">Since last month</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 text-white bg-gradient-success">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h1 font-weight-bold mb-0 text-white">Biology</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since last week</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 bg-gradient-default">
							<CardBody>
								<Row>
									<div className="col">
										<h1 className="h2 font-weight-bold mb-0 text-white">Chemistry</h1>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since yesterday</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0 bg-gradient-primary text-white">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h2 font-weight-bold mb-0 text-white">Mathematics</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap text-white">Since last month</span>
								</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h1 font-weight-bold mb-0">Physics</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap">Since last month</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h1 font-weight-bold mb-0">Biology</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap">Since last week</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<div className="col">
										<h1 className="h2 font-weight-bold mb-0">Chemistry</h1>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap">Since yesterday</span>
								</p>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6" xl="3">
						<Card className="card-stats mb-4 mb-xl-0">
							<CardBody>
								<Row>
									<div className="col">
										<span className="h2 font-weight-bold mb-0">Mathematics</span>
									</div>
								</Row>
								<p className="mt-3 mb-0 text-muted text-sm d-flex justify-content-end">
									<span className="text-nowrap">Since last month</span>
								</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
  );
};

export default Index;
