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
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const SectionHeader = () => {
  return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: '600px',
					backgroundImage: 'url(' + require('../../assets/img/theme/profile-cover.jpg').default + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'center top',
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-8" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="7" md="10">
							<h1 className="display-2 text-white">Analyzing and Interpreting Data</h1>
							<p className="text-white mt-0 mb-5">
								Analyze data using tools, technologies, and/or models (e.g., computational,
								mathematical) in order to make valid and reliable scientific claims or determine an
								optimal design solution.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
  );
};

export default SectionHeader;
