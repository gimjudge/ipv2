import React from 'react';

class CircleLineDot extends React.Component {

	render() {
		const { cx, cy, stroke, payload } = this.props;

		if (cx !== +cx || cy !== +cy) { return null; }

		return (
			<svg>
				<circle cx={cx} cy={cy} r={5} stroke={stroke} strokeWidth={1} fill={stroke} />
			</svg>
		);
	}
}

export default CircleLineDot;