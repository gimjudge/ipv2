import React from 'react';

class TriangleLineDot extends React.Component {

	render() {
		const { cx, cy, stroke, payload } = this.props;

		if (cx !== +cx || cy !== +cy) { return null; }

		return (
			<svg x={cx - 5} y={cy - 5}>
				<polygon points="5,0 10,10 0,10" style={{fill:stroke,stroke:stroke,strokeWidth:1}} />
			</svg>
		);
	}
}

export default TriangleLineDot;