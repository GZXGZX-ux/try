import { getData as getData } from "../getthedata.js";
const createTheimage = function (data, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};

  var option;

  option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "left",
      text: "各天报案数趋势",
      textStyle: {
        color: "white", // 设置标题颜色
      },
    },
    // toolbox: {
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: "none",
    //     },
    //     restore: {},
    //     saveAsImage: {},
    //   },
    // },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2019-07-01",
        "2019-07-02",
        "2019-07-03",
        "2019-07-04",
        "2019-07-05",
        "2019-07-06",
        "2019-07-07",
        "2019-07-08",
        "2019-07-09",
        "2019-07-10",
        "2019-07-11",
        "2019-07-12",
        "2019-07-13",
        "2019-07-14",
        "2019-07-15",
        "2019-07-16",
        "2019-07-17",
        "2019-07-18",
        "2019-07-19",
        "2019-07-20",
        "2019-07-21",
        "2019-07-22",
        "2019-07-23",
        "2019-07-24",
        "2019-07-25",
        "2019-07-26",
        "2019-07-27",
        "2019-07-28",
        "2019-07-29",
        "2019-07-30",
        "2019-07-31",
      ],
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 158, 68)",
            },
            {
              offset: 1,
              color: "rgb(255, 70, 131)",
            },
          ]),
        },
        data: data.map((item) => item["案件数量"]),
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(createTheimage, "container8", "TrendOfDailyAlarmCases");
