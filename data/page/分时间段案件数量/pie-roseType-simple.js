import { getData as getData } from "../getthedata.js";
const createTheimage = function (data, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};
  data.forEach((item) => {
    //把name的值赋值给新键名
    item.name = item.时间段;
    item.value = item.分时间段案件数量;
    //然后把旧的键名删除
    delete item.时间段;
    delete item.分时间段案件数量;
  });
  var option;
  option = {
    title: {
      text: "各时段报案数量",
    },
    legend: {
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        label: {
          show: true,
          formatter: "{b}: {c}",
        },
        radius: [20, 110],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: data,
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(createTheimage, "container5", "NumberOfCasesByTimePeriod");
