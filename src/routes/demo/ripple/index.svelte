<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple 涟漪</h2>

  <pre class="demo-spaced">npm i -D @smui/ripple</pre>

  <Demo component={Simple} file="ripple/_Simple.svelte" />

  <Demo component={PrimaryColor} file="ripple/_PrimaryColor.svelte" />

  <Demo component={SecondaryColor} file="ripple/_SecondaryColor.svelte" />

  <Demo component={Unbounded} file="ripple/_Unbounded.svelte">没有界限的</Demo>

  <Demo
    component={KeyboardActivation}
    file="ripple/_KeyboardActivation.svelte"
  />
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Unbounded from './_Unbounded.svelte';
  import KeyboardActivation from './_KeyboardActivation.svelte';
</script>
