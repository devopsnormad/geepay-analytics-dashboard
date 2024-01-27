import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

const VictoryBarChart = ({ data }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const targetMonth = "Jun";

  const getBarColor = (month) => {
    return month === targetMonth ? "#34CAA5" : "rgba(52, 202, 165, 0.5)";
  };

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      padding={{ top: 20, bottom: 80, left: 70, right: 30 }}
      width={600}
      height={300}
      
    >
      <VictoryAxis
        
        tickValues={months.map((_, index) => index + 1)}
        tickFormat={months}
        style={{
          grid: { stroke: 'none', },
          tickLabels: {
            fill: 'var(--Neutral-600, #525252)',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '0.875rem',
          },
          
          
        }}
        
      />
      <VictoryAxis
        dependentAxis
        tickValues={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
        tickFormat={(tick) => `${tick}`}
        style={{
          grid: { fill: 'gray', strokeWidth: 0.5,  strokeDasharray: 'none',  },
          
          tickLabels: {
            fill: 'var(--Neutral-600, #525252)',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '0.875rem',
          },
        }}
      />
      <VictoryBar
        
        data={data.map((value, index) => ({ x: index + 1, y: value }))}
        x="x"
        y="y"
        barWidth={30}
        cornerRadius={{
          topLeft: 15,
          topRight: 15,
          
        }}
       
        labels={({ datum }) => ""}
        style={{
          data: {
            fill: ({ datum }) => getBarColor(months[datum.x - 1]),
            borderRadius: 5,
          },
          
        }}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill: "#090C2C", padding: 8, borderRadius: 5 }}
            style={{ fill: "white" }} 
            text={({ datum }) => `$${datum.y}`}
          />
          
        }
       
      />
    </VictoryChart>
  );
};

export default VictoryBarChart;
