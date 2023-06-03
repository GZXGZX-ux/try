import { getData as getData } from "../getthedata.js";
const createTheimage = function (data1, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom);
  const corresponding = {
    0: "无业",
    1: "学生",
    2: "企业员工",
    3: "个体",
    4: "其他职业",
  };
  data1.forEach((item) => {
    //把name的值赋值给新键名
    item.name = corresponding[item.职业类别];
    item.value = item.数量;
    //然后把旧的键名删除
    delete item.职业类别;
    delete item.数量;
  });
  console.log(data1);
  var option;
  option = {
    title: {
      text: "诈骗案件分职业数量图",
      textStyle: {
        color: "white", // 设置标题颜色
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "15%",
      left: "center",
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "70%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent * 2 + "%)";
          },
        },
        data: [
          ...data1,
          {
            // make an record to fill the bottom 50%
            value: data1.reduce((a, b) => a + b.value, 0),
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
};
getData(createTheimage, "container13", "/theJobOfvictim");
