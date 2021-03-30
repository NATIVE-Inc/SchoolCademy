import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';
// nodejs library to set properties for components
import { PropTypes } from 'prop-types';
import SectionTimeline from 'views/examples/SectionTimeline';

var ps;

const Sidebar = (props) => {
	return (
		<>
			<SectionTimeline />
		</>
	);
};

export default Sidebar;
