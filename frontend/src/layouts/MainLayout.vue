<template>
  <q-layout view="lHh Lpr lFf">
    <!--Mobile Nav-->
    <q-footer style="height: 55px;" elevated v-if="$q.platform.is.mobile">
      <q-toolbar>
        <div class="row justify-center full-width full-height text-center">
          <div class="col-3" @click="$router.push('/')">
            <q-icon name="fas fa-home" size="32px" />
          </div>
          <div class="col-3" @click="$router.push('/announcement')">
            <q-icon name="fas fa-bullhorn" size="32px" />
          </div>
          <div class="col-3" @click="$router.push('/self_assessment')">
            <q-icon name="fas fa-file-alt" size="32px" />
          </div>
          <div class="col-3" @click="$router.push('/about')">
            <q-icon name="fas fa-info-circle" size="32px" />
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
        <q-item clickable v-ripple @click="$router.push('/')">
          <q-item-section>
            <q-icon name="fas fa-home" size="32px" />
          </q-item-section>
          <q-item-section>
            หน้าหลัก
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('/announcement')">
          <q-item-section>
            <q-icon name="fas fa-bullhorn" size="32px" />
          </q-item-section>
          <q-item-section>
            แจ้งเตือน
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('/self_assessment')">
          <q-item-section>
            <q-icon name="fas fa-file-alt" size="32px" />
          </q-item-section>
          <q-item-section>
            ทำแบบทดสอบ
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('/about')">
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
