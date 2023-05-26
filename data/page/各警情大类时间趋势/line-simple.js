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
    },
    legend: {
      data: ["刑事", "治安", "纠纷"],
    },
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
    },
    series: [
      {
        name: "刑事",
        type: "line",
        data: data
          .filter((item) => item["最终反馈警情类别"] === "刑事案件")
          .map((item) => item["数量"]),
        color: "#27727B",
      },
      {
        name: "治安",
        type: "bar",
        data: [
          1,
          1,
          null,
          1,
          null,
          null,
          1,
          null,
          2,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          1,
          2,
          null,
          1,
          null,
          1,
          null,
          null,
          1,
          2,
          1,
          null,
          1,
          null,
        ],
        color: "#C08974",
      },
      {
        name: "纠纷",
        type: "bar",
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          1,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        color: "#F0DAB0",
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(createTheimage, "container7", "TimeTrendOfEachPoliceSituationCategory");
