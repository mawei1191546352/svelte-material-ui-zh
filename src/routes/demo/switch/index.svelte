<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch 开关</h2>

  <pre class="demo-spaced">npm i -D @smui/switch</pre>

  <Demo component={Simple} file="switch/_Simple.svelte" />

  <Demo component={PrimaryColor} file="switch/_PrimaryColor.svelte">
    主题色
  </Demo>

  <Demo component={Group} file="switch/_Group.svelte">开关组</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import Group from './_Group.svelte';
</script>
