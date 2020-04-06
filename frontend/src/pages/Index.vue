<template>
  <q-page>
    <q-card class="q-ma-sm">
      <q-card-section>
        <p class="text-h5 text-center ">สถานะผู้ติดเชื้อ COVID-19</p>
      </q-card-section>
    </q-card>
    <q-card class="q-ma-sm" style="border-radius: 8px">
      <div class="row">
        <div class="col-12">
          <q-card class="bg-negative " dark style="border-radius: 8px 8px 0 0">
            <q-card-section class="text-center">
              <p class="text-h5">ผู้ติดเชื้อทั้งหมด</p>
              <p class="text-h4">{{ numberWithCommas(data.Confirmed) }}</p>
              <p>(รายใหม่: {{ numberWithCommas(data.NewConfirmed) }})</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <q-card
            class="bg-positive full-height"
            dark
            style="border-radius: 0 0 0 8px"
          >
            <q-card-section class="text-center">
              <p class="text-subtitle1">หายแล้ว</p>
              <p class="text-h6">{{ numberWithCommas(data.Recovered) }}</p>
              <p>(วันนี้: {{ numberWithCommas(data.NewRecovered) }})</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4">
          <q-card
            class="bg-secondary full-height"
            dark
            style="border-radius: 0;"
          >
            <q-card-section class="text-center">
              <p class="text-subtitle1">กำลังรักษา</p>
              <p class="text-h6">{{ numberWithCommas(data.Hospitalized) }}</p>
              <p>(วันนี้: {{ numberWithCommas(data.NewHospitalized) }})</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 ">
          <q-card
            class="bg-dark full-height"
            dark
            style="border-radius: 0 0 8px 0"
          >
            <q-card-section class="text-center">
              <p class="text-subtitle1">เสียชีวิต</p>
              <p class="text-h6">{{ numberWithCommas(data.Deaths) }}</p>
              <p>(วันนี้: {{ numberWithCommas(data.NewDeaths) }})</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
    <div class="q-ma-sm">
      <p class="text-subtitle1">อัพเดทล่าสุด: {{ getDate(data.UpdateDate) }}</p>
    </div>
    <div>
      กราฟสถิติ จะตามมาในเร็วๆนี้...
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import { date } from 'quasar';

@Component
export default class PageIndex extends Vue {
  data = {
    Confirmed: 0,
    Recovered: 0,
    Hospitalized: 0,
    Deaths: 0,
    NewConfirmed: 0,
    NewRecovered: 0,
    NewHospitalized: 0,
    NewDeaths: 0,
    UpdateDate: ''
  };

  mounted() {
    this.$q.loading.show();
    axios
      .get('https://covid19.th-stat.com/api/open/today')
      .then(res => {
        this.data = res.data;
      })
      .catch(err => {
        // console.log(err);
      })
      .finally(() => {
        this.$q.loading.hide();
      });
  }

  getDate(dateStr: any) {
    dateStr = new Date(dateStr).setFullYear(
      new Date(dateStr).getFullYear() + 543
    );
    return date.formatDate(dateStr, 'D MMMM YYYY - H:m', {
      months: [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม'
      ]
    });
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
</script>
