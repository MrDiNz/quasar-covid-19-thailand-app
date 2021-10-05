<template>
  <div id="About">
    <q-card class="q-ma-sm">
      <q-card-section>
        <p class="text-center text-h5">
          ติดต่อผู้พัฒน
        </p>
      </q-card-section>
    </q-card>
    <q-card class="q-ma-sm">
      <!--mobile version-->
      <q-card-section v-if="$q.platform.is.mobile">
        <p class="text-h6 text-center">ผู้พัฒนา</p>
        <div class="row justify-between">
          <div class="col-4">
            <q-img style="max-width: 320px" src="../assets/dev_img.jpg" />
          </div>
          <div class="col-7">
            <p>นายปกรณ์ ทรัพย์พูนเกิด</p>
            <p>แนะนำ ติ-ชม ติดต่อได้ที่</p>
            <p>อีเมลล์: pakorn.sub5@gmail.com</p>
          </div>
        </div>
      </q-card-section>
      <!--pc version-->
      <q-card-section v-else>
        <p class="text-h5 text-center">ผู้พัฒนา</p>
        <div class="row justify-between">
          <div class="col-4">
            <q-img style="max-width: 320px" src="../assets/dev_img.jpg" />
          </div>

          <div class="col-7">
            <p class="text-h6">นายปกรณ์ ทรัพย์พูนเกิด</p>
            <p class="text-h6">แนะนำ ติ-ชม ติดต่อได้ที่</p>
            <p class="text-h6">อีเมลล์: pakorn.sub5@gmail.com</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-ma-sm">
      <q-card-section>
        <p class="text-h5 text-center">ขอขอบคุณข้อมูลจาก</p>
        <div class="row justify-between">
          <div class="col-4">
            <q-img
              style="max-width: 320px"
              src="https://covid19.th-stat.com/img/logoDDC.png"
            />
          </div>
          <div class="col-7">
            <p :class="$q.platform.is.mobile ? '' : 'text-h6'">
              เว็บไซต์: ddc.moph.go.th
            </p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style scoped></style>
