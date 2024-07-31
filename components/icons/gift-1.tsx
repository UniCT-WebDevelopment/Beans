import React from 'react';
import IconProps from "@/types/icon.types"

function Gift1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25 8.25V14.25C14.25 15.355 13.355 16.25 12.25 16.25H5.75C4.645 16.25 3.75 15.355 3.75 14.25V8.25" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 5.25V16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 3.5C3.75 2.534 4.534 1.75 5.5 1.75C8.089 1.75 9 5.25 9 5.25H5.5C4.534 5.25 3.75 4.466 3.75 3.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.5 5.25H9C9 5.25 9.911 1.75 12.5 1.75C13.466 1.75 14.25 2.534 14.25 3.5C14.25 4.466 13.466 5.25 12.5 5.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 8.25V14.25C14.25 15.355 13.355 16.25 12.25 16.25H5.75C4.645 16.25 3.75 15.355 3.75 14.25V8.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 5.25H2.75C2.19772 5.25 1.75 5.69772 1.75 6.25V7.25C1.75 7.80228 2.19772 8.25 2.75 8.25H15.25C15.8023 8.25 16.25 7.80228 16.25 7.25V6.25C16.25 5.69772 15.8023 5.25 15.25 5.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Gift1;