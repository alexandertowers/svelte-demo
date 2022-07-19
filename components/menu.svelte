<script>
    let menu_items = [
        'Home',
        'Customers',
        'AUA',
        'Products',
        'Geography',
        'Experience'
    ]
</script>

{#each menu_items as menu}
    <li><a href={'/'+menu}>{menu}</a></li>
{/each}