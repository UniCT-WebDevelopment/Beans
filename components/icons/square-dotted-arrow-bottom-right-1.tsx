import React from 'react';
import IconProps from "@/types/icon.types"

function SquareDottedArrowBottomRight1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5V13.5C2.5 14.6046 3.39543 15.5 4.5 15.5H9.25V9.25H15.5V4.5C15.5 3.39543 14.6046 2.5 13.5 2.5H4.5Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M2.75 9.75C3.16421 9.75 3.5 9.41421 3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25C2.33579 8.25 2 8.58579 2 9C2 9.41421 2.33579 9.75 2.75 9.75Z" fill={fill}/>
		<path d="M9 3.5C9.41421 3.5 9.75 3.16421 9.75 2.75C9.75 2.33579 9.41421 2 9 2C8.58579 2 8.25 2.33579 8.25 2.75C8.25 3.16421 8.58579 3.5 9 3.5Z" fill={fill}/>
		<path d="M2.75 3.5C3.16421 3.5 3.5 3.16421 3.5 2.75C3.5 2.33579 3.16421 2 2.75 2C2.33579 2 2 2.33579 2 2.75C2 3.16421 2.33579 3.5 2.75 3.5Z" fill={fill}/>
		<path d="M2.75 6.625C3.16421 6.625 3.5 6.28921 3.5 5.875C3.5 5.46079 3.16421 5.125 2.75 5.125C2.33579 5.125 2 5.46079 2 5.875C2 6.28921 2.33579 6.625 2.75 6.625Z" fill={fill}/>
		<path d="M2.75 12.875C3.16421 12.875 3.5 12.5392 3.5 12.125C3.5 11.7108 3.16421 11.375 2.75 11.375C2.33579 11.375 2 11.7108 2 12.125C2 12.5392 2.33579 12.875 2.75 12.875Z" fill={fill}/>
		<path d="M2.75 16C3.16421 16 3.5 15.6642 3.5 15.25C3.5 14.8358 3.16421 14.5 2.75 14.5C2.33579 14.5 2 14.8358 2 15.25C2 15.6642 2.33579 16 2.75 16Z" fill={fill}/>
		<path d="M15.25 3.5C15.6642 3.5 16 3.16421 16 2.75C16 2.33579 15.6642 2 15.25 2C14.8358 2 14.5 2.33579 14.5 2.75C14.5 3.16421 14.8358 3.5 15.25 3.5Z" fill={fill}/>
		<path d="M15.25 6.625C15.6642 6.625 16 6.28921 16 5.875C16 5.46079 15.6642 5.125 15.25 5.125C14.8358 5.125 14.5 5.46079 14.5 5.875C14.5 6.28921 14.8358 6.625 15.25 6.625Z" fill={fill}/>
		<path d="M12.125 3.5C12.5392 3.5 12.875 3.16421 12.875 2.75C12.875 2.33579 12.5392 2 12.125 2C11.7108 2 11.375 2.33579 11.375 2.75C11.375 3.16421 11.7108 3.5 12.125 3.5Z" fill={fill}/>
		<path d="M5.875 3.5C6.28921 3.5 6.625 3.16421 6.625 2.75C6.625 2.33579 6.28921 2 5.875 2C5.46079 2 5.125 2.33579 5.125 2.75C5.125 3.16421 5.46079 3.5 5.875 3.5Z" fill={fill}/>
		<path d="M5.875 16C6.28921 16 6.625 15.6642 6.625 15.25C6.625 14.8358 6.28921 14.5 5.875 14.5C5.46079 14.5 5.125 14.8358 5.125 15.25C5.125 15.6642 5.46079 16 5.875 16Z" fill={fill}/>
		<path d="M9.25 15.25V9.25H15.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.25 9.25L15.25 15.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default SquareDottedArrowBottomRight1;