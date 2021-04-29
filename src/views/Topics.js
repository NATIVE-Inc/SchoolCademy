import React from 'react';
// reactstrap components
import { Container, Row } from 'reactstrap';
// core components
import SubjectHeader from 'components/Headers/SubjectHeader.js';
import Topic from './Topic';

const Topics = (props) => {

	return (
		<>
			<SubjectHeader />
			{/* Page content */}
			<Container fluid className="col-md-10">
				{/* Table */}
				<Row className="card-group ">
					{/* Topic 1 */}
				</Row>
			</Container>
		</>
	);
};

export default Topics;
