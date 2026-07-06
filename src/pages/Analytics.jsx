import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Analytics() {
  const [animate, setAnimate] = useState(false);
  const { user } = useAuth();

  // Filters state
  const [timeframe, setTimeframe] = useState('Last 3 Months');
  const [roleType, setRoleType] = useState('All Role Types');
  const [activeMetric, setActiveMetric] = useState('atsScore'); // 'atsScore' | 'interviewRate' | 'applicationsSent' | 'timeToOffer'
  const [showAllTips, setShowAllTips] = useState(false);

  // Tooltip tracking state for SVG trend chart
  const [hoveredPoint, setHoveredPoint] = useState(null); // { x, y, value, label }

  useEffect(() => {
    // Trigger animations slightly after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic values generator based on filters
  const getFilteredData = () => {
    // Base multipliers
    let tfMultiplier = 1.0;
    if (timeframe === 'This Month') tfMultiplier = 0.35;
    else if (timeframe === 'Year to Date') tfMultiplier = 3.2;
    else if (timeframe === 'All Time') tfMultiplier = 5.8;

    let roleMultiplier = 1.0;
    if (roleType === 'Full-time') roleMultiplier = 0.65;
    else if (roleType === 'Contract') roleMultiplier = 0.15;
    else if (roleType === 'Remote') roleMultiplier = 0.75;

    // 1. Avg ATS Score calculation (higher for full-time, stable over time)
    let atsBase = 84;
    if (roleType === 'Full-time') atsBase += 2;
    else if (roleType === 'Contract') atsBase -= 4;
    else if (roleType === 'Remote') atsBase += 1;

    if (timeframe === 'This Month') atsBase += 1;
    else if (timeframe === 'Year to Date') atsBase -= 2;
    else if (timeframe === 'All Time') atsBase -= 4;

    const atsScore = {
      value: Math.min(100, Math.max(0, Math.round(atsBase))),
      label: timeframe === 'This Month' ? '+2% vs last month' : '+12% vs last period'
    };

    // 2. Interview Rate (percentages)
    let interviewBase = 18.5;
    if (roleType === 'Full-time') interviewBase = 21.2;
    else if (roleType === 'Contract') interviewBase = 12.8;
    else if (roleType === 'Remote') interviewBase = 19.4;

    if (timeframe === 'This Month') interviewBase += 1.2;
    else if (timeframe === 'Year to Date') interviewBase -= 1.8;
    else if (timeframe === 'All Time') interviewBase -= 3.1;

    const interviewRate = {
      value: parseFloat(Math.max(1, interviewBase).toFixed(1)),
      label: timeframe === 'This Month' ? '+1.5% vs last month' : '+2.4% vs last period'
    };

    // 3. Applications Sent
    const baseApps = 42;
    const applicationsSent = {
      value: Math.round(baseApps * tfMultiplier * roleMultiplier),
      label: timeframe === 'This Month' ? '-5% vs last month' : '+15% vs last period'
    };

    // 4. Time-to-Offer (Days)
    let timeBase = 34;
    if (roleType === 'Full-time') timeBase = 42;
    else if (roleType === 'Contract') timeBase = 18;
    else if (roleType === 'Remote') timeBase = 38;

    if (timeframe === 'This Month') timeBase -= 2;
    else if (timeframe === 'Year to Date') timeBase += 3;
    else if (timeframe === 'All Time') timeBase += 6;

    const timeToOffer = {
      value: Math.round(timeBase),
      label: 'Stable performance'
    };

    // 5. Success Funnel Data
    const applied = Math.round(156 * tfMultiplier * roleMultiplier);
    const screened = Math.round(applied * 0.65);
    const interview = Math.round(screened * 0.28);
    const offers = Math.max(1, Math.round(interview * 0.14));

    // 6. Trend data points for the line chart (6 intervals)
    let trendPoints = [];
    let trendLabels = [];

    if (timeframe === 'This Month') {
      trendLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
    } else if (timeframe === 'Last 3 Months') {
      trendLabels = ['Month 1', 'Month 2', 'Month 3'];
    } else if (timeframe === 'Year to Date') {
      trendLabels = ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'];
    } else {
      trendLabels = ['2024', '2025', '2026'];
    }

    // Generate deterministic curves for the chart depending on active metric
    trendPoints = trendLabels.map((_, i) => {
      let baseVal = 0;
      if (activeMetric === 'atsScore') {
        // ATS score: generally increasing/improving
        const step = 8 / (trendLabels.length - 1 || 1);
        baseVal = atsScore.value - 6 + i * step + (i % 2 === 0 ? 1 : -1);
        return Math.min(100, Math.round(baseVal));
      } else if (activeMetric === 'interviewRate') {
        // Interview rate: improving trend
        const step = 2.4 / (trendLabels.length - 1 || 1);
        baseVal = interviewRate.value - 1.5 + i * step + (i % 2 === 0 ? 0.3 : -0.3);
        return parseFloat(Math.max(1, baseVal).toFixed(1));
      } else if (activeMetric === 'applicationsSent') {
        // Applications: fluctuating volume
        const segment = (applicationsSent.value / trendLabels.length);
        baseVal = segment * 1.1 + (i % 2 === 0 ? segment * 0.25 : -segment * 0.15);
        return Math.round(Math.max(1, baseVal));
      } else {
        // Time-to-offer: completely stable, fluctuating by less than 1 day
        const offset = i % 3 === 0 ? 0.5 : i % 3 === 1 ? -0.5 : 0;
        baseVal = timeToOffer.value + offset;
        return parseFloat(baseVal.toFixed(1));
      }
    });

    return {
      metrics: { atsScore, interviewRate, applicationsSent, timeToOffer },
      funnel: { applied, screened, interview, offers },
      trend: { points: trendPoints, labels: trendLabels }
    };
  };

  const data = getFilteredData();

  // Draw SVG coordinates for the line chart
  const renderTrendChart = () => {
    const points = data.trend.points;
    const labels = data.trend.labels;

    if (!points || points.length === 0) return null;

    const width = 600;
    const height = 240;
    const paddingLeft = 45;
    const paddingRight = 20;
    const paddingTop = 30;
    const paddingBottom = 40;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Adjust Y-axis scale to make stable trend look flat/stable
    let minVal, maxVal;
    if (activeMetric === 'timeToOffer') {
      // For a stable metric, use a fixed visual margin so minor changes don't make the line look like a cliff
      minVal = Math.min(...points) - 10;
      maxVal = Math.max(...points) + 10;
    } else {
      minVal = Math.min(...points) * 0.95;
      maxVal = Math.max(...points) * 1.05;
    }
    const valRange = maxVal - minVal || 1;

    // Calculate actual coordinate arrays
    const coords = points.map((val, idx) => {
      const x = paddingLeft + (idx / (points.length - 1)) * chartWidth;
      const y = paddingTop + chartHeight - ((val - minVal) / valRange) * chartHeight;
      return { x, y, value: val, label: labels[idx] };
    });

    // Build the stroke line path
    let linePath = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 1; i < coords.length; i++) {
      const p0 = coords[i - 1];
      const p1 = coords[i];
      const cpX1 = p0.x + (p1.x - p0.x) / 2;
      const cpY1 = p0.y;
      const cpX2 = p0.x + (p1.x - p0.x) / 2;
      const cpY2 = p1.y;
      linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
    }

    // Build the closed area path for the gradient fill
    const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height - paddingBottom} L ${coords[0].x} ${height - paddingBottom} Z`;

    // Active metric color definitions
    let strokeColor = '#10b981'; // Emerald
    let gradientStart = 'rgba(16, 185, 129, 0.22)';
    let shadowColor = 'rgba(16, 185, 129, 0.3)';
    if (activeMetric === 'interviewRate') {
      strokeColor = '#3b82f6'; // Blue
      gradientStart = 'rgba(59, 130, 246, 0.22)';
      shadowColor = 'rgba(59, 130, 246, 0.3)';
    } else if (activeMetric === 'applicationsSent') {
      strokeColor = '#6366f1'; // Indigo
      gradientStart = 'rgba(99, 102, 241, 0.22)';
      shadowColor = 'rgba(99, 102, 241, 0.3)';
    } else if (activeMetric === 'timeToOffer') {
      strokeColor = '#a855f7'; // Purple
      gradientStart = 'rgba(168, 85, 247, 0.22)';
      shadowColor = 'rgba(168, 85, 247, 0.3)';
    }

    return (
      <div className="relative w-full h-[280px] mt-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            {/* Gradient fill */}
            <linearGradient id="chartAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            {/* Glow Drop Shadow filter for the trend line */}
            <filter id="lineShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor={shadowColor} floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Grid lines and Left Y-Axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = paddingTop + ratio * chartHeight;
            const gridVal = maxVal - ratio * valRange;
            return (
              <g key={i} className="opacity-40">
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#cbd5e1"
                  strokeWidth="0.75"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px] fill-slate-500 font-bold"
                >
                  {activeMetric === 'interviewRate' ? `${gridVal.toFixed(1)}%` : Math.round(gridVal)}
                </text>
              </g>
            );
          })}

          {/* Vertical Guides for labels */}
          {coords.map((pt, idx) => (
            <line
              key={`guide-${idx}`}
              x1={pt.x}
              y1={paddingTop}
              x2={pt.x}
              y2={height - paddingBottom}
              stroke="#e2e8f0"
              strokeWidth="0.5"
              className="opacity-30"
            />
          ))}

          {/* Gradient Area Fill */}
          {animate && <path d={areaPath} fill="url(#chartAreaGradient)" />}

          {/* Thick Path Line with Drop Shadow */}
          {animate && (
            <path
              d={linePath}
              fill="none"
              stroke={strokeColor}
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#lineShadow)"
              className="transition-all duration-1000"
            />
          )}

          {/* Dots and Labels */}
          {animate && coords.map((pt, idx) => (
            <g key={idx}>
              {/* Vertical line indicator on hover */}
              {hoveredPoint?.x === pt.x && (
                <line
                  x1={pt.x}
                  y1={paddingTop}
                  x2={pt.x}
                  y2={height - paddingBottom}
                  stroke={strokeColor}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  className="opacity-80"
                />
              )}

              {/* Data points (Interactive rings) */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={hoveredPoint?.x === pt.x ? 8 : 5}
                fill={strokeColor}
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-150 shadow-md"
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
              />

              {/* Horizontal X Axis Labels */}
              <text
                x={pt.x}
                y={height - 12}
                textAnchor="middle"
                className="text-[10px] fill-slate-650 font-bold"
              >
                {pt.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Dynamic Tooltip bubble on hover */}
        {hoveredPoint && (
          <div
            className="absolute bg-slate-900/95 text-white rounded-xl p-2.5 shadow-xl text-xs font-bold pointer-events-none transform -translate-x-1/2 -translate-y-full border border-slate-755 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-150 z-20"
            style={{
              left: `${(hoveredPoint.x / width) * 100}%`,
              top: `${(hoveredPoint.y / height) * 100 - 6}%`
            }}
          >
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{hoveredPoint.label}</p>
            <p className="text-sm mt-0.5 text-white">
              {activeMetric === 'atsScore' && `${hoveredPoint.value} ATS Score`}
              {activeMetric === 'interviewRate' && `${hoveredPoint.value}% Conversion`}
              {activeMetric === 'applicationsSent' && `${hoveredPoint.value} Applications`}
              {activeMetric === 'timeToOffer' && `${hoveredPoint.value} Days Avg`}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Funnel calculations
  const appliedCount = data.funnel.applied;
  const screenedCount = data.funnel.screened;
  const interviewCount = data.funnel.interview;
  const offersCount = data.funnel.offers;

  const screenConv = appliedCount > 0 ? Math.round((screenedCount / appliedCount) * 100) : 0;
  const interviewConv = screenedCount > 0 ? Math.round((interviewCount / screenedCount) * 100) : 0;
  const offerConv = interviewCount > 0 ? Math.round((offersCount / interviewCount) * 100) : 0;

  // Extra AI Smart Tips to show when expanded
  const smartTipsList = [
    {
      type: "bolt",
      color: "text-orange-500",
      textPart1: "Your response rate is ",
      textBold: "15% higher",
      textPart2: " when applying within the first 24 hours of a posting."
    },
    {
      type: "history",
      color: "text-blue-500",
      textPart1: "Applying on ",
      textBold: "Tuesdays",
      textPart2: " has yielded the most recruiter callbacks this month."
    },
    {
      type: "psychology",
      color: "text-indigo-500",
      textPart1: "Roles mentioning ",
      textBold: "\"Scalability\"",
      textPart2: " match your current resume with 94% accuracy."
    },
    // Expanded smart tips
    {
      type: "stars",
      color: "text-amber-500",
      textPart1: "Adding ",
      textBold: "\"Next.js Framework\"",
      textPart2: " to your project headers will boost ATS matching by 8%."
    },
    {
      type: "campaign",
      color: "text-purple-500",
      textPart1: "Follow up with ",
      textBold: "Hiring Managers",
      textPart2: " on LinkedIn 3 days after applying to increase response by 30%."
    },
    {
      type: "workspace_premium",
      color: "text-emerald-500",
      textPart1: "Your profile ranks in the ",
      textBold: "Top 10% of applicants",
      textPart2: " for Remote Senior Product Designer positions."
    }
  ];

  const visibleTips = showAllTips ? smartTipsList : smartTipsList.slice(0, 3);

  return (
    <div className="space-y-8 animate-fadeIn pb-8">

      {/* Page Header & Interactive Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Analytics</h2>
          <p className="text-lg text-slate-600">Understand your performance and market fit.</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 w-full sm:w-auto">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className={`glass-card rounded-xl text-sm font-bold text-slate-700 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px] appearance-none bg-no-repeat`}
              style={{
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '0.65em auto'
              }}
            >
              <option>This Month</option>
              <option>Last 3 Months</option>
              <option>Year to Date</option>
              <option>All Time</option>
            </select>
            <select
              value={roleType}
              onChange={(e) => setRoleType(e.target.value)}
              className={`glass-card rounded-xl text-sm font-bold text-slate-700 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px] appearance-none bg-no-repeat`}
              style={{
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '0.65em auto'
              }}
            >
              <option>All Role Types</option>
              <option>Full-time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Last updated: <span className="font-bold text-slate-700">Today, 10:32 AM</span>
          </div>
        </div>
      </div>

      {/* Interactive Metrics Row - Clicking card changes active trend graph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Metric 1 */}
        <div
          onClick={() => setActiveMetric('atsScore')}
          className={`glass-card p-6 rounded-2xl hover:border-emerald-500/40 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden ${activeMetric === 'atsScore' ? 'ring-2 ring-emerald-500/50 border-emerald-500/30 shadow-md bg-emerald-50/10' : ''}`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg ATS Score</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
              <span className="material-symbols-outlined text-[18px]">analytics</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">{data.metrics.atsScore.value}</span>
            <span className="text-sm font-bold text-emerald-600">/ 100</span>
          </div>
          <div className="mt-4 flex items-center text-emerald-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs font-bold">{data.metrics.atsScore.label}</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div
          onClick={() => setActiveMetric('interviewRate')}
          className={`glass-card p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden ${activeMetric === 'interviewRate' ? 'ring-2 ring-blue-500/50 border-blue-500/30 shadow-md bg-blue-50/10' : ''}`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interview Rate</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <span className="material-symbols-outlined text-[18px]">groups</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">{data.metrics.interviewRate.value}</span>
            <span className="text-sm font-bold text-blue-600">%</span>
          </div>
          <div className="mt-4 flex items-center text-emerald-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs font-bold">{data.metrics.interviewRate.label}</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div
          onClick={() => setActiveMetric('applicationsSent')}
          className={`glass-card p-6 rounded-2xl hover:border-indigo-500/40 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden ${activeMetric === 'applicationsSent' ? 'ring-2 ring-indigo-500/50 border-indigo-500/30 shadow-md bg-indigo-50/10' : ''}`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Applications Sent</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">{data.metrics.applicationsSent.value}</span>
            <span className="text-sm font-bold text-slate-500">{timeframe === 'This Month' ? 'this month' : 'total'}</span>
          </div>
          <div className="mt-4 flex items-center text-emerald-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs font-bold">{data.metrics.applicationsSent.label}</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div
          onClick={() => setActiveMetric('timeToOffer')}
          className={`glass-card p-6 rounded-2xl hover:border-purple-500/40 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden ${activeMetric === 'timeToOffer' ? 'ring-2 ring-purple-500/50 border-purple-500/30 shadow-md bg-purple-50/10' : ''}`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time-to-Offer</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">{data.metrics.timeToOffer.value}</span>
            <span className="text-sm font-bold text-slate-500">Avg Days</span>
          </div>
          <div className="mt-4 flex items-center text-slate-400 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
            <span className="text-xs font-bold">{data.metrics.timeToOffer.label}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Graph Trend Area for selected metric */}
      <div className="glass-card p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">timeline</span>
              {activeMetric === 'atsScore' && 'ATS Match Optimization Trend'}
              {activeMetric === 'interviewRate' && 'Recruiter Callback Rate Conversion'}
              {activeMetric === 'applicationsSent' && 'Applications Submission Velocity'}
              {activeMetric === 'timeToOffer' && 'Recruitment Funnel Velocity (Days)'}
            </h3>
            <p className="text-xs text-slate-555 mt-1">
              Showing progress trend over <span className="font-bold text-slate-700">{timeframe}</span> for <span className="font-bold text-slate-700">{roleType}</span>. Hover on coordinates for detailed stats.
            </p>
          </div>
        </div>
        {renderTrendChart()}
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* Application Success Funnel */}
        <div className={`lg:col-span-2 glass-card p-6 rounded-2xl flex flex-col`}>
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Application Success Funnel</h3>
              <p className="text-xs text-slate-555 mt-0.5">Tracking conversion ratios across workflow steps.</p>
            </div>
            <button className="text-slate-400 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>

          <div className="flex flex-col h-[320px] justify-end flex-1">
            <div className="flex items-end gap-2 sm:gap-6 h-full px-2 sm:px-6 relative pb-6">

              {/* Funnel Columns with values rendered cleanly ABOVE the columns */}

              {/* Step 1: Applied */}
              <div className="flex-1 flex flex-col items-center group relative h-full justify-end">
                <div
                  className="w-full relative transition-all duration-1000 ease-out flex flex-col justify-end"
                  style={{ height: animate ? '100%' : '0%' }}
                >
                  <span className="absolute -top-7 left-0 right-0 text-center font-extrabold text-slate-800 text-sm animate-fadeIn">
                    {appliedCount}
                  </span>
                  <div className="w-full h-full bg-slate-200 rounded-t-xl border border-slate-350 shadow-sm"></div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-700">Applied</span>
              </div>

              {/* Conversion bubble 1 */}
              <div className="flex flex-col items-center justify-center h-full pb-8">
                <div className="w-10 h-10 bg-slate-50 border border-slate-250 rounded-full flex flex-col items-center justify-center shadow-sm text-[10px] font-black text-slate-655" title="Conversion rate from Applied to Screened">
                  <span>{screenConv}%</span>
                  <span className="text-[8px] text-slate-400 font-bold">Conv</span>
                </div>
              </div>

              {/* Step 2: Screened */}
              <div className="flex-1 flex flex-col items-center group relative h-full justify-end">
                <div
                  className="w-full relative transition-all duration-1000 ease-out delay-100 flex flex-col justify-end"
                  style={{ height: animate ? '65%' : '0%' }}
                >
                  <span className="absolute -top-7 left-0 right-0 text-center font-extrabold text-indigo-900 text-sm animate-fadeIn">
                    {screenedCount}
                  </span>
                  <div className="w-full h-full bg-indigo-150 rounded-t-xl border border-indigo-250 shadow-sm"></div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-700">Screened</span>
              </div>

              {/* Conversion bubble 2 */}
              <div className="flex flex-col items-center justify-center h-full pb-8">
                <div className="w-10 h-10 bg-indigo-50 border border-indigo-200 rounded-full flex flex-col items-center justify-center shadow-sm text-[10px] font-black text-indigo-655" title="Conversion rate from Screened to Interview">
                  <span>{interviewConv}%</span>
                  <span className="text-[8px] text-indigo-400 font-bold">Conv</span>
                </div>
              </div>

              {/* Step 3: Interview */}
              <div className="flex-1 flex flex-col items-center group relative h-full justify-end">
                <div
                  className="w-full relative transition-all duration-1000 ease-out delay-200 flex flex-col justify-end"
                  style={{ height: animate ? '28%' : '0%' }}
                >
                  <span className="absolute -top-7 left-0 right-0 text-center font-extrabold text-emerald-905 text-sm animate-fadeIn">
                    {interviewCount}
                  </span>
                  <div className="w-full h-full bg-emerald-100 rounded-t-xl border border-emerald-250 shadow-sm"></div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-700">Interview</span>
              </div>

              {/* Conversion bubble 3 */}
              <div className="flex flex-col items-center justify-center h-full pb-8">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-full flex flex-col items-center justify-center shadow-sm text-[10px] font-black text-emerald-700" title="Conversion rate from Interview to Offers">
                  <span>{offerConv}%</span>
                  <span className="text-[8px] text-emerald-400 font-bold">Conv</span>
                </div>
              </div>

              {/* Step 4: Offers */}
              <div className="flex-1 flex flex-col items-center group relative h-full justify-end">
                <div
                  className="w-full relative transition-all duration-1000 ease-out delay-300 flex flex-col justify-end"
                  style={{ height: animate ? '12%' : '0%' }}
                >
                  <span className="absolute -top-7 left-0 right-0 text-center font-extrabold text-primary text-sm animate-fadeIn">
                    {offersCount}
                  </span>
                  <div className="w-full h-full bg-primary/95 rounded-t-xl border border-primary shadow-[0_-4px_15px_rgba(16,185,129,0.2)]"></div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-750">Offers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Rate by Platform */}
        <div className={`glass-card p-6 rounded-2xl flex flex-col justify-between`}>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Platform Performance</h3>
            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">LinkedIn</span>
                  <span className="text-sm font-black text-slate-900">24%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-[#0077b5] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: animate ? `24%` : '0%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Glassdoor</span>
                  <span className="text-sm font-black text-slate-900">12%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-[#0caa41] h-full rounded-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? `12%` : '0%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Direct Apply</span>
                  <span className="text-sm font-black text-slate-900">42%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000 ease-out delay-200" style={{ width: animate ? `42%` : '0%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Referrals</span>
                  <span className="text-sm font-black text-slate-900">68%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-emerald-400 h-full rounded-full transition-all duration-1000 ease-out delay-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" style={{ width: animate ? `68%` : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60">
            <p className="text-xs text-slate-550 font-medium italic">
              <span className="font-bold text-primary not-italic mr-1">Tip:</span>
              Referrals continue to be your highest conversion channel.
            </p>
          </div>
        </div>

        {/* Salary Insights */}
        <div className={`lg:col-span-2 glass-card p-6 rounded-2xl`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Salary Range Insights</h3>
              <p className="text-xs text-slate-555 font-medium mt-0.5">Market average vs. Target roles</p>
            </div>
            <div className="flex gap-4 items-center bg-white/50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                <span className="text-xs font-bold text-slate-700">Applied Roles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="text-xs font-bold text-slate-700">Market Avg</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Range 1 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Software Eng II</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[15%] right-[25%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '60%' : '0%' }}></div>
                <div className="absolute left-[30%] right-[40%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '30%' : '0%' }}></div>
                <div className="absolute left-[50%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$120k-$165k</span>
            </div>

            {/* Range 2 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Senior Product</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[25%] right-[15%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '60%' : '0%' }}></div>
                <div className="absolute left-[40%] right-[30%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '30%' : '0%' }}></div>
                <div className="absolute left-[55%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$145k-$190k</span>
            </div>

            {/* Range 3 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Frontend Dev</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[10%] right-[40%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '50%' : '0%' }}></div>
                <div className="absolute left-[20%] right-[55%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '25%' : '0%' }}></div>
                <div className="absolute left-[40%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$100k-$135k</span>
            </div>
          </div>
        </div>

        {/* AI Smart Tips Section */}
        <div className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-sm flex flex-col p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm border border-emerald-100">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">AI Smart Tips</h3>
          </div>

          <div className="space-y-4 flex-1">
            {visibleTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300 animate-in slide-in-from-bottom-2"
              >
                <div className="flex gap-3">
                  <span className={`material-symbols-outlined ${tip.color} text-[20px] shrink-0`} style={{ fontVariationSettings: tip.type === 'bolt' ? '"FILL" 1' : undefined }}>{tip.type}</span>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {tip.textPart1}
                    <span className="font-bold text-primary">{tip.textBold}</span>
                    {tip.textPart2}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAllTips(!showAllTips)}
            className="mt-6 w-full bg-white border border-emerald-200 text-primary py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-colors shadow-sm"
          >
            {showAllTips ? 'Show Less' : 'View All Insights'}
          </button>
        </div>

      </div>
    </div>
  );
}
