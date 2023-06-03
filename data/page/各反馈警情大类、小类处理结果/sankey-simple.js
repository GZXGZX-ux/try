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
  // 对数据进行预处理
  var processedData = {
    nodes: [],
    links: [],
  };
  data.forEach(function (item) {
    var category = item["最终反馈警情类别"];
    var subCategory = item["案件细类名称"];
    var value = item["数量"];
    if (!processedData.nodes.includes(category)) {
      processedData.nodes.push(category);
    }
    if (!processedData.nodes.includes(subCategory)) {
      processedData.nodes.push(subCategory);
    }
    var linkObj = { source: category, target: subCategory, value: value };
    processedData.links.push(linkObj);
  });

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "桑基图",
      textStyle: {
        color: "white", // 设置标题颜色
      },
    },
    tooltip: {},
    series: [
      {
        type: "sankey",
        layout: "none",
        orient: "vertical",
        emphasis: {
          focus: "adjacency",
        },
        data: processedData.nodes.map(function (node) {
          return {
            name: node,
          };
        }),
        links: processedData.links.map(function (link) {
          return {
            source: link.source,
            target: link.target,
            value: link.value,
          };
        }),
        label: {
          position: "top",
        },
        lineStyle: {
          color: "source",
          curveness: 0.5,
        },
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(createTheimage, "container6", "MajorAndMinorCategor");
