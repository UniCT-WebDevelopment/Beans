import React from 'react';
import IconProps from "@/types/icon.types"

function Keyboard1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.25 4.75H2.75C1.64543 4.75 0.75 5.64543 0.75 6.75V11.25C0.75 12.3546 1.64543 13.25 2.75 13.25H15.25C16.3546 13.25 17.25 12.3546 17.25 11.25V6.75C17.25 5.64543 16.3546 4.75 15.25 4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M15.25 4.75H2.75C1.64543 4.75 0.75 5.64543 0.75 6.75V11.25C0.75 12.3546 1.64543 13.25 2.75 13.25H15.25C16.3546 13.25 17.25 12.3546 17.25 11.25V6.75C17.25 5.64543 16.3546 4.75 15.25 4.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.75 10.25H6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4 7H3.5C3.22386 7 3 7.22386 3 7.5V8C3 8.27614 3.22386 8.5 3.5 8.5H4C4.27614 8.5 4.5 8.27614 4.5 8V7.5C4.5 7.22386 4.27614 7 4 7Z" fill={fill}/>
		<path d="M4 9.5H3.5C3.22386 9.5 3 9.72386 3 10V10.5C3 10.7761 3.22386 11 3.5 11H4C4.27614 11 4.5 10.7761 4.5 10.5V10C4.5 9.72386 4.27614 9.5 4 9.5Z" fill={fill}/>
		<path d="M6.5 7H6C5.72386 7 5.5 7.22386 5.5 7.5V8C5.5 8.27614 5.72386 8.5 6 8.5H6.5C6.77614 8.5 7 8.27614 7 8V7.5C7 7.22386 6.77614 7 6.5 7Z" fill={fill}/>
		<path d="M9.25 7H8.75C8.47386 7 8.25 7.22386 8.25 7.5V8C8.25 8.27614 8.47386 8.5 8.75 8.5H9.25C9.52614 8.5 9.75 8.27614 9.75 8V7.5C9.75 7.22386 9.52614 7 9.25 7Z" fill={fill}/>
		<path d="M14.5 7H14C13.7239 7 13.5 7.22386 13.5 7.5V8C13.5 8.27614 13.7239 8.5 14 8.5H14.5C14.7761 8.5 15 8.27614 15 8V7.5C15 7.22386 14.7761 7 14.5 7Z" fill={fill}/>
		<path d="M14.5 9.5H14C13.7239 9.5 13.5 9.72386 13.5 10V10.5C13.5 10.7761 13.7239 11 14 11H14.5C14.7761 11 15 10.7761 15 10.5V10C15 9.72386 14.7761 9.5 14.5 9.5Z" fill={fill}/>
		<path d="M12 7H11.5C11.2239 7 11 7.22386 11 7.5V8C11 8.27614 11.2239 8.5 11.5 8.5H12C12.2761 8.5 12.5 8.27614 12.5 8V7.5C12.5 7.22386 12.2761 7 12 7Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Keyboard1;