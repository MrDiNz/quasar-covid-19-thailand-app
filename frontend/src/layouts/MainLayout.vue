<template>
  <q-layout view="lHh Lpr lFf">
    <!--Mobile Nav-->
    <q-footer elevated style="height: 55px;" v-if="$q.platform.is.mobile">
      <q-toolbar>
        <div class="row  full-width full-height text-center">
          <div @click="$router.push('/')" class="col">
            <q-icon name="fas fa-home" size="32px" />
          </div>
          <div @click="$router.push('/announcement')" class="col">
            <q-icon name="fas fa-bullhorn" size="32px" />
          </div>
          <div @click="$router.push('/map')" class="col">
            <q-icon name="fas fa-map-marked-alt" size="32px" />
          </div>
          <div @click="$router.push('/self_assessment')" class="col">
            <q-icon name="fas fa-file-alt" size="32px" />
          </div>
          <div @click="$router.push('/about')" class="col">
            <q-icon name="fas fa-info-circle" size="32px" />
          </div>
        </div>
      </q-toolbar>
    </q-footer>
    <!--PC Nav-->
    <q-header elevated v-if="!$q.platform.is.mobile">
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
      v-if="!$q.platform.is.mobile"
      v-model="leftDrawerOpen"
    >
      <q-list>
        <q-item @click="$router.push('/')" clickable v-ripple>
          <q-item-section>
            <q-icon name="fas fa-home" size="32px" />
          </q-item-section>
          <q-item-section>
            หน้าหลัก
          </q-item-section>
        </q-item>
        <q-item @click="$router.push('/announcement')" clickable v-ripple>
          <q-item-section>
            <q-icon name="fas fa-bullhorn" size="32px" />
          </q-item-section>
          <q-item-section>
            แจ้งเตือน
          </q-item-section>
        </q-item>
        <q-item @click="$router.push('/map')" clickable v-ripple>
          <q-item-section>
            <q-icon name="fas fa-map-marked-alt" size="32px" />
          </q-item-section>
          <q-item-section>
            แผนที่
          </q-item-section>
        </q-item>
        <q-item @click="$router.push('/self_assessment')" clickable v-ripple>
          <q-item-section>
            <q-icon name="fas fa-file-alt" size="32px" />
          </q-item-section>
          <q-item-section>
            ทำแบบทดสอบ
          </q-item-section>
        </q-item>
        <q-item @click="$router.push('/about')" clickable v-ripple>
          <q-item-section>
            <q-icon name="fas fa-info-circle" size="32px" />
          </q-item-section>
          <q-item-section>
            ติดต่อผู้พัฒนา
          </q-item-section>
        </q-item>
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
