import React, { useEffect } from 'react';

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	CardFooter,
} from 'reactstrap';
// core components
import SectionSidebar from '../components/Sidebar/SectionSidebar';

import { useRecoilState } from 'recoil';
import { partState } from '../states';

let index = 0;

const Study = (props) => {
	const parts = props.location.state.parts;
	const title = props.location.state.title;

	const [part, setPart] = useRecoilState(partState);

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

	return (
		<>
			{/* Page content */}
			<Row>
				<Col className="order-xl-1 mb-5 mb-xl-0 no-padding" xl="3">
					<div className="timeline">
						<SectionSidebar parts={parts} />
					</div>
				</Col>
				<Col className="order-xl-2 no-padding" xl="9">
					<Card className="bg-secondary shadow">
						<CardHeader className="bg-white border-0">
							<Row className="align-items-center">
								<Col xs="8">
									<h3 className="mb-0">{title}</h3>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<div>
								<h4>{part.title}</h4>
								<p>{part.content}</p>
							</div>
						</CardBody>
						<CardFooter>
							<Row>
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
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Study;
