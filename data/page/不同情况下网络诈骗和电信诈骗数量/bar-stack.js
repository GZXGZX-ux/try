import { getData as getData } from "../getthedata.js";
const createTheimage = function (data1, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};
  var option;
  option = {
    title: {
      textAlign: "auto",
      text: "不同情况下网络诈骗和电信诈骗数量",
    },
    tooltip: {},
    legend: {
      bottom: 0,
      data: ["网络诈骗", "电信诈骗"],
    },
    xAxis: {
      data: ["网络", "室外", "室内"],
    },
    yAxis: {},
    series: [
      {
        name: "网络诈骗",
        type: "bar",
        stack: "总量",
        data: data1
          .filter((item) => item["案件细类名称"] === "网络诈骗")
          .map((item) => item["数量"]),
      },
      {
        name: "电信诈骗",
        type: "bar",
        stack: "总量",
        data: data1
          .filter((item) => item["案件细类名称"] === "电信诈骗")
          .map((item) => item["数量"]),
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(
  createTheimage,
  "container2",
  "DistributionOfVenuesForMajorTypesOfCases"
);
