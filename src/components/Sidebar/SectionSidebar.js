import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ArrowLeft } from 'react-bootstrap-icons';

const Sidebar = (props) => {
	const parts = props.parts;
	
	return (
		<div className="App">
			<VerticalTimeline layout="1-column-left">
				
				{parts.map((part, id) => {
					return (
						<VerticalTimelineElement
							key={id}
							className="vertical-timeline-element--work"
							contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
							iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
							icon={<ArrowLeft />}
						>
							<h2 className="vertical-timeline-element-subtitle">{part.title}</h2>
						</VerticalTimelineElement>
					);
					
				})}

			</VerticalTimeline>
		</div>
	);
};

export default Sidebar;
