import React from 'react';
import { Clock, Link2, DollarSign, CheckCircle2, Zap } from 'lucide-react';

export default function OpportunityCard({ 
  company, 
  role, 
  location, 
  logo, 
  matchPercentage, 
  skills = [], 
  salary, 
  deadline, 
  source, 
  status,
  onViewJD,
  onApply
}) {
  // SVG circular progress math
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (matchPercentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-6">
          <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
            <img className="w-10 h-10 object-contain" src={logo} alt={`${company} Logo`} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">{role}</h4>
            <p className="text-slate-500 text-sm">{company} • {location}</p>
          </div>
        </div>
        
        {/* Match Percentage Circle */}
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle className="text-slate-100" cx="18" cy="18" fill="none" r={radius} stroke="currentColor" strokeWidth="3"></circle>
            <circle 
              className="text-emerald-600" 
              cx="18" 
              cy="18" 
              fill="none" 
              r={radius} 
              stroke="currentColor" 
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round" 
              strokeWidth="3"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold text-emerald-600">{matchPercentage}%</span>
          </div>
        </div>
      </div>
      
      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">
            {skill}
          </span>
        ))}
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-[13px]">
        <div className="flex items-center gap-2 text-slate-500">
          <DollarSign className="w-4 h-4 text-slate-400" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-2 text-red-500 font-medium">
          <Clock className="w-4 h-4 text-red-400" />
          <span>{deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Link2 className="w-4 h-4 text-slate-400" />
          <span>{source}</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-600 font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{status}</span>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex gap-2">
        <button 
          onClick={(e) => { e.stopPropagation(); onViewJD?.(); }} 
          className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-all"
        >
          View JD
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onApply?.(); }} 
          className="flex-1 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" /> Apply Now
        </button>
      </div>
    </div>
  );
}
