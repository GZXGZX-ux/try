import { getData as getData } from "../getthedata.js";
const createTheimage = function (data, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  const data1 = [];
  data.forEach((item) => {
    //把name的值赋值给新键名
    item.name = item.诈骗案件类别细分;
    item.value = item.数量;
    //然后把旧的键名删除
    delete item.诈骗案件类别细分;
    delete item.数量;
    data1.push(item.value);
  });

  var option;
  option = {
    title: [
      {
        text: "涉网犯罪案件细分图",
        textStyle: {
          color: "white", // 设置标题颜色
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "非涉网犯罪",
          "信用卡诈骗",
          "冒充普通身份诈骗",
          "冒充国家公务人员诈骗",
          "情感诈骗",
          " 诱导投资理财诈骗",
          " 虚假交易诈骗",
          " 涉黄 / 涉赌等非法行为类诈骗",
          "盗窃类",
          "敲诈勒索",
          "其他",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: data1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "RGB(255,255,102)" },
          { offset: 1, color: "rgb(255,165,0)" },
        ]),
      },
    ],
  };
  myChart.setOption(option);
};
getData(createTheimage, "container14", "/BreakdownOfFraudCaseCategories");
