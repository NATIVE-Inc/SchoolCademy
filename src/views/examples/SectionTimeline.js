import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ArrowLeft } from 'react-bootstrap-icons';

const SectionTimeline = () => {
	return (
		<div className="App">
			<VerticalTimeline layout="1-column-left">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2011 - present"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
					<p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<ArrowLeft />}
				>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default SectionTimeline;
