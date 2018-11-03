import { TimeFrame } from './TimeFrame';
import { ReportAmount } from './ReportAmount';

export interface ReportRow extends TimeFrame {
    reportType: string;
    amounts: ReportAmount[];
    rowEntityId: string;
}
