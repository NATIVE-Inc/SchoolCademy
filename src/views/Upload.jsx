import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// reactstrap components
import { Container, Row, Col, Input, FormGroup, Button } from 'reactstrap';

const Upload = (props) => {
	state = {
    	editorState: EditorState.createEmpty(),
	}
	
	let { editorState } = EditorState.createEmpty();

	const onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
		});
	};

	return (
		<>
			<Container className="col-lg-12 no-padding no-margin">
				<Row className="studyHeader">
					<Col lg={9} className="studyHeaderContents col-10">
						<h1 className="display-1 mb-0">Charger des Cours</h1>
					</Col>
				</Row>
				<Row className="studyHeaderContents col-lg-10">
					<Col md="3">
						<Col>
							<FormGroup>
								<label htmlFor="exampleFormControlSelect1">Select Class</label>
								<Input id="exampleFormControlSelect1" type="select">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label htmlFor="exampleFormControlSelect1">Select Subject</label>
								<Input id="exampleFormControlSelect1" type="select">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label htmlFor="exampleFormControlSelect1">Select Section </label>
								<Button
									outline
									className="btn-icon btn-2"
									color="primary"
									type="button"
									size="sm"
									style={{
										float: 'right',
										margin: 0,
									}}
								>
									<span className="btn-inner--icon">
										<i className="ni ni-fat-add"></i>
									</span>
								</Button>
								<Input id="exampleFormControlSelect1" type="select">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label htmlFor="exampleFormControlSelect1">Section Image</label>
								<div className=" custom-file">
									<input
										className=" custom-file-input"
										id="customFileLang"
										lang="en"
										type="file"
									></input>
									<label className=" custom-file-label" htmlFor="customFileLang">
										Select file
									</label>
								</div>
							</FormGroup>
						</Col>
					</Col>
					<Col md="9">
						<h3>Study Content</h3>
						<FormGroup>
							<Input placeholder="Title" type="text"></Input>
						</FormGroup>
						<div>
							<Editor
								editorState={editorState}
								wrapperClassName="demo-wrapper"
								editorClassName="demo-editor"
								onEditorStateChange={onEditorStateChange}
							/>
							<textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Upload;
