<template>
  <q-layout view="lHh Lpr lFf">
    <!--Mobile Nav-->
    <q-footer elevated v-if="$q.platform.is.mobile">
      <q-toolbar>
        <div class="row justify-center full-width full-height text-center">
          <div class="col-3">
            Menu1
          </div>
          <div class="col-3">
            menu2
          </div>
          <div class="col-3">
            menu3
          </div>
          <div class="col-3">
            menu3
          </div>
        </div>
      </q-toolbar>
    </q-footer>
    <!--PC Nav-->
    <q-header elevated v-else>
      <q-toolbar>
        <div class="row justify-between full-width full-height">
          <div class="col-1">
            <q-btn
              @click="leftDrawerOpen = !leftDrawerOpen"
              aria-label="Menu"
              dense
              flat
              icon="menu"
              round
            />
          </div>
          <div class="col-auto">
            <q-toolbar-title class="text-h4">
              COVID-19 Thailand
            </q-toolbar-title>
          </div>
          <div class="col-1" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      content-class="bg-grey-1"
      show-if-above
      v-model="leftDrawerOpen"
    >
      <q-list>
        <q-item-label class="text-grey-8" header>
          Essential Links
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MainPage extends Vue {
  leftDrawerOpen = false;

  mounted() {}
}
</script>
