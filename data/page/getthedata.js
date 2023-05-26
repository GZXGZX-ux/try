"use strict";
export const getData = async function (
  createTheimage,
  container,
  thetype,
  version = 1,
  elsesomething = 1,
  paramName
) {
  try {
    const response = await fetch(
      thetype === "hangzhou.json"
        ? `http://127.0.0.1:5000/${thetype}`
        : `http://127.0.0.1:5000/api/v${version}/${thetype}`
    );
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      // console.log(data?.data?.results);
      createTheimage(
        thetype === "hangzhou.json" ? data : data.data.results,
        container,
        elsesomething,
        paramName
      );
    } else {
      console.log("Error:", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};
