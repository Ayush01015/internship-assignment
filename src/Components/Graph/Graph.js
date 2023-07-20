import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack } from 'victory';
/**
    Still working in Graph (pending)
 */
import GraphIMG from "../../assets/img/graph"
import "./Graph.css"
const exponentialData = (startValue, factor, count) => {
  const data = [];
  let currentValue = startValue;
  for (let i = 0; i < count; i++) {
    data.push({ x: `Group ${i + 1}`, y: currentValue });
    currentValue *= factor;
  }
  return data;
};

const Graph = () => {
  const data = exponentialData(1, 2, 5); // Start with 1, multiply by 2, and get 5 data points

  // Define the colors for the gradient
  const colors = ['#00FF00', '#FFFF00', '#FF0000'];

  // Create a function to calculate the gradient color based on the y-value
  const getGradientColor = (datum) => {
    const yValue = datum.y;
    const max = Math.max(...data.map((d) => d.y));
    const min = Math.min(...data.map((d) => d.y));
    const index = Math.floor(((yValue - min) / (max - min)) * (colors.length - 1));
    return colors[index];
  };

  return (
    <div className='graph-plot'>
    <img src={GraphIMG} alt=''/>
    {/* <VictoryChart domainPadding={20}>
      <VictoryAxis tickFormat={(t) => `Group ${t}`} />
      <VictoryAxis dependentAxis />
      <VictoryStack colorScale={colors}>
        {data.map((entry, index) => (
          <VictoryBar key={index} data={[entry]} x="x" y="y" />
        ))}
      </VictoryStack>
    </VictoryChart> */}
    </div>
  );
};

export default Graph;

