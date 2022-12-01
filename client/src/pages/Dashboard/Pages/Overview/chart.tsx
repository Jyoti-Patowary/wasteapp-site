import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  //   ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
} from "recharts";

export const Chart = (props) => {
  const [cData, setCData] = useState(props.data);
  const [orderData, setOrderData] = useState(props.dataTicket);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    setCData(props.data);
    setOrderData(props.dataTicket);
  }, props);

  useEffect(() => {
    const data = [
      { name: "Customers", pv: props.data.length },
      { name: "Workers", pv: props.data.length },
      { name: "Manuh", pv: props.data.length },
    ];
    setChartData(data);
  }, [props.data]);

  return (
    <div style={{ width: "100%", height: 580 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 60,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {console.log("ass", cData)}
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
