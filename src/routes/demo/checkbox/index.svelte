<svelte:head>
  <title>Checkbox - SMUI</title>
</svelte:head>

<section>
  <h2>Checkbox 复选框</h2>

  <pre class="demo-spaced">npm i -D @smui/checkbox</pre>

  <Demo component={Simple} file="checkbox/_Simple.svelte" />

  <Demo component={Touch} file="checkbox/_Touch.svelte">
    加大触控目标
  </Demo>

  <Demo component={Group} file="checkbox/_Group.svelte">复选框组</Demo>

  <Demo component={Indeterminate} file="checkbox/_Indeterminate.svelte">
    不确定的
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Touch from './_Touch.svelte';
  import Group from './_Group.svelte';
  import Indeterminate from './_Indeterminate.svelte';
</script>
