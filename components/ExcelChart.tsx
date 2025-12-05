import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { FAKE_DATA } from '../constants';

export const ExcelChart: React.FC = () => {
  return (
    <div className="w-full border-2 border-gray-400 p-4 bg-white mt-6 mb-6">
      <div className="font-bureaucracy text-xs mb-2 border-b border-gray-400 pb-1 w-full text-center font-bold">
        FIG 3.1: PROJECTED TRENCH YIELD (LOGARITHMIC APPROX)
      </div>
      <div className="h-64 w-full bg-[#e0e0e0] border-l-2 border-t-2 border-gray-600 border-r-white border-b-white p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={FAKE_DATA}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 0" stroke="#808080" />
            <XAxis 
              dataKey="name" 
              tick={{fill: 'black', fontFamily: 'Arial', fontSize: 10}} 
              axisLine={{stroke: 'black'}}
            />
            <YAxis 
              tick={{fill: 'black', fontFamily: 'Arial', fontSize: 10}}
              axisLine={{stroke: 'black'}}
            />
            <Bar dataKey="value" fill="black" isAnimationActive={false}>
                 <LabelList dataKey="value" position="top" style={{ fill: 'black', fontSize: '10px', fontFamily: 'Arial' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-[10px] font-bureaucracy italic text-center mt-2">
        Source: Internal Optimism Dept.
      </div>
    </div>
  );
};