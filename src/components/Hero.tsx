import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

export const TECH_STACK = ['Kotlin', 'Java', 'Android SDK', 'Encryption', 'Static Analysis'];

const Hero: React.FC = () => {
  const t = useTranslations();
  
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              {t.home.hero.titleLine1} <br />
              <span className="text-primary italic">{t.home.hero.titleLine2}</span> <br />
              {t.home.hero.titleLine3}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto md:mx-0">
              {t.home.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 h-14 px-8 bg-primary text-background-dark text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(123,175,224,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              {t.home.hero.viewResume}
            </button>
            <button className="flex items-center justify-center gap-2 h-14 px-8 bg-surface-dark border border-border-dark text-white text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 hover:border-primary/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {t.home.hero.contactMe}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-6">
            {TECH_STACK.map((tech, idx) => (
              <span key={tech} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors ${idx > 2 ? 'border-primary/40 text-primary bg-primary/5' : 'border-border-dark text-slate-400 bg-surface-dark'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] relative">
          <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-50"></div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border-dark bg-surface-dark shadow-2xl group">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/20 z-10 mix-blend-overlay"></div>
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PwaVAYl2kG2R-mfF_PcvnGqNhw5XRPRNTbeiL8X0GkGt6MuAg8_yW_MaCaOKBzmwwWKFlAWF8yKvoxc79vQtphGPNgL_UtpAqvPIfeCtzO2PEG1rOr11AULXzMc4sAkTjOVsw4JM8ZXGZtIqtOB_xsLEX3K8qV0NVodNt9oGMzyu4Mlxg4_DJtdc_4v34YnLDKF1Qw6mchK_QbLBmKlb3BxZDhan_Ym6S7BiRuzipQ-UjN1zDcIkaZ3cA7MNerWg5MlG-SvKD4XV" 
               alt={t.home.hero.imageAlt} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background-dark/80 backdrop-blur-md border border-border-dark z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-primary uppercase mb-1">{t.home.hero.architecturePreview}</p>
                <p className="text-sm text-slate-300">{t.home.hero.architectureDescription}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;