// import { helper } from "../echarts.js";
import { getData as getData } from "../getthedata.js";
import { createTheimage as createnetwork } from "../network/index2.js";
// 基于准备好的 DOM，初始化 ECharts 实例
let isEventBound = false;
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // 如果是基本数据类型或 null，则直接返回
  }

  let copy;

  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]); // 递归复制数组元素
    }
  } else {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]); // 递归复制对象的属性
      }
    }
  }

  return copy;
}

export const createTheimage = function (data1, container, type = 1, paramName) {
  const chartDom = document.getElementById(`${container}`);
  const myChart = echarts.init(chartDom);
  fetch("http://127.0.0.1:5000/api/v1/NumberOfCasesAtPoliceStations")
    .then((a) => a.json())
    .then((NumberOfCasesAtPoliceStationse) => {
      const a1 = {
        萧山临浦派出所: "临浦镇",
        萧山义桥派出所: "义桥镇",
        萧山党湾派出所: "党湾镇",
        萧山北干派出所: "北干街道",
        萧山南阳派出所: "南阳街道",
        萧山城厢派出所: "城厢街道",
        萧山宁围派出所: "宁围镇",
        萧山市北派出所: "萧山经济技术开发区",
        萧山戴村派出所: "戴村镇",
        萧山所前派出所: "所前镇",
        萧山新塘派出所: "新塘街道",
        萧山新街派出所: "新街镇",
        萧山楼塔派出所: "楼塔镇",
        萧山河上派出所: "河上镇",
        萧山浦阳派出所: "浦阳镇",
        萧山瓜沥派出所: "瓜沥镇",
        萧山益农派出所: "益农镇",
        萧山蜀山派出所: "蜀山街道",
        萧山衙前派出所: "衙前镇",
        萧山进化派出所: "进化镇",
        萧山闻堰派出所: "闻堰镇",
        萧山靖江派出所: "靖江街道",
        钱江世纪城派出所: "河庄街道",
      };
      NumberOfCasesAtPoliceStationse.data.results.map((a) => {
        a["派出所"] = a1[a["派出所"]];
        a.name = a["派出所"];
        a.value = a["分派出所案件数量"];
        delete a["派出所"];
        delete a["分派出所案件数量"];
        return a;
      });
      const data = NumberOfCasesAtPoliceStationse.data.results;
      data.sort(function (a, b) {
        return a.value - b.value;
      });
      const optionOne = {
        title: {
          text: "萧山区诈骗案件数量分布图",
          textStyle: {
            color: "white", // 设置标题颜色
          },
          left: "center", // 标题水平居中
          bottom: 0, // 标题距离底部的位置
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (p / km2)",
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },
        visualMap: {
          min: 0,
          max: 50,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "#f05654"],
          },
        },
        series: [
          {
            id: "population",
            type: "map",
            // roam: true,
            map: "HK",
            animationDurationUpdate: 1000,
            universalTransition: true,
            data: data,
            label: {
              show: true,
            },
            itemStyle: {
              // emphasis: {
              //   areaColor: "", // 设置为红色
              // },
            },
          },

          // {
          //   name: "heatmap",
          //   type: "heatmap",
          //   // data: [heatdata[1]],
          //   mpa: "HK",
          //   pointSize: 5,
          //   blurSize: 6,
          // },
        ],
      };
      echarts.registerMap("HK", data1);
      myChart.setOption(optionOne);
      const data2 = deepCopy(data);
      data2.forEach((a) => {
        a.name === a1[paramName] ? (a.itemStyle = { color: "orange" }) : "";
      });
      const barOption = {
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          axisLabel: {
            rotate: 30,
            textStyle: {
              color: "white",
            },
          },
          data: data.map(function (item) {
            return item.name;
          }),
        },
        animationDurationUpdate: 1000,
        series: {
          color: "rgb(19,131,194)",
          type: "bar",
          id: "population",
          data: data2,
          universalTransition: true,
        },
      };
      console.log(type);
      if (type === 1) {
        myChart.setOption(optionOne, true);
      } else {
        myChart.setOption(barOption, true);
      }
      if (isEventBound) {
        myChart.off("click");
        isEventBound = false;
      }
      if (!isEventBound) {
        myChart.on("click", (params) => {
          console.log(type);
          // 获取点击的区域名称
          if (type !== 1) {
            const data3 = deepCopy(data);
            console.log(params.name);
            data3.forEach((a) => {
              a.name === params.name ? (a.itemStyle = { color: "orange" }) : "";
            });
            barOption.series.data = data3;
            myChart.setOption(barOption, true);
          }
          const element2 = document.getElementById("container11");
          element2.style.opacity = "0"; // 将元素透明度设置为0，完全透明
          var regionName = params.name;
          const regionrelate = {
            临浦镇: 1,
            义桥镇: 2,
            党湾镇: 3,
            北干街道: 4,
            南阳街道: 5,
            城厢街道: 6,
            宁围镇: 7,
            萧山经济技术开发区: 8,
            戴村镇: 9,
            所前镇: 10,
            新塘街道: 11,
            新街镇: 12,
            楼塔镇: 13,
            河上镇: 14,
            浦阳镇: 15,
            瓜沥镇: 16,
            益农镇: 17,
            蜀山街道: 18,
            衙前镇: 19,
            进化镇: 20,
            闻堰镇: 21,
            靖江街道: 22,
            河庄街道: 23,
          };
          setTimeout(function () {
            getData(
              createnetwork,
              "container11",
              `graphy/${regionrelate[regionName]}`,
              "2"
            );
          }, 350); // 延迟时间为 2000 毫秒（2 秒）
          setTimeout(function () {
            element2.style.opacity = "100"; // 将元素透明度设置为0，完全透明
          }, 550); // 延迟时间为 2000 毫秒（2 秒）
          // 获取点击的区域名称
          // // 根据点击的区域名称，更新地图的配置yy
          // option.series[0].center = ["90%", "90%"];
          // option.series[0].zoom = 100;
          // 刷新地图
          const element = document.getElementById("container12");
          element.style.opacity = "0";
        }); // 绑定click事件处理程序
        isEventBound = true;
      }
    });
};
getData(createTheimage, "container9", "hangzhou.json");
