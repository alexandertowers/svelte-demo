<script>
    import Stat from  "../../components/stat.svelte";
    let quickStats = [
        'Number of Customers',
        'Assets under Administration',
        'Attrition',
        'Open Issues',
        'Open Requests'
    ];
</script>

<div class="flex flex-col lg:flex-row m-5">
    {#each quickStats as stat}
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box">
            <Stat title={stat} value={Math.round(Math.random()*100, 2)}/>
        </div>
        {#if quickStats.indexOf(stat) != quickStats.length - 1}
            <div class="divider lg:divider-horizontal"></div>
        {/if}
    {/each}
</div>