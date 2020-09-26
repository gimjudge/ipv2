import React from 'react';

class SquareLineDot extends React.Component {

	render() {
		const { cx, cy, stroke, payload } = this.props;

		if (cx !== +cx || cy !== +cy) { return null; }

		// if (payload.value > 250) {
		// 	return (
		// 		<svg  x={cx - 5} y={cy - 5}>
		// 			<rect width={10} height={10}  style={{fill:stroke,strokeWidth:3,stroke}} />
		// 		</svg>
		// 	);
		// }

		return (
			<svg  x={cx - 5} y={cy - 5}>
				<rect width={10} height={10}  style={{fill:stroke,strokeWidth:3,stroke}} />
			</svg>
		);
	}
}

export default SquareLineDot;
