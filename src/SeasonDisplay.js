import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun'
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	console.log(season);

	return (
		<React.Fragment>
			<div className={`season-display ${season}`}>
				<i className={`icon-left massive ${iconName} icon`} />
				<div className="text">{text}</div>
				<i className={`icon-right massive ${iconName} icon`} />
			</div>
		</React.Fragment>
	);
};

export default SeasonDisplay;
