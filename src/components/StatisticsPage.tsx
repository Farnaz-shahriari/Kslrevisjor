import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { MaterialCheckbox } from './ui/material-checkbox';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface StatisticsPageProps {
  onBack?: () => void;
}

type TimeScope = '5-ar' | 'ar' | 'maned';

interface KPICardData {
  id: string;
  title: string;
  value: string;
  supporting: string;
  delta: string;
  isPositive: boolean;
  sparklineData?: number[];
}

interface ChartDataPoint {
  year: string;
  you: number;
  system: number;
}

export function StatisticsPage({ onBack }: StatisticsPageProps) {
  const [timeScope, setTimeScope] = useState<TimeScope>('5-ar');
  const [showComparison, setShowComparison] = useState(true);

  // KPI Cards Data
  const kpiCards: KPICardData[] = [
    {
      id: 'assigned',
      title: 'Tildelte revisjoner',
      value: '48 av 71',
      supporting: '68 %',
      delta: '+6 % vs. systemet',
      isPositive: true,
      sparklineData: [40, 42, 45, 46, 48]
    },
    {
      id: 'completed',
      title: 'Gjennomførte revisjoner',
      value: '39 av 48',
      supporting: '81 %',
      delta: '+9 % vs. systemet',
      isPositive: true,
      sparklineData: [32, 34, 37, 38, 39]
    },
    {
      id: 'reports',
      title: 'Rapporter lukket',
      value: '39 av 39',
      supporting: '100 %',
      delta: '= systemet',
      isPositive: true,
      sparklineData: [32, 34, 37, 38, 39]
    },
    {
      id: 'days',
      title: 'Snitt til låsing',
      value: '2,1 dager',
      supporting: '',
      delta: '−0,6 dager vs. systemet',
      isPositive: true,
      sparklineData: [2.8, 2.6, 2.4, 2.2, 2.1]
    },
    {
      id: 'deviations',
      title: 'Avvik per revisjon',
      value: '0,92',
      supporting: '',
      delta: '−0,18 vs. systemet',
      isPositive: true,
      sparklineData: [1.4, 1.2, 1.1, 1.0, 0.92]
    },
    {
      id: 'checklist',
      title: 'Sjekklistepunkt brukt',
      value: '38 %',
      supporting: '',
      delta: '+12 % vs. systemet',
      isPositive: true,
      sparklineData: [22, 26, 30, 35, 38]
    }
  ];

  // Chart data for detailed trends
  const completedRevisionsData: ChartDataPoint[] = [
    { year: '2021', you: 5, system: 6 },
    { year: '2022', you: 6, system: 7 },
    { year: '2023', you: 7, system: 7 },
    { year: '2024', you: 10, system: 8 },
    { year: '2025', you: 11, system: 9 }
  ];

  const daysToLockData: ChartDataPoint[] = [
    { year: '2021', you: 2.8, system: 3.1 },
    { year: '2022', you: 2.6, system: 3.0 },
    { year: '2023', you: 2.4, system: 2.9 },
    { year: '2024', you: 2.2, system: 2.8 },
    { year: '2025', you: 2.1, system: 2.7 }
  ];

  const overDeadlineData: ChartDataPoint[] = [
    { year: '2021', you: 1, system: 3 },
    { year: '2022', you: 1, system: 2 },
    { year: '2023', you: 0, system: 2 },
    { year: '2024', you: 0, system: 1 },
    { year: '2025', you: 0, system: 1 }
  ];

  const deviationsPerRevisionData: ChartDataPoint[] = [
    { year: '2021', you: 1.4, system: 1.6 },
    { year: '2022', you: 1.2, system: 1.5 },
    { year: '2023', you: 1.1, system: 1.4 },
    { year: '2024', you: 1.0, system: 1.3 },
    { year: '2025', you: 0.9, system: 1.2 }
  ];

  const checklistUsageData: ChartDataPoint[] = [
    { year: '2021', you: 22, system: 18 },
    { year: '2022', you: 26, system: 20 },
    { year: '2023', you: 30, system: 22 },
    { year: '2024', you: 35, system: 23 },
    { year: '2025', you: 38, system: 25 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface-container-low border border-border rounded-lg p-3 shadow-lg">
          <p className="label-medium text-foreground mb-2">{label}</p>
          <div className="flex flex-col gap-1">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className="body-medium text-foreground">
                  {entry.name === 'you' ? 'Du' : 'Gjennomsnitt'}: {entry.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-background flex flex-col w-full h-full overflow-y-auto">
      <div className="w-full max-w-[1680px] mx-auto">
        {/* Header with Back Button */}
        <div className="px-6 pt-6 pb-4 border-b border-border">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            Tilbake til forsiden
          </button>

          {/* Page Title and Description */}
          <div className="mb-6">
            <h1 className="headline-medium text-foreground mb-2">
              Statistikk og utvikling over tid
            </h1>
            <p className="body-medium text-muted-foreground">
              Sammenligning av dine revisjoner mot samlet nivå i systemet
            </p>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Time Scope Selector - Segmented Control */}
            <div className="flex items-center bg-surface-container-low rounded-full p-1">
              <button
                onClick={() => setTimeScope('5-ar')}
                className={`px-6 h-10 rounded-full transition-colors label-medium ${
                  timeScope === '5-ar'
                    ? 'bg-secondary-container text-secondary-container-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                5 år
              </button>
              <button
                onClick={() => setTimeScope('ar')}
                className={`px-6 h-10 rounded-full transition-colors label-medium ${
                  timeScope === 'ar'
                    ? 'bg-secondary-container text-secondary-container-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                År
              </button>
              <button
                onClick={() => setTimeScope('maned')}
                className={`px-6 h-10 rounded-full transition-colors label-medium ${
                  timeScope === 'maned'
                    ? 'bg-secondary-container text-secondary-container-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                Måned
              </button>
            </div>

            {/* Comparison Toggle */}
            <div className="flex items-center gap-2">
              <MaterialCheckbox
                checked={showComparison}
                onChange={setShowComparison}
                label="Vis sammenligning med andre revisorer"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6">
          {/* Summary KPI Cards */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1">
            {kpiCards.map((kpi) => (
              <div
                key={kpi.id}
                className="bg-surface-container-low rounded-2xl border border-border p-4"
              >
                <p className="label-large text-muted-foreground mb-2">
                  {kpi.title}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="headline-medium text-foreground">
                    {kpi.value}
                  </p>
                  {kpi.supporting && (
                    <p className="body-medium text-muted-foreground">
                      {kpi.supporting}
                    </p>
                  )}
                </div>
                <p className={`label-large ${
                  kpi.isPositive ? 'text-primary' : 'text-error'
                }`}>
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Trends Section */}
          <div className="mb-6">
            <h2 className="title-large text-foreground mb-2">
              Utvikling over tid
            </h2>
            <p className="body-medium text-muted-foreground mb-8">
              Grønn linje viser dine revisjoner. Grå linje viser samlet gjennomsnitt.
            </p>

            {/* Chart 1 - Gjennomførte revisjoner */}
            <div className="mb-12">
              <h3 className="title-medium text-foreground mb-4">
                Gjennomførte revisjoner
              </h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={completedRevisionsData}>
                    <defs>
                      <linearGradient id="colorYou" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSystem" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <YAxis 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="you" 
                      stroke="var(--primary)" 
                      strokeWidth={3}
                      fill="url(#colorYou)"
                      name="you"
                    />
                    {showComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="system" 
                        stroke="var(--muted-foreground)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#colorSystem)"
                        name="system"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2 - Snitt tid til låsing */}
            <div className="mb-12">
              <h3 className="title-medium text-foreground mb-2">
                Snitt dager til låsing
              </h3>
              <p className="body-small text-muted-foreground mb-4">
                Lavere verdi betyr raskere lukking av revisjon
              </p>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={daysToLockData}>
                    <defs>
                      <linearGradient id="colorYou2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSystem2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <YAxis 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="you" 
                      stroke="var(--primary)" 
                      strokeWidth={3}
                      fill="url(#colorYou2)"
                      name="you"
                    />
                    {showComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="system" 
                        stroke="var(--muted-foreground)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#colorSystem2)"
                        name="system"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 3 - Over frist */}
            <div className="mb-12">
              <h3 className="title-medium text-foreground mb-4">
                Antall revisjoner over frist
              </h3>
              <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-primary-container rounded-lg">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
                <p className="body-medium text-primary-container-foreground">
                  Ingen revisjoner over frist de siste 3 årene
                </p>
              </div>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={overDeadlineData}>
                    <defs>
                      <linearGradient id="colorYou3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSystem3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <YAxis 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="you" 
                      stroke="var(--primary)" 
                      strokeWidth={3}
                      fill="url(#colorYou3)"
                      name="you"
                    />
                    {showComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="system" 
                        stroke="var(--muted-foreground)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#colorSystem3)"
                        name="system"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 4 - Avvik per revisjon */}
            <div className="mb-12">
              <h3 className="title-medium text-foreground mb-2">
                Antall avvik per revisjon
              </h3>
              <p className="body-small text-muted-foreground mb-4">
                Basert på eksterne revisjoner
              </p>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={deviationsPerRevisionData}>
                    <defs>
                      <linearGradient id="colorYou4" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSystem4" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <YAxis 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="you" 
                      stroke="var(--primary)" 
                      strokeWidth={3}
                      fill="url(#colorYou4)"
                      name="you"
                    />
                    {showComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="system" 
                        stroke="var(--muted-foreground)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#colorSystem4)"
                        name="system"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 5 - Sjekklistepunkt brukt */}
            <div className="mb-12">
              <h3 className="title-medium text-foreground mb-2">
                Sjekklistepunkt brukt
              </h3>
              <p className="body-small text-muted-foreground mb-4">
                Andel sjekkpunkter brukt per revisjon
              </p>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={checklistUsageData}>
                    <defs>
                      <linearGradient id="colorYou5" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSystem5" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <YAxis 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 14 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="you" 
                      stroke="var(--primary)" 
                      strokeWidth={3}
                      fill="url(#colorYou5)"
                      name="you"
                    />
                    {showComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="system" 
                        stroke="var(--muted-foreground)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#colorSystem5)"
                        name="system"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}