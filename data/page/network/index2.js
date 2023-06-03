import { getData as getData } from "../getthedata.js";
import { createTheimage as createnewimageonmap } from "../杭州地图/hangzhoumap.js";
let isEventBound = false;
let i10 = 0;
const createTheimage2 = function (option, container) {
  var dom = document.getElementById(`${container}`);
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
  window.addEventListener("resize", myChart.resize);
  setTimeout(function () {
    const element2 = document.getElementById("container12");
    element2.style.opacity = "100";
  }, 150); // 延迟时间为 2000 毫秒（2 秒）
};
export const createTheimage = function (data, container) {
  // 初始化图表
  const chart = echarts.init(document.getElementById(`${container}`));
  // 定义节点
  const categories = [{ name: "对象" }, { name: "属性" }, { name: "实例" }];
  const nodes = data.node;
  // 定义边
  const links = data.eage;
  nodes.forEach((item) => {
    //把name的值赋值给新键名
    item.name = item.label;
    //然后把旧的键名删除
    delete item.label;
  });
  // 定义图表配置项
  const option = {
    color: ["rgb(32, 149, 191)", "rgb(125, 162, 206)", "rgb(164, 203,236)"],
    series: [
      {
        edgeSymbol: ["1", "2", "3"],
        type: "graph",
        layout: "force",
        data: nodes,
        links: links,
        // roam: true,
        label: {
          color: "white",
          show: true,
        },
        force: {
          repulsion: 125,
        },
        draggable: true, // 设置节点可拖拽
        categories: categories,
        animation: true, // 启用动画效果
        animationDuration: 1000, // 动画持续时间
        animationEasing: "quadraticOut", // 动画缓动函数
        lineStyle: {
          color: "#ccc", // 连线颜色
          width: 2, // 连线宽度
          curveness: 0.1, // 连线曲度
          opacity: 0.8, // 连线透明度
        },
      },
    ],
  };
  chart.setOption(option);
  let lastName = "hello";
  if (isEventBound) {
    chart.off("click");
    isEventBound = false;
  }
  if (!isEventBound) {
    chart.on("click", (params) => {
      if (params.data.category === 0) {
        getData(
          createnewimageonmap,
          "container9",
          "hangzhou.json",
          2,
          i10 % 2,
          params.name
        );
        i10 = i10 + 1;
      } else {
        if (lastName !== params.name || lastName === "hello") {
          const OptionTwo = {
            title: {
              text: "Pie Chart", // 标题文本
              left: "center", // 标题位置
              textStyle: {
                fontSize: 18, // 标题字体大小
                fontWeight: "bold", // 标题字体粗细
              },
              textStyle: {
                color: "white", // 设置标题颜色
              },
            },
            tooltip: {
              trigger: "item",
            },
            legend: {
              top: "auto", // 取消之前的top属性
              bottom: "5%", // 设置图例标签位于下方
              left: "center",
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: "#fff",
                  borderWidth: 2,
                },
                label: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: "bold",
                  },
                },
                labelLine: {
                  show: false,
                },
                data: data,
              },
            ],
          };
          const optionControl = function (data, name, option = OptionTwo) {
            option.series[0].data = data;
            option.series[0].name = name;
            option.title.text = name;
            return option;
          };
          if (params.data.category === 1) {
            const duiying = links
              .filter((a) => a.source === params.data.id.toString())
              .map((a) => a.target);
            const inputArray = nodes
              .filter((a) => duiying.includes(a.id.toString()))
              .map((a) => a.name);
            const outputArray = [];
            for (let i = 0; i < inputArray.length; i++) {
              const element = inputArray[i];
              const [name, value] = element.split(" ");
              outputArray.push({ name, value: parseInt(value) });
            }
            // console.log(outputArray);
            const option2 = optionControl(outputArray, params.data.name);
            createTheimage2(option2, "container12");
          }
        } else {
          const element = document.getElementById("container12");
          element.style.opacity = "0"; // 将元素透明度设置为0，完全透明
        }
        lastName = params.name;
      }
    });
    isEventBound = true;
  }
};

getData(createTheimage, "container11", "graphy/1", "2");
