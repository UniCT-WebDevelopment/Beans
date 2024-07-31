import React from 'react';
import IconProps from "@/types/icon.types"

function SideProfile2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M17.1,9.3l-1.354-1.806c-.072-1.944-.972-3.749-2.49-4.984-1.587-1.289-3.665-1.783-5.701-1.359C5.005,1.684,2.935,3.753,2.401,6.302c-.599,2.868,.639,5.7,3.099,7.191v2.756c0,.414,.336,.75,.75,.75h5c.414,0,.75-.336,.75-.75v-1.75h.89c1.435,0,2.64-1.121,2.742-2.551l.078-1.075,1.068-.427c.217-.086,.381-.269,.443-.494,.063-.225,.019-.466-.122-.653Zm-4.6-1.3c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" fill={fill}/>
	</g>
</svg>
	);
}

export default SideProfile2;