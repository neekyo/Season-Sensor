import React from 'react';

const seasonConfig = {
	spring: {
		text: 'Flowers are smelling great!',
		iconName: 'tree'
	},
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun'
	},
	autumn: {
		text: 'Get your rakes ready!',
		iconName: 'leaf'
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 1 && month < 5) {
		return lat > 0 ? 'spring' : 'autumn';
	} else if (month > 4 && month < 8) {
		return lat > 0 ? 'summer' : 'winter';
	} else if (month > 7 && month < 11) {
		return lat > 0 ? 'autumn' : 'spring';
	} else if (month > 10 && month < 2) {
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
				<div className="season">{season}</div>
				<div className="text">{text}</div>
				<i className={`icon-right massive ${iconName} icon`} />
			</div>
		</React.Fragment>
	);
};

export default SeasonDisplay;
