<script>
    import Stat from  "../components/stat.svelte";
    import Meter from "../components/charts/meter.svelte"
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

<p class="font-bold text-xl p-5">Hi, Alex!</p>

<div class="flex flex-col w-full flex-row lg:flex-row">
    <div class="card lg:w-1/3 min-h-max bg-base-100 shadow m-5">
        <div class="card-body">
            <h2 class="card-title">Health Metrics</h2>
            <p>How are you performing?</p>
            <div class="place-self-center"><Meter/></div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">See detail</button>
              </div>
        </div>
    </div>
    <div class="card  min-h-max bg-base-100 shadow m-5 lg:w-2/3">
        <div class="card-body">
          <h2 class="card-title">Recommendations</h2>
          <p>Top 5 Actions for You</p>
          <div class="overflow-x-auto py-5">
            <table class="table w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-actions justify-end py-5">
            <button class="btn btn-primary">See more</button>
          </div>
        </div>
    </div>
</div>
