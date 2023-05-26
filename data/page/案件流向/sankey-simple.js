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
    var subCategory = item["报警类别（警情类别）"];
    var value = item["数量"];
    if (!processedData.nodes.includes(category)) {
      processedData.nodes.push(category);
    }
    if (!processedData.nodes.includes(subCategory)) {
      processedData.nodes.push(subCategory);
    }
    var linkObj = { source: category, target: subCategory + " ", value: value };
    processedData.links.push(linkObj);
  });

  option = {
    series: {
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
      data: [
        { name: "刑事案件" },
        { name: "刑事案件 " },
        { name: "其它报警" },
        { name: "其它报警 " },
        { name: "治安案件" },
        { name: "治安案件 " },
        { name: "举报" },
        { name: "举报 " },
        { name: "纠纷" },
      ],
      links: [
        { source: "刑事案件", target: "刑事案件 ", value: 177 },
        { source: "刑事案件", target: "其它报警 ", value: 21 },
        { source: "刑事案件", target: "治安案件 ", value: 90 },
        { source: "刑事案件", target: "举报 ", value: 2 },
        { source: "治安案件", target: "治安案件 ", value: 9 },
        { source: "治安案件", target: "刑事案件 ", value: 2 },
        { source: "纠纷", target: "刑事案件 ", value: 1 },
      ],
      label: {
        position: "top",
      },
      lineStyle: {
        color: "source",
        curveness: 0.5,
      },
    },
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
};
getData(
  createTheimage,
  "container1",
  "AlarmTypeAndFinalFeedbackTypeFlowDirection"
);
