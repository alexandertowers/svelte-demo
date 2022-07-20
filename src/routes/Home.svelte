<script>
    import Stat from  "../components/stat.svelte";
    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";
    import LineGraph from '../components/charts/line.svelte';
    let quickStats = [
        'Number of Customers',
        'Assets under Administration',
        'Attrition',
        'Open Issues',
        'Open Requests'
    ];
    let show = false;
    let data = [
		{age: 24, temp: 37.2},
		{age: 24.1, temp: 37.1},
		{age: 24.2, temp: 36.8},
		{age: 24.3, temp: 37.0},
		{age: 24.4, temp: 36.7},
		{age: 24.5, temp: 37.2},
		{age: 24.6, temp: 36.5},
		{age: 24.7, temp: 36.9},
	];
    function showGraph(){
        show = !show;
    }
</script>

<div class="flex flex-col lg:flex-row m-5">
    {#each quickStats as stat}
        <div on:click={showGraph} class="grid flex-grow h-32 card bg-base-300 rounded-box">
            <Stat title={stat} value={Math.round(Math.random()*100, 2)}/>
        </div>
        {#if quickStats.indexOf(stat) != quickStats.length - 1}
            <div class="divider lg:divider-horizontal"></div>
        {/if}
    {/each}
    
</div>
<div class="flex flex-col lg:flex-row m-5">
    <LineGraph {data} {show} />
</div>