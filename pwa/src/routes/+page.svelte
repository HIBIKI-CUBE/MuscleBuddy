<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { workouts } = data;
	console.log(workouts)
</script>

{#each workouts as workout}
  <p>{workout.name}</p>
  <p>{workout.Users?.name}</p>
{/each}

<form method="POST">
  <label>
    トレーニング名
    <input name="name" type="text" />
  </label>
  <button>追加</button>
</form>
