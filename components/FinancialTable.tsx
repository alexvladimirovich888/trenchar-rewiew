import React from 'react';
import { FINANCIAL_TABLE_DATA } from '../constants';

export const FinancialTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto my-6 border-2 border-black">
      <table className="min-w-full text-left font-bureaucracy text-sm">
        <thead className="bg-[#cccccc] border-b-2 border-black">
          <tr>
            <th className="px-4 py-2 border-r border-black font-bold uppercase w-1/4">Metric</th>
            <th className="px-4 py-2 border-r border-black font-bold uppercase w-1/3">Value</th>
            <th className="px-4 py-2 font-bold uppercase">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {FINANCIAL_TABLE_DATA.map((row, index) => (
            <tr key={index} className="border-b border-black last:border-0">
              <td className="px-4 py-2 border-r border-black font-bold">{row.metric}</td>
              <td className="px-4 py-2 border-r border-black font-mono">{row.value}</td>
              <td className="px-4 py-2 italic text-xs">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};