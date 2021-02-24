<template>
  <div>
    <time-div-select v-model="timeSeries"></time-div-select>
  </div>
</template>
<script>
  import timeDivSelect from 'timedivselect'
  let _timeArray = []
  let _timeString = '';
  let dateOne = '2020-09';
  let date=new Date(Date.parse(dateOne+'-01'));
  let today = date.getDay();
  console.log(today);

  let d = new Date(Date.parse(dateOne))

  let  curMonthDays = new Date(d.getFullYear(), (d.getMonth()), 0).getDate();
  console.log("本月共有 "+ curMonthDays +" 天");


  for (let i = 0; i < 42; i++) {
    if(i>=2 && i<curMonthDays+2){
      _timeArray.push({number:i-1,users:["zhangsan001","zhangsan002"],selected:false});
    }else{
      _timeArray.push({})
    }
    
  }
_timeString = _timeArray
console.log('=====',_timeArray)
  export default{
    name:'',
    data(){
      return {
        timeSeries:_timeString
      }
    },
    components: {
      timeDivSelect
    },
    watch:{
      timeSeries(val){
        console.log(val)
      }
    }
  }
</script>
