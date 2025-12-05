export interface FinancialMetric {
  metric: string;
  value: string;
  notes: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  label: string;
}

export interface ReportState {
  generated: boolean;
  loading: boolean;
  walletAddress: string;
  fakePnL: string;
  fakeRank: string;
}