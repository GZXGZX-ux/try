import { getData as getData } from "../getthedata.js";
const createTheimage = function (data, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};

  var option;

  var data = data;

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "各派出所案件数量",
    },
    tooltip: {},
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}起",
      },
    },
    yAxis: {
      type: "category",
      data: data.map(function (item) {
        return item["派出所"];
      }),
    },
    series: [
      {
        name: "分派出所案件数量",
        type: "bar",
        data: data.map(function (item) {
          return item["分派出所案件数量"];
        }),
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(createTheimage, "container10", "NumberOfCasesAtPoliceStations");
