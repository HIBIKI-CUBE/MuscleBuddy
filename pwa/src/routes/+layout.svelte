<script>
  import { onMount } from 'svelte';
  import { pwaInfo } from 'virtual:pwa-info';

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register');
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          r &&
            setInterval(() => {
              console.log('Checking for sw update');
              r.update();
            }, 2000 /* 20s for testing purposes */);
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log('SW registration error', error);
        },
      });
    }
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html webManifest}
</svelte:head>

<main>
  <slot />
</main>

{#await import('$lib/components/ReloadPrompt.svelte') then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await}
