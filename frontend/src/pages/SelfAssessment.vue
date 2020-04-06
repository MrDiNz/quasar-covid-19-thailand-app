<template>
  <div id="SelfAssessment">
    <iframe
      src="http://covid19.ddc.moph.go.th/th/self_screening"
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
export default class SelfAssessment extends Vue {}
</script>

<style scoped></style>
