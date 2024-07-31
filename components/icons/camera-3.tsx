import React from 'react';
import IconProps from "@/types/icon.types"

function Camera3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25,3.75h-2.25l-.507-1.351c-.146-.39-.519-.649-.936-.649h-3.114c-.417,0-.79,.259-.936,.649l-.507,1.351H3.75c-1.105,0-2,.895-2,2v6.5c0,1.105,.895,2,2,2H14.25c1.105,0,2-.895,2-2V5.75c0-1.105-.895-2-2-2Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="9" cy="9" fill="none" r="2.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="4.25" cy="6.25" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default Camera3;