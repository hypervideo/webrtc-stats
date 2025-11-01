import { StatsObject, TrackReport, ParseStatsOptions } from './types/index';
export declare function computeRate(newReport: TrackReport, oldReport: TrackReport, statName: string): number;
export declare function computeBitrate(newReport: TrackReport, oldReport: TrackReport, statName: string): number;
export declare function map2obj(stats: any): any;
export declare function parseStats(stats: any, previousStats: StatsObject | null, options?: ParseStatsOptions | null): StatsObject;
//# sourceMappingURL=utils.d.ts.map