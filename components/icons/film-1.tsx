import React from 'react';
import IconProps from "@/types/icon.types"

function Film1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75 4.75C1.75 3.64543 2.64543 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V6.25H1.75V4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V11.75H1.75V13.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 6.25V11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 6.25H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 11.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 11.75V15.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 2.75V6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 2.75V6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 2.75V6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 11.75V15.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 11.75V15.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Film1;