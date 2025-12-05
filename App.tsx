import React from 'react';
import { SectionDivider } from './components/SectionDivider';
import { FinancialTable } from './components/FinancialTable';
import { ExcelChart } from './components/ExcelChart';
import { PersonalReport } from './components/PersonalReport';
import { SECTION_TITLES, TEXT_CONTENT } from './constants';
import { Paperclip, Printer, FileText } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#cccccc] py-8 px-2 sm:px-4 flex justify-center selection:bg-gray-400 selection:text-white">
      {/* Main Document Container */}
      <main className="max-w-[210mm] w-full bg-white shadow-2xl min-h-[297mm] p-8 sm:p-12 relative print:shadow-none print:w-full print:max-w-none">
        
        {/* Document Header */}
        <header className="border-b-4 border-black pb-6 mb-8 text-center relative">
          <div className="absolute top-0 left-0 opacity-50">
             <FileText size={48} strokeWidth={1} />
          </div>
          <div className="absolute top-0 right-0 border border-gray-400 p-1">
             <img src="https://i.postimg.cc/630gqBrX/2025-12-06-00-40-52.png" alt="Logo" className="grayscale opacity-80 w-[50px] h-[50px] object-contain" />
          </div>
          
          <h1 className="font-bureaucracy font-black text-2xl sm:text-4xl tracking-tighter mb-2">
            TRENCHAR INC.
          </h1>
          <h2 className="font-document text-lg sm:text-xl font-bold uppercase mb-4">
            Annual Financial Report <br/> Fiscal Year 2025
          </h2>
          <div className="font-bureaucracy text-[10px] text-gray-600 uppercase tracking-widest border-t border-b border-gray-300 py-1 mx-auto max-w-md">
            Securities and Exchange Commission of The Trenches (SECT) Form 10-K
          </div>
        </header>

        {/* Section 1: Exec Summary */}
        <section>
          <SectionDivider title={SECTION_TITLES.EXEC_SUMMARY} />
          <p className="font-document text-justify leading-relaxed mb-4 text-sm sm:text-base">
            {TEXT_CONTENT.EXEC_SUMMARY}
          </p>
        </section>

        {/* Section 2: Company Overview */}
        <section>
          <SectionDivider title={SECTION_TITLES.COMPANY_OVERVIEW} />
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
            <div className="flex-1 text-justify font-document text-sm sm:text-base leading-relaxed">
              {TEXT_CONTENT.COMPANY_OVERVIEW}
              <div className="mt-4 font-bold">Board of Directors:</div>
              <ul className="list-disc pl-5 mt-2 text-sm font-document italic">
                <li>Chad Thundercock (CEO)</li>
                <li>Anonymous Frog (CFO)</li>
                <li>The Algorithm (Director of Vibes)</li>
              </ul>
            </div>
            <div className="w-full sm:w-48 h-32 border border-black p-1 bg-gray-100 flex-shrink-0 overflow-hidden">
               <img 
                 src="https://i.postimg.cc/3NrMFk8f/2025-12-06-00-41-51.png" 
                 alt="Director Dog" 
                 className="w-full h-full object-cover grayscale contrast-125 brightness-90 scale-110"
               />
               <div className="text-[9px] text-center mt-1 font-bureaucracy">FIG 2.A: STRATEGIC PLANNING</div>
            </div>
          </div>
        </section>

        {/* Section 3: Financial Highlights */}
        <section>
          <SectionDivider title={SECTION_TITLES.FINANCIAL_HIGHLIGHTS} />
          <p className="font-document mb-2">The following table summarizes manipulated financial data for FY 2025:</p>
          <FinancialTable />
          <ExcelChart />
        </section>

        {/* Section 4: Market Analysis */}
        <section>
          <SectionDivider title={SECTION_TITLES.MARKET_ANALYSIS} />
           <div className="flex flex-col-reverse sm:flex-row gap-6 mb-6">
            <div className="w-full sm:w-40 h-40 border border-black p-1 bg-gray-100 flex-shrink-0 self-center sm:self-start overflow-hidden">
               <img 
                 src="https://i.postimg.cc/Gh2wBTSH/2025-12-06-00-41-34.png" 
                 alt="Market Sentiment" 
                 className="w-full h-full object-cover grayscale contrast-125 brightness-100"
               />
               <div className="text-[9px] text-center mt-1 font-bureaucracy">FIG 4.1: MARKET SENTIMENT</div>
            </div>
            <div className="flex-1 text-justify font-document text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {TEXT_CONTENT.MARKET_ANALYSIS}
            </div>
          </div>
        </section>

        {/* Section 5 & 6 */}
        <section>
          <SectionDivider title={SECTION_TITLES.MANAGEMENT_DISCUSSION} />
          <p className="font-document text-justify leading-relaxed mb-4 text-sm sm:text-base">
            {TEXT_CONTENT.MANAGEMENT_DISCUSSION}
          </p>
        </section>

        <section>
          <SectionDivider title={SECTION_TITLES.AUDITOR_REPORT} />
          <div className="border border-dotted border-gray-600 p-4 bg-gray-50 mb-6">
            <p className="font-document italic text-sm text-center">
              "{TEXT_CONTENT.AUDITOR_REPORT}"
            </p>
            <div className="text-right mt-2 font-script text-lg font-bold pr-8 font-serif">
              - Signed, The Trenches
            </div>
          </div>
        </section>

        {/* Personal Report Generator */}
        <PersonalReport />

        {/* Section 7: Call to Action */}
        <section id="submit-section" className="mt-12 mb-8 text-center bg-[#e8e8e8] p-8 border-t-2 border-b-2 border-black">
          <SectionDivider title={SECTION_TITLES.CALL_TO_ACTION} />
          <p className="font-document mb-6 text-lg">
            To participate in this fiscal absurdity, submit your investment via the pump.fun platform immediately.
          </p>
          
          <a 
            href="https://pump.fun/board" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#cc0000] text-white font-bureaucracy font-bold text-2xl px-12 py-4 border-4 border-double border-[#660000] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all uppercase tracking-widest"
          >
            SUBMIT FORM 10-K
          </a>
          <div className="mt-2 text-xs font-mono text-gray-500">
            * By clicking submit, you acknowledge this is financial satire.
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-4 border-black text-center">
           <div className="flex justify-center items-center gap-2 mb-2">
             <Printer size={16} />
             <span className="font-mono text-xs">PAGE 1 OF 1</span>
           </div>
           <div className="text-xs font-bureaucracy text-gray-500 uppercase tracking-[0.2em]">
             Confidential - For Internal Use Only - Trenchar Inc.
           </div>
        </footer>

        {/* Sticky decorative element */}
        <div className="fixed bottom-4 right-4 print:hidden">
          <div className="bg-yellow-100 border border-yellow-300 p-2 shadow-lg transform -rotate-2 w-32 text-center text-xs font-handwriting font-serif text-blue-900">
            <Paperclip className="inline w-3 h-3 mb-1" /> <br/>
            File by EOD!! <br/>
            - Management
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;