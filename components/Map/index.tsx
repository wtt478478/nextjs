import * as echarts from 'echarts/core';
import { TooltipComponent, GeoComponent, TitleComponent, LegendComponent, VisualMapComponent } from 'echarts/components';
import { EffectScatterChart, MapChart, ScatterChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useRef, useEffect, useState, useCallback } from "react";
import MapOption from "./mapOption";
import style from "./index.module.scss";
import MapInfo from "./mapInfo";

echarts.use([
  TooltipComponent,
  GeoComponent,
  EffectScatterChart,
  CanvasRenderer,
  UniversalTransition,
  TitleComponent,
  LegendComponent,
  VisualMapComponent,
  MapChart,
  ScatterChart
]);


const li: any = [{
  name: '北京市',
  value: 200000
},
{
  name: '西藏自治区',
  value: 20000,
},
{
  name: '湖南省',
  value: 1000000,
}]

const selectMapConfigList = [{
  selectColor: '',
  mapColor: '#ffffff',
  mapBorderColor: '#EBEBEB'
}, {
  selectColor: '#ffffff',
  mapColor: '#F3F3F3',
  mapBorderColor: '#D7D7D7'
}]

const defaultMapConfig={
  seriesIndex: null,
  dataIndex: null,
  selectName: '中国',
  zoom: 1,
  center: [107.4995755097656, 33.93337751634657]
}
function Map() {
  //地图dom
  const mapref: any = useRef();
  //
  const [mapConfig, setMapConfig] = useState(defaultMapConfig)
  // 缓存地图操作对象
  const echartRef: any = useRef();

  //配置栏点击事件
  function optionClickSet(item: { name: string; value: number; }[]) {
    setOption(item)
  }

  // 地图省份点击事件
  const echartsMapClick = useCallback(
    (params: any,list:any) => {
      const findCity = list.find((ele: any) => ele.properties.name === params.name)      
      if (findCity) {
        setMapConfig({
          seriesIndex: params.seriesIndex,
          dataIndex: params.dataIndex,
          selectName: params.name,
          zoom: 10,
          center: findCity.properties.centroid || findCity.properties.center
          // center: echartRef.current.convertFromPixel('geo', [params.event.offsetX, params.event.offsetY])
        })
      }
    },
    [],
  )

  useEffect(() => {
    if (mapConfig.selectName!=='中国') {
      setOption([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapConfig])
  

  function setOption(item?: { name: string; value: number; }[] | undefined) {
    const configColor = mapConfig.selectName === '中国' ? selectMapConfigList[0] : selectMapConfigList[1]
    const option: any = {
      backgroundColor: '#F5F5F5',
      title: {
        text: '资源分布图',
        // top: 20,
        left: 'center',
        // textStyle: {
        //   color: '#fff',
        // },
      },
      tooltip: {
        show: true,
        trigger: 'item',
        // triggerOn: 'click',
        confine: true,
        // alwaysShowContent:true,
      },
      // legend: {
      //   show: false,
      //   orient: 'vertical',
      //   top: 'bottom',
      //   left: 'right',
      //   data: ['地点', '线路', '台风'],
      //   textStyle: {
      //     color: '#fff',
      //   },
      // },
      geo: {
        map: 'china',
        label: {
          show: false,
          color: '#FFFFFF',
          fontSize: 12, //省份标签字体颜色
          emphasis: {
            show: false,
          },
        },
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        // scaleLimit:{min:1.5},
        scaleLimit: { min: '1.5' },
        // top: '27%',
        //  layoutCenter: ['150%', '100%'],
        roam: true, //是否允许缩放
        itemStyle: {
          normal: {
            color: configColor.mapColor, //地图背景色
            borderColor: configColor.mapBorderColor, //省市边界线00fcff 516a89
            borderWidth: 1,
          },
          // emphasis: {
            // areaColor:'rgba(255,255,255,0)',
            // borderColor: '#000000'
          // },
        },
        blur: {},
        emphasis: {
          itemStyle: {
            color: null,
            borderColor: '#000000'
          },
        },
        select: { // 地图选中区域样式
          label: { // 选中区域的label(文字)样式
            // color: '#fff'
          },
          itemStyle: {// 选中区域的默认样式
            areaColor: configColor.selectColor
          },
        },
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              // 隐藏地图
              normal: {
                opacity: 0, // 为 0 时不绘制该图形
              },
            },
            label: {
              show: false, // 隐藏文字
            },
          },
        ],
      },
      visualMap: {
        show: false,
        min: 0,
        max: 1000000,
        left: '10%',
        top: 'bottom',
        calculable: true,
        seriesIndex: [0],
        inRange: {
          color: ['#FAE6A5', '#BC1515'], // 蓝绿
        },
      },
      series: [
        {
          name: '资源数量',
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: true
            },
            // emphasis: {
            //   disabled:true,
            //   show: false,
            //   textStyle: {
            //     color: '#fff'
            //   }
            // }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077',
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          animation: false,
          data: item?item:li,
        },
      ]

    };
    echartRef.current.setOption(option);
  }

  //初始注册地图
  useEffect(() => {
    echartRef.current = echarts.init(mapref.current);
    fetch('/chinaNew.json').then(async (res: any) => {
      // echarts.registerMap('china', res.data);
      // console.log(await res.json());
      const data = JSON.parse(JSON.stringify(await res.json()))
      echarts.registerMap('china', {
        geoJSON: data,
        specialAreas: {}
      });
      setOption()
      echartRef.current.on('click', (par: any) => echartsMapClick(par, data.features));
      echartRef.current.resize()

    })
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [echartsMapClick])
  


  function resizeEvent() {
    echartRef.current.resize()
  }
 



  return (
    <section className={style.mapWrap}>      
      <div className={style.mapView} id="map"  ref={mapref}>地图</div>
      {mapConfig.selectName === '中国' ? <MapOption data={li} onClick={(item) => {        
        optionClickSet(item)
      }}></MapOption> : null}
      <MapInfo></MapInfo>
      {/* <button onClick={() => {
        setMapConfig({
          ...mapConfig,
          zoom: mapConfig.zoom + 1,
        })
      }}>setZoom</button> */}

      {/* <button onClick={() => {
        setMapConfig({
          ...mapConfig,
          center: [mapConfig.center[0] + 10, mapConfig.center[1] + 10],
        })
      }}>setCenter</button> */}
    </section>
  );
}
export default Map


