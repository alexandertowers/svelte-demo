<script>
	import { draw } from 'svelte/transition';
	
	import { extent } from 'd3-array';
	import { scaleLinear } from 'd3-scale';
	import { line, curveBasis } from 'd3-shape';

	// props
	export let data;
  export let show;
	
	// scales
	const xScale = scaleLinear()
		.domain(extent(data.map(d => d.age)))
		.range([5, 95]);
	
	const yScale = scaleLinear()
		.domain(extent(data.map(d => d.temp)))
		.range([5, 75]);
	
	// the path generator
	const pathLine = line()
		.x(d => xScale(d.age))
		.y(d => yScale(d.temp))
		.curve(curveBasis);
</script>

<svg viewBox="0 0 100 50">
	{#if (show)}
		<path x=0 y=0 transition:draw={{duration: 2000}}
					d={pathLine(data)} />
	{/if}
</svg>

<style>
	path {
		stroke: purple;
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
	}
</style>