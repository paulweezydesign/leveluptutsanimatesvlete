<script>
  import { drag } from './drag';
</script>


<div use:drag class="box"></div>

<style>
.box {
  background: var(--primary);
  box-shadow: var(--level-2);
  height: 100px;
  width: 100px;
}
</style>