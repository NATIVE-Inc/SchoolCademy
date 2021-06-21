import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';

// reactstrap components
import { Container, Row, Col, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';

const Upload = (props) => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Container className="col-lg-12 no-padding no-margin">
				<Row className="studyHeader">
					<Col lg={9} className="studyHeaderContents col-10">
						<h1 className="display-1 mb-0">Charger des Cours</h1>
					</Col>
				</Row>
				<Form className="studyHeaderContents col-lg-10 row">
					<Col md="3">
						<Col>
							<FormGroup>
								<label>Select Class</label>
								<Input type="select">
									<option selected disabled>
										choose class
									</option>
									<option>Form 5</option>
									<option>Upper Sixth</option>
									<option>Terminale</option>
									<option>1ere</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label>Select Subject</label>
								<Input required type="select">
									<option selected disabled>
										choose subject
									</option>
									<option>Mathematics</option>
									<option>Physics</option>
									<option>Chemistry</option>
									<option>Biology</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label>Select Section </label>

								<Button
									outline
									className="btn-icon btn-2"
									color="primary"
									type="button"
									size="sm"
									onClick={toggle}
									style={{
										float: 'right',
										margin: 0,
									}}
								>
									<span className="btn-inner--icon">
										<i className="ni ni-fat-add"></i>
									</span>
								</Button>
								<Input type="select">
									<option selected disabled>
										choose section
									</option>
								</Input>
							</FormGroup>
						</Col>
					</Col>
					<Col md="9">
						<h3>Title</h3>
						<FormGroup>
							<Input placeholder="Title" type="text"></Input>
						</FormGroup>
						<h3>Content</h3>
						<CKEditor />
						<Button
							color="primary"
							onClick={toggle}
							type="submit"
							style={{
								float: 'right',
								margin: 10,
							}}
						>
							Submit
						</Button>
					</Col>
				</Form>
			</Container>
			<div>
				<Modal isOpen={modal} toggle={toggle} className={className}>
					<ModalHeader toggle={toggle}>Add Section</ModalHeader>
					<ModalBody>
						<FormGroup>
							<label>Title of Section</label>
							<Input placeholder="Title" type="text"></Input>
						</FormGroup>
						<FormGroup>
							<label>Description</label>
							<Input rows="3" type="textarea"></Input>
						</FormGroup>
						<Form>
							<div className=" custom-file">
								<input className=" custom-file-input" id="customFileLang" lang="en" type="file"></input>
								<label className=" custom-file-label" htmlFor="customFileLang">
									Select file
								</label>
							</div>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={toggle}>
							Cancel
						</Button>{' '}
						<Button color="secondary" onClick={toggle}>
							Submit
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		</>
	);
};

export default Upload;
