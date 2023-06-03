import { getData as getData } from "../getthedata.js";
const createTheimage = function (data1, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom);
  const data2 = {};
  function dataFormatter(obj) {
    // prettier-ignore
    var pList = ["刑事案件","治安案件","纠纷"]
    var temp;
    for (const year of Object.keys(obj)) {
      var max = 0;
      var sum = 0;
      temp = obj[year];
      for (var i = 0, l = temp.length; i < l; i++) {
        max = Math.max(max, temp[i]);
        sum += temp[i];
        obj[year][i] = {
          name: pList[i],
          value: temp[i],
        };
      }
      obj[year + "max"] = max;
      obj[year + "sum"] = sum;
    }
    return obj;
  }
  data1.forEach((item) => {
    data2[item["时间"]] = [
      Number(item["刑事案件"]),
      Number(item["治安案件"]),
      Number(item["纠纷"]),
    ];
  });
  const data3 = Object.keys(data2); //时间序列
  const dataMap = dataFormatter(data2);
  const options = [];
  for (const i of data3) {
    options.push({
      title: {
        text: `${i}萧山区三类案件分布图`,
        textStyle: {
          color: "white", // 设置标题颜色,
        },
      },
      series: [
        {
          data: dataMap[i],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#dce769" },
            { offset: 1, color: "#69c2e3" },
          ]),
        },
        { data: dataMap[i] },
        { itemstyle: { color: "#FFC600" } },
      ],
    });
  }
  console.log(options);
  const option = {
    baseOption: {
      timeline: {
        axisType: "category",
        // realtime: false,
        // loop: false,
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 1000,
        // controlStyle: {
        //     position: 'left'
        // },
        data: data3,
        label: {
          formatter: function (s) {
            return new Date(s).getDate();
          },
        },
      },
      title: {
        subtext: "数据来萧山市公安分局",
        textStyle: {
          color: "white", // 设置标题颜色
        },
      },
      tooltip: {},
      legend: {
        bottom: "15%",
        data: ["刑事案件", "治安案件", "纠纷"],
      },
      calculable: true,
      grid: {
        top: 80,
        bottom: 100,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              formatter: function (params) {
                return params.value.replace("\n", "");
              },
            },
          },
        },
      },
      xAxis: [
        {
          type: "category",
          axisLabel: { interval: 0 },
          data: ["刑事案件", "治安案件", "纠纷"],
          splitLine: { show: false },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "件",
        },
      ],
      series: [
        { name: "不同案件类型占比", type: "bar" },
        {
          name: "不同案件类型占比",
          type: "pie",
          center: ["75%", "35%"],
          radius: "28%",
          z: 100,
          color: ["#90EE90", "#FFC600", "#e75a5a"],
        },
      ],
    },
    options: options,
  };
  myChart.setOption(option);
};
getData(createTheimage, "container7", "TimeTrendOfEachPoliceSituationCategory");
