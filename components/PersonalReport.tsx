import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const PersonalReport: React.FC = () => {
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<{ pnl: string; rank: string } | null>(null);

  const generateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet) return;

    setLoading(true);
    // Simulate "processing" lag for clunky UX
    setTimeout(() => {
      setLoading(false);
      setReport({
        pnl: "+420,069%",
        rank: "EXECUTIVE VICE TRENCHER"
      });
    }, 2500);
  };

  return (
    <div className="border-4 border-double border-gray-400 p-6 my-8 bg-[#f8f8f8]">
      <h3 className="font-bureaucracy font-bold text-lg mb-4 underline">
        APPENDIX A: PERSONALIZED HOLDER REPORT FILING
      </h3>
      
      {!report ? (
        <form onSubmit={generateReport} className="flex flex-col gap-4">
          <label className="font-document text-sm">
            Please enter wallet address for audit simulation:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="border-2 border-black p-2 font-mono text-sm flex-grow bg-white focus:outline-none focus:ring-0 rounded-none placeholder-gray-500"
              placeholder="Ex: 8xTRENCHAR..."
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-200 border-2 border-b-4 border-r-4 border-black px-6 py-2 font-bureaucracy font-bold text-xs active:border-b-2 active:border-r-2 active:translate-y-0.5 active:translate-x-0.5 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                   <Loader2 className="animate-spin h-3 w-3" /> PROCESSING...
                </div>
              ) : (
                "GENERATE AUDIT"
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="border-2 border-black p-4 bg-white relative">
          <div className="absolute top-2 right-2 border border-black p-1 text-[10px] uppercase font-bold text-red-600 rotate-12">
            HIGHLY CONFIDENTIAL
          </div>
          <div className="font-mono text-sm space-y-2">
            <p><strong>SUBJECT:</strong> {wallet.substring(0, 6)}...{wallet.substring(wallet.length - 4)}</p>
            <p><strong>ESTIMATED TRENCH PNL:</strong> {report.pnl}</p>
            <p><strong>CORPORATE RANK:</strong> {report.rank}</p>
            <p className="text-xs italic mt-4 text-gray-500">
              * Note: This audit is legally non-binding and spiritually heavily binding.
            </p>
          </div>
          <button 
            onClick={() => { setReport(null); setWallet(''); }}
            className="mt-4 text-[10px] underline text-blue-800 hover:text-blue-600 font-bureaucracy"
          >
            [FILE ANOTHER REPORT]
          </button>
        </div>
      )}
    </div>
  );
};