import React, { useEffect } from 'react';

// reactstrap components
import { Button, Row, Col, Container } from 'reactstrap';
// core components
import SectionSidebar from '../components/Sidebar/SectionSidebar';
import Sidebar from 'react-sidebar';

import { useRecoilState } from 'recoil';
import { partState } from '../states';
import { sideNav } from '../states';

let index = 0;

const Study = (props) => {
	const parts = props.location.state.parts;
	const title = props.location.state.title;

	const [part, setPart] = useRecoilState(partState);
	const [sidenav, setSidenav] = useRecoilState(sideNav);

	// get data before component mounts
	useEffect(() => {
		setPart(parts[index]); // set initial part to view
	}, []);

	const handleClick = () => {
		let i = index < parts.length - 1 ? (index += 1) : 0;
		setPart(parts[i]);
		index = i;
	};

	const handleClickBack = () => {
		let i = index > 0 ? (index -= 1) : 0;
		setPart(parts[i]);
		index = i;
	};

	// toggle Sidebar
	const openSideNav = () => {
		setSidenav(!sidenav);
	};

	return (
		<>
			{/* Page content */}

					<Col lg={2} xs={8} className={'sidebar' + (sidenav ? ' openSidebar' : ' closeSidebar')}>
						<br />
						<br />
						{parts.map((part, id) => {
							return <h3 className="partTitle">{part.title}</h3>;
						})}
					</Col>
			<Container className="col-lg-6">
				<Row className="justify-content-lg-left">
						<Button outline color="primary" type="button" onClick={openSideNav} className="sideBarBtn">
							<span className="btn-inner--icon">
								<i className="ni ni-bullet-list-67"></i>
							</span>
						</Button>
						<h3 className="mb-0">{title}</h3>
						<div>
							<h4>{part.title}</h4>
							<p>{part.content}</p>
						</div>
				</Row>
				<Row className="justify-content-lg-center">
					<Col className="text-left" xs="6">
						<Button color="primary" onClick={handleClickBack} size="md">
							Prev
						</Button>
					</Col>
					<Col className="text-right" xs="6">
						<Button color="primary" size="md" onClick={handleClick}>
							Next
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Study;
