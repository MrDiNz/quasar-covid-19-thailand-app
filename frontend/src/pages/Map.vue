<template>
  <div id="Map">
    <iframe
      src="https://covid19.th-stat.com/th/share/map"
      sandbox="allow-same-origin allow-scripts allow-forms"
      :width="$q.screen.width"
      :height="$q.screen.height"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Map extends Vue {}
</script>

<style scoped></style>
