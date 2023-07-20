import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "@mui/x-charts";

import "./Graph.css";
const data = [
    { data: [10, 12, 15, 20, 25], stack: 'A', label: 'series A1' },
    { data: [20, 24, 30, 56, 62], stack: 'A', label: 'series A1' },
    { data: [60, 65, 70, 105, 110], stack: 'A', label: 'series A2' },
  ];
  
const Graph = () => {
  return (
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}
    >
      <p>GRAPH</p>
    </div>
  );
};

export default Graph;
