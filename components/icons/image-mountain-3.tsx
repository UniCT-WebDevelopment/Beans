import React from 'react';
import IconProps from "@/types/icon.types"

function ImageMountain3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="5.5" cy="4" fill={secondaryfill} r="2"/>
		<path d="M12.66,6.401c-.666-.906-2.154-.906-2.82,0l-2.715,3.692-.84-1.142c-.666-.907-2.154-.907-2.82,0l-2.398,3.262c-.393,.535-.451,1.234-.151,1.827s.898,.96,1.562,.96H15.523c.663,0,1.262-.368,1.562-.96s.241-1.292-.151-1.827l-4.273-5.812Z" fill={fill}/>
	</g>
</svg>
	);
}

export default ImageMountain3;