import React from 'react';

interface ComparisonData {
  feature: string;
  nivk: {
    value: string;
    status: 'good' | 'warning' | 'bad';
  };
  fullTime: {
    value: string;
    status: 'good' | 'warning' | 'bad';
  };
  agencies: {
    value: string;
    status: 'good' | 'warning' | 'bad';
  };
}

const comparisonData: ComparisonData[] = [
  {
    feature: 'Cost',
    nivk: { value: '$', status: 'good' },
    fullTime: { value: '$$$$ (High Overhead)', status: 'bad' },
    agencies: { value: '$$', status: 'warning' }
  },
  {
    feature: 'Senior-Level Designer',
    nivk: { value: 'Guaranteed', status: 'good' },
    fullTime: { value: 'Hopefully', status: 'bad' },
    agencies: { value: 'Maybe', status: 'warning' }
  },
  {
    feature: 'Turnaround Time',
    nivk: { value: '48 hours', status: 'good' },
    fullTime: { value: 'Can take weeks', status: 'bad' },
    agencies: { value: 'Weeks, workload-based', status: 'bad' }
  },
  {
    feature: 'Start Time',
    nivk: { value: 'Today', status: 'good' },
    fullTime: { value: 'Weeks to onboard', status: 'bad' },
    agencies: { value: 'Days for setup', status: 'bad' }
  },
  {
    feature: 'Unlimited Revisions',
    nivk: { value: 'Always', status: 'good' },
    fullTime: { value: 'Limited', status: 'bad' },
    agencies: { value: 'Per-project cap', status: 'bad' }
  },
  {
    feature: 'Client Portal',
    nivk: { value: 'Yes', status: 'good' },
    fullTime: { value: 'Internal friction', status: 'bad' },
    agencies: { value: 'None', status: 'bad' }
  },
  {
    feature: 'Scalability',
    nivk: { value: 'Easy to scale', status: 'good' },
    fullTime: { value: 'Possible', status: 'warning' },
    agencies: { value: 'Limited', status: 'bad' }
  },
  {
    feature: 'Flexibility',
    nivk: { value: 'Pause/adjust', status: 'good' },
    fullTime: { value: 'Salary-locked', status: 'bad' },
    agencies: { value: 'Rigid contracts', status: 'bad' }
  },
  {
    feature: 'Vibe Matching',
    nivk: { value: 'Custom UI vibes', status: 'good' },
    fullTime: { value: 'Generic workflow', status: 'bad' },
    agencies: { value: 'Template feel', status: 'warning' }
  }
];

const getStatusIcon = (status: 'good' | 'warning' | 'bad') => {
  switch (status) {
    case 'good':
      return '✅';
    case 'warning':
      return '⚠️';
    case 'bad':
      return '❌';
    default:
      return '';
  }
};

const getStatusStyles = (status: 'good' | 'warning' | 'bad', isNivk: boolean = false) => {
  switch (status) {
    case 'good':
      return isNivk 
        ? 'text-green-400 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]' 
        : 'text-green-400 font-semibold';
    case 'warning':
      return 'text-yellow-400 font-medium';
    case 'bad':
      return 'text-red-400 font-medium';
    default:
      return 'text-white';
  }
};

const getNivkValueStyle = (value: string) => {
  // Highlight key differentiators in Nivk column
  const highlights = ['48 hours', 'Today', 'Custom UI vibes', 'Always', 'Pause/adjust'];
  if (highlights.some(highlight => value.includes(highlight))) {
    return 'text-primary font-bold drop-shadow-[0_0_6px_rgba(255,162,0,0.7)]';
  }
  return '';
};

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Why Nivk?
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Compare us to the other options.
          </h2>
          <p className="text-lg text-muted-foreground">
            It's not even close.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative">
          {/* Premium Glass Container with Multiple Layers */}
          <div className="bg-white/15 backdrop-blur-3xl rounded-3xl border-2 border-white/25 shadow-2xl shadow-[0_0_60px_rgba(255,162,0,0.4)] shadow-[inset_0_0_60px_rgba(255,255,255,0.15)] overflow-hidden">
            {/* Rich Gradient Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-purple-400/35 to-pink-400/30"></div>
            {/* Additional Depth Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-purple-500/20"></div>
            {/* Subtle Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/30 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]"></div>
            
            {/* Table Content */}
            <div className="relative z-10">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="text-left p-8 border-r border-white/30 relative">
                        {/* Premium Feature Column Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/25 via-purple-500/20 to-pink-500/15 backdrop-blur-xl border-r border-white/30"></div>
                        <div className="relative z-10 font-bebas text-2xl text-white tracking-wide uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                          Feature
                        </div>
                      </th>
                      <th className="text-center p-8 border-r border-white/30 bg-gradient-to-b from-primary/40 to-primary/15 shadow-[inset_0_0_40px_rgba(255,162,0,0.25)]">
                        <span className="font-bebas text-2xl text-white drop-shadow-[0_0_12px_rgba(255,162,0,1)] shadow-[0_0_20px_rgba(255,162,0,0.5)]">
                          Nivk
                        </span>
                      </th>
                      <th className="text-center p-8 border-r border-white/30 bg-gradient-to-b from-purple-400/20 via-pink-400/15 to-transparent">
                        <span className="font-bebas text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                          Full-Time Designer
                        </span>
                      </th>
                      <th className="text-center p-8 bg-gradient-to-b from-pink-400/20 via-purple-400/15 to-transparent">
                        <span className="font-bebas text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                          Other Agencies
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/30">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group">
                        <td className="p-8 border-r border-white/30 relative group-hover:shadow-[0_0_20px_rgba(255,162,0,0.3)] transition-all duration-500">
                          {/* Premium Feature Column Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/25 via-purple-500/20 to-pink-500/15 backdrop-blur-xl border-r border-white/30 group-hover:from-orange-500/35 group-hover:via-purple-500/30 group-hover:to-pink-500/25 transition-all duration-500"></div>
                          <div className="relative z-10 font-bebas text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition-all duration-500">
                            {row.feature}
                          </div>
                        </td>
                        <td className="p-8 text-center border-r border-white/30 bg-gradient-to-b from-primary/25 to-primary/8 group-hover:from-primary/35 group-hover:to-primary/15 group-hover:shadow-[inset_0_0_30px_rgba(255,162,0,0.3)] transition-all duration-500">
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-2xl drop-shadow-[0_0_8px_rgba(34,197,94,1)] group-hover:scale-110 transition-transform duration-300">{getStatusIcon(row.nivk.status)}</span>
                            <span className={`${getStatusStyles(row.nivk.status, true)} ${getNivkValueStyle(row.nivk.value)} text-lg font-bold`}>
                              {row.nivk.value}
                            </span>
                          </div>
                        </td>
                        <td className="p-8 text-center border-r border-white/30 bg-gradient-to-b from-purple-400/15 via-pink-400/10 to-transparent group-hover:from-purple-400/20 group-hover:via-pink-400/15 transition-all duration-500">
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-xl group-hover:scale-105 transition-transform duration-300">{getStatusIcon(row.fullTime.status)}</span>
                            <span className={`${getStatusStyles(row.fullTime.status)} text-lg font-medium`}>
                              {row.fullTime.value}
                            </span>
                          </div>
                        </td>
                        <td className="p-8 text-center bg-gradient-to-b from-pink-400/15 via-purple-400/10 to-transparent group-hover:from-pink-400/20 group-hover:via-purple-400/15 transition-all duration-500">
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-xl group-hover:scale-105 transition-transform duration-300">{getStatusIcon(row.agencies.status)}</span>
                            <span className={`${getStatusStyles(row.agencies.status)} text-lg font-medium`}>
                              {row.agencies.value}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked View */}
              <div className="md:hidden">
                {/* Column Headers */}
                <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/30">
                  <div className="text-center bg-gradient-to-b from-primary/40 to-primary/15 rounded-2xl p-4 shadow-[inset_0_0_30px_rgba(255,162,0,0.25)] border border-primary/30 shadow-[0_0_20px_rgba(255,162,0,0.3)]">
                    <h3 className="font-bebas text-lg text-white drop-shadow-[0_0_12px_rgba(255,162,0,1)]">Nivk</h3>
                  </div>
                  <div className="text-center bg-gradient-to-b from-purple-400/20 via-pink-400/15 to-transparent backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <h3 className="font-bebas text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Full-Time</h3>
                  </div>
                  <div className="text-center bg-gradient-to-b from-pink-400/20 via-purple-400/15 to-transparent backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <h3 className="font-bebas text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Agencies</h3>
                  </div>
                </div>

                {/* Feature Rows */}
                {comparisonData.map((row, index) => (
                  <div key={index} className="border-b border-white/30 last:border-b-0">
                    <div className="p-6 bg-gradient-to-br from-orange-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-xl">
                      <h4 className="font-bebas text-xl text-white text-center mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{row.feature}</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-6">
                      <div className="text-center bg-gradient-to-b from-primary/30 to-primary/10 rounded-2xl p-4 border border-primary/30 shadow-[inset_0_0_25px_rgba(255,162,0,0.2)] shadow-[0_0_15px_rgba(255,162,0,0.2)]">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-2xl drop-shadow-[0_0_8px_rgba(34,197,94,1)]">{getStatusIcon(row.nivk.status)}</span>
                          <span className={`text-sm font-bold ${getStatusStyles(row.nivk.status, true)} ${getNivkValueStyle(row.nivk.value)} text-center leading-tight`}>
                            {row.nivk.value}
                          </span>
                        </div>
                      </div>
                      <div className="text-center bg-gradient-to-b from-purple-400/15 via-pink-400/10 to-transparent backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-xl">{getStatusIcon(row.fullTime.status)}</span>
                          <span className={`text-sm font-medium ${getStatusStyles(row.fullTime.status)} text-center leading-tight`}>
                            {row.fullTime.value}
                          </span>
                        </div>
                      </div>
                      <div className="text-center bg-gradient-to-b from-pink-400/15 via-purple-400/10 to-transparent backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-xl">{getStatusIcon(row.agencies.status)}</span>
                          <span className={`text-sm font-medium ${getStatusStyles(row.agencies.status)} text-center leading-tight`}>
                            {row.agencies.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}