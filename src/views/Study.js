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

			<Container className="col-12 col-lg-12 no-padding">
				<Sidebar
					sidebar={<SectionSidebar parts={parts} />}
					open={sidenav}
					onSetOpen={openSideNav}
					styles={{
						root: {
							position: 'unset',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							overflow: 'hidden',
						},
						sidebar: {
							zIndex: 2,
							position: 'absolute',
							top: 0,
							bottom: 0,
							transition: 'transform .3s ease-out',
							WebkitTransition: '-webkit-transform .3s ease-out',
							willChange: 'transform',
							overflowY: 'auto',
							background: 'white',
							width: '50%',
						},
						content: {
							position: 'unset',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							overflowY: 'unset',
							WebkitOverflowScrolling: 'touch',
							transition: 'left .3s ease-out, right .3s ease-out',
						},
						overlay: {
							zIndex: 1,
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							opacity: 0,
							visibility: 'hidden',
							transition: 'opacity .3s ease-out, visibility .3s ease-out',
							backgroundColor: 'rgba(0,0,0,.3)',
						},
						dragHandle: {
							zIndex: 1,
							position: 'fixed',
							top: 0,
							bottom: 0,
						},
					}}
				>
						<Row className="studyHeader">
							<Col lg={9} className="studyHeaderContents col-10">
								<p>
									<Button outline color="primary" type="button" onClick={openSideNav}>
										<span className="btn-inner--icon">
											<i className="ni ni-bullet-list-67"></i>
										</span>
									</Button>
									<span>Practice home / Introduction / Random</span>
								</p>
								<h1 className="display-1 mb-0">{title}</h1>
								<small> 5 Parts | Multiple Choice </small>
							</Col>
						</Row>
						<Row className="justify-content-lg-left">
							<Col lg={6} className="studyHeaderContents col-10">
								<div>
									<h2 className="display-3">{part.title}</h2>
									<p className="studyContent">{part.content}</p>
								</div>
							</Col>
						</Row>
						<Row className="justify-content-lg-center col-lg-6 studyHeaderContents">
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
				</Sidebar>
			</Container>
		</>
	);
};

export default Study;
