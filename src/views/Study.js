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

			<Container className="col-lg-12 sidebar">
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
							overflowY: 'auto',
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
					<Container className="col-xs-10 col-lg-6">
						<Row>
							<button onClick={openSideNav}>Open sidebar</button>

							<div className="content">
								<h3>Main content</h3>
								<br />
								<p>
									Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et
									fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim
									sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit
									tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia
									massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida
									condimentum commodo.
								</p>
								<br />
								<p>
									Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis
									accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu
									venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet
									magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta
									at leo sed porta. Nullam eleifend eleifend quam eget dictum.
								</p>
								<br />
								<p>
									Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a
									laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac
									habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum,
									in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non
									finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit
									ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam
									eget suscipit lectus.
								</p>
							</div>
						</Row>
					</Container>
				</Sidebar>
			</Container>
		</>
	);
};

export default Study;
