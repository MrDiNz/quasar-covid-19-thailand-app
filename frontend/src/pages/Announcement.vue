<template>
  <div id="Stat" v-if="!$q.loading.isActive">
    <q-card class="q-ma-sm">
      <q-card-section>
        <p class="text-h5 text-center ">แจ้งเตือนตามคำประกาศ</p>
      </q-card-section>
    </q-card>
    <div>
      <div v-if="datas.Data">
        <q-card v-for="(data, i) in datas.Data" :key="i" class="q-ma-sm">
          <q-card-section>
            <div class="row">
              <!--province-->
              <div class="col-12 text-h6">จังหวัด: {{ data.Province }}</div>
              <!--date and time-->
              <div class="col-12 text-subtitle1">
                <p>วันที่: {{ data.Date }}</p>
                <p>เวลา: {{ data.Time }}</p>
              </div>
              <div class="col-12">สถานที่: {{ data.Location }}</div>
              <div class="col-12">
                รายละเอียด:
                <p v-html="data.Recommend"></p>
              </div>
              <div class="col-12">
                <p>โดย: {{ data.AnnounceBy }}</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { date } from 'quasar';

@Component
export default class Announcement extends Vue {
  datas!: {
    Data: [
      {
        Date: string;
        Time: string;
        Detail: string;
        Location: string;
        Recommend: string;
        AnnounceBy: string;
        Province: string;
        ProvinceEn: string;
        Update: string;
      }
    ];
    LastData: string;
    UpdateDate: string;
    Source: string;
    DevBy: string;
    SeverBy: string;
  };

  beforeMount() {
    this.$q.loading.show();
    axios
      .get('https://covid19.th-stat.com/api/open/area')
      .then((res: any) => {
        this.datas = res.data;
      })
      .catch((err: any) => {
        // console.log(err);
      })
      .finally(() => {
        this.$q.loading.hide();
      });
  }

  getDate(dateStr: any) {
    if (dateStr) {
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
    } else return '';
  }
}
</script>

<style scoped></style>
