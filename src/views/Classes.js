import React, { useEffect } from 'react';
// reactstrap components
import { Container, Row } from 'reactstrap';
import StudyNavbar from '../components/Navbars/StudyNavbar';

const Classes = () => {


	return (
        <>
            <StudyNavbar/>
			{/* Page content */}
			<Container fluid className="col-md-10">
				{/* Table */}
				<Row className="card-group ">
					{/* Topic 1 */}
					Classes
				</Row>
			</Container>
		</>
	);
};

export default Classes;
