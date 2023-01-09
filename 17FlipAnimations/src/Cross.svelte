<script>
  import { crossfade, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  let todo = [
    {
      id: 1,
      isDone: false,
      text: "Wake Up",
    },
    {
      id: 2,
      isDone: false,
      text: "Get out of bed",
    },
    {
      id: 3,
      isDone: false,
      text: "Comb Hair",
    },
    {
      id: 4,
      isDone: false,
      text: "Drives Car",
    },
    {
      id: 5,
      isDone: false,
      text: "Dreams",
    },
  ];

  const [ send, receive ] = crossfade({
    fallback: fade
  });

</script>

<div class="flex">

  <div class="card">
    <h3>Not Done</h3>
    <ul>
      {#each todo.filter(item => !item.isDone) as item (item.id)}
        <li
          animate:flip
          in:receive={{ key: item.id }}
          out:send={{ key: item.id }}
        >
          <label>
            <input bind:checked={item.isDone} type="checkbox">
            {item.text}
          </label>
        </li>
      {/each}
    </ul>
  </div>

  <div class="card">
    <h3>Done</h3>
    <ul>
      {#each todo.filter(item => item.isDone) as item (item.id)}
        <li
          animate:flip
          in:receive={{ key: item.id }}
          out:send={{ key: item.id }}
        >
          <label>
            <input bind:checked={item.isDone} type="checkbox">
            {item.text}
          </label>
        </li>
      {/each}
    </ul>
  </div>

</div>

<style>
  .card { 
    width: 50%;
  }
  ul  {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }
</style>
