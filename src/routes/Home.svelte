<script>
    import Stat from  "../components/stat.svelte";
    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";
    let quickStats = [
        {'title':'Number of Customers', 'value':'12345', 'desc':'↗︎ 400 (22%)'},
        {'title':'Assets under Administration', 'value':'$1,543,299.00', 'desc':''},
        {'title':'Attrition', 'value':'2%', 'desc':'Jan 1st - Feb 1st'},
        {'title':'Open Issues', 'value':'12', 'desc':'↘︎ 9 (14%)'},
        {'title':'Open Requests', 'value':'5', 'desc':'↘︎ 1 (10%)'}
    ];
</script>

<div class="flex flex-col justify-center lg:flex-row m-5">
    <div class="stats stats-vertical w-full lg:stats-horizontal shadow">
        {#each quickStats as stat}
            <Stat title={stat.title} value={stat.value} desc={stat.desc} />
        {/each}
      </div>
</div>
<div class="flex flex-col flex-row lg:flex-row">
    <div class="card lg:w-2/3 min-h-max bg-base-100 shadow-lg m-5 w-full">
        <div class="card-body">
          <h2 class="card-title">Health Metrics</h2>
          <p>How are you performing?</p>
        </div>
    </div>
    <div class="card lg:w-1/3 min-h-max bg-base-100 shadow-lg m-5 w-full">
        <div class="card-body">
          <h2 class="card-title">Recommendations</h2>
          <p>Top 5 Actions for You</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">See more</button>
          </div>
        </div>
    </div>

      
</div>