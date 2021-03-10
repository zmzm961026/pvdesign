<template>
  <div>
    <baidu-map :zoom="5" @ready="handler" style="height:387px">
      <!--  @click="getClickInfo"  :scroll-wheel-zoom='true'-->
    </baidu-map>
  </div>
</template>

<script>
  export default {
    // props: ['lng','lat'],
    props: {
      lng: {
        type: Number,
        default: 116.867966
      },
      lat: {
        type: Number,
        default: 40.380883
      },
    },
    data () {
      return {
        center: {lng: this.lng, lat: this.lat},
        map:{},
      }
    },
    methods: {
      handler ({BMap, map}) {
        var that = this;
        this.map={BMap, map}
        console.log({BMap, map})
        var point = new BMap.Point(this.center.lng, this.center.lat)
        map.centerAndZoom(point, 5)
        map.enableScrollWheelZoom(true);
        var marker = new BMap.Marker(point) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中
        // var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
        // map.addOverlay(circle)
        map.addEventListener("click", function (e) {
          console.log(e)
          map.clearOverlays();
          var new_point = new BMap.Point(e.point.lng, e.point.lat);
          var new_mk = new BMap.Marker(new_point);
          map.addOverlay(new_mk);
          var gc = new BMap.Geocoder();
          gc.getLocation(new_point, function (rs) {
            var addComp = rs.addressComponents;
            that.$emit('changeCity',addComp)
          });
        });
      },
      // getClickInfo (e) {
      //   console.log(e.point.lng)
      //   console.log(e.point.lat)
      //   this.center.lng = e.point.lng
      //   this.center.lat = e.point.lat
      // }
    },
    watch: {
      lng(newValue, oldValue) {
        this.center.lng = newValue;
        this.handler(this.map);
      },
    },
  }
</script>

<style scoped>

</style>