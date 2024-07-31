import React from 'react';
import IconProps from "@/types/icon.types"

function Bell5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m10.75,7.5c-.414,0-.75-.336-.75-.75v-2.75c0-2.206-1.794-4-4-4S2,1.794,2,4v2.75c0,.414-.336.75-.75.75s-.75.336-.75.75.336.75.75.75h9.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z" fill={fill} strokeWidth="0"/>
		<path d="m6,12c1.105,0,2-.895,2-2h-4c0,1.105.895,2,2,2Z" fill={secondaryfill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Bell5;