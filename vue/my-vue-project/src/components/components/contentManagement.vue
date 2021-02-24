<template>
  <div>aaa
    <Row>
      <Col span="6" v-for="(item,index) in pageData" :key="index">
        <Select v-model="item.selectVal" style="width:260px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model10: [],
        pageData: [
          {}
        ]
      }
    },
    mounted() {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push({
          // selectVal: ['New York', 'Canberra']
          selectVal: 'New York'
        })
      };
      this.pageData = arr;
    }
  }
</script>