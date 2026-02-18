
import React, { useState, useEffect } from 'react';
import { 
  Rocket, Navigation, Globe2, ChevronDown, 
  Anchor, ShoppingCart, ChevronRight,
  CheckCircle2, Mail, Briefcase, Smile
} from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string; dark?: boolean; annotation?: string }> = ({ title, subtitle, dark, annotation }) => (
  <div className="mb-10 md:mb-12">
    <div className={`flex items-center space-x-3 mb-4 ${dark ? 'opacity-100' : ''}`}>
      <div className={`h-[2px] w-8 md:w-10 ${dark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
      {annotation && (
        <span className={`${dark ? 'text-amber-400' : 'text-amber-600'} font-black tracking-[0.25em] uppercase text-[9px] md:text-[10px]`}>
          {annotation}
        </span>
      )}
    </div>
    <div className="relative inline-block">
      <h2 className={`text-5xl sm:text-6xl md:text-[8rem] font-black mb-6 tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    </div>
    {subtitle && <p className={`text-base md:text-xl max-w-3xl font-medium leading-relaxed opacity-80 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>{subtitle}</p>}
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    { 
      role: '船副 (Officer)', 
      org: 'LNG 天然氣船', 
      date: '2022 - PRESENT', 
      color: 'blue', 
      icon: <Anchor />,
      details: [
        '負責 20 萬噸級 LNG 船之航行安全、貨物裝卸作業監控與風險控管。',
        '於跨國團隊中建立標準化操作流程 (SOP)，確保全球供應鏈極限環境下的零失誤營運。',
        '具備國際海事法規、跨國溝通協作與高壓力環境決策能力。'
      ]
    },
    { 
      role: '電商部門經理', 
      org: 'Costco Taiwan', 
      date: '2017 - 2022', 
      color: 'emerald', 
      icon: <ShoppingCart />,
      details: [
        '主導全台電商平台營運，優化端到端供應鏈效率，達成顯著的業績成長目標。',
        '建立數位化績效追蹤體系，將繁雜的零售數據轉化為可執行之商業決策。',
        '負責跨部門溝通標準化，提升物流、行銷與技術團隊之協作動能。'
      ]
    },
    { 
      role: '共同創辦人', 
      org: 'FunTime 旅遊比價平台', 
      date: '2008 - 2017', 
      color: 'amber', 
      icon: <Rocket />,
      details: [
        '從 0 到 1 打造全台領先的旅遊搜尋服務，橫跨產品規劃、技術研發與市場商務擴展。',
        '建立橫跨技術、產品與營運的溝通橋樑，落實使用者導向之數位轉型策略。'
      ]
    },
    { 
      role: '顧問 / 產品經理', 
      org: 'Eland Tech / ezTravel', 
      date: '2002 - 2008', 
      color: 'slate', 
      icon: <Briefcase />,
      details: [
        '負責產品規劃、技術文件編寫與跨部門專案管理。',
        '優化旅遊搜尋引擎邏輯，提升大規模數據查詢效率與準確度。'
      ]
    }
  ];

  const pillarData = [
    {
      label: 'Shuping.',
      title: 'The Pioneer · 0→1 開創者',
      desc: '具備從零開始的開創精神。橫跨旅遊、商管與航海，善於運用數位工具與系統化方法，將繁瑣任務轉化為高效流程。',
      color: 'amber',
      letter: 'u'
    },
    {
      label: 'Shopping.',
      title: 'The Scaling Expert · 規模化營運者',
      desc: '於大型零售電商建立可擴充的 SOP。我專注於「可複製的成功」，讓系統成為支撐業務高速成長的最堅實底層。',
      color: 'emerald',
      letter: 'o'
    },
    {
      label: 'Shipping.',
      title: 'The Performer · 海上實踐者',
      desc: '於極限環境執行任務，重視紀律與精確度。在 20 萬噸級 LNG 船上，清楚的架構是守護營運安全的唯一防線。',
      color: 'blue',
      letter: 'i'
    }
  ];

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-[#fafaf9]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 md:py-4 shadow-sm border-b border-zinc-200/50' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="group font-black text-xl md:text-2xl tracking-tighter">
            <span className="text-amber-600">LIN</span> <span className="text-zinc-900">SHUPING</span>
          </button>
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            {[
              { id: 'portfolio', label: 'I am' },
              { id: 'timeline', label: 'I work' },
              { id: 'blueprint', label: 'I can' }
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className="hover:text-amber-600 transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button onClick={() => scrollToId('contact')} className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-200">
              CONNECT
            </button>
          </div>
          <button onClick={() => scrollToId('contact')} className="lg:hidden bg-zinc-900 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="z-10 order-2 lg:order-1">
            <div className="reveal-item mb-4 md:mb-6">
               <span className="personal-note text-xl md:text-2xl">The Multi-Dimensional Integrator —</span>
            </div>
            <h1 className="fluid-hero-text font-black text-zinc-900 flex flex-col mb-10 md:mb-12">
              <div className="reveal-item" style={{ transitionDelay: '0.1s' }}>
                Sh<span className="text-amber-500">u</span>ping.
              </div>
              <div className="reveal-item" style={{ transitionDelay: '0.2s' }}>
                Sh<span className="text-emerald-500">o</span>pping.
              </div>
              <div className="reveal-item" style={{ transitionDelay: '0.3s' }}>
                Sh<span className="text-blue-500">i</span>pping.
              </div>
            </h1>

            <div className="reveal-item space-y-6 md:space-y-8 max-w-xl mb-12 md:mb-16">
              <p className="text-xl md:text-3xl font-black text-zinc-800 leading-[1.2] tracking-tight">
                二十年跨界實踐，橫跨數位新創、大型零售與國際航運，<br className="hidden md:block"/>
                專注於建立可規模化的全球營運體系。
              </p>
              <p className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed border-l-4 border-amber-500 pl-5 md:pl-6 py-1 md:py-2">
                我致力於透過系統化架構解決複雜問題。無論是在 LNG 船執行零容錯任務，或是主導電商平台之營運轉型，核心始終在於將「效率」轉化為穩定的「專業影響力」。
              </p>
            </div>
            
            <button 
              onClick={() => scrollToId('portfolio')}
              className="reveal-item group flex items-center space-x-4 text-zinc-400 hover:text-amber-600 transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.3em]"
            >
              <span>Explore My Identity</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative order-1 lg:order-2 reveal-item z-0 group pt-6 md:pt-10">
            <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-64 h-64 md:w-[30rem] md:h-[30rem] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-40 animate-pulse"></div>
            
            <div className="relative aspect-[4/5] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden paper-shadow border-[12px] md:border-[24px] border-white rotate-2 hover:rotate-0 transition-all duration-[1.2s] ease-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex items-center justify-center">
              {!imgError ? (
                <img 
                  src={profileImage} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-out contrast-[1.12] brightness-[1.06] saturate-[1.08]" 
                  alt="Lin Shuping" 
                  style={{ imageRendering: '-webkit-optimize-contrast' as any }}
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-zinc-400 font-black text-center p-8 md:p-12 uppercase tracking-widest text-xs leading-relaxed">
                  Portrait Fetching...<br/>
                  <span className="text-[10px] font-bold opacity-60 italic">Standardizing pixels</span>
                </div>
              )}
            </div>
            
            <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 bg-zinc-900 text-white px-6 py-6 md:px-10 md:py-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl rotate-12 flex flex-col items-center justify-center leading-none z-20 border-[4px] md:border-[6px] border-white group-hover:rotate-6 transition-transform duration-700">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2 opacity-70">Experience</span>
               <span className="text-2xl md:text-4xl font-black tracking-tighter">20Y+</span>
            </div>
            <span className="personal-note absolute -bottom-12 md:-bottom-20 right-4 md:right-8 rotate-3 opacity-60 text-2xl md:text-3xl">Efficiency meets Impact.</span>
          </div>
        </div>
      </section>

      {/* Identity Pillars Section - I AM */}
      <section id="portfolio" className="py-24 md:py-40 px-6 md:px-8 bg-white border-y border-zinc-100 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="I am" 
            subtitle="橫跨開創、營運與執行，將多維經驗整合為一套獨特的專業體系。"
            annotation="Identity"
          />
          
          <div className="grid grid-cols-1 gap-16 md:gap-32 mt-12 md:mt-20">
            {pillarData.map((item, idx) => (
              <div key={idx} className="reveal-item group flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 max-w-6xl relative">
                <div className="relative shrink-0">
                   <h3 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none relative z-10">
                    Sh<span className={
                      item.color === 'amber' ? 'text-amber-500' : 
                      item.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'
                    }>{item.letter}</span>{item.label.substring(item.label.indexOf(item.letter) + 1)}
                  </h3>
                </div>
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`h-[2px] w-8 md:w-12 ${
                      item.color === 'amber' ? 'bg-amber-500' : 
                      item.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}></div>
                    <h4 className="text-xl md:text-3xl font-black text-zinc-900 tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-base md:text-xl font-medium text-zinc-500 leading-relaxed pl-4 border-l-4 border-zinc-100 group-hover:border-zinc-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - I WORK */}
      <section id="timeline" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="I work" 
            subtitle="從數位新創、跨國零售到國際航運，始終如一的專業承諾。"
            annotation="Experience"
          />
          <div className="grid gap-8 md:gap-10">
            {careerData.map((item, idx) => (
              <div key={idx} className="reveal-item bg-white px-7 py-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] paper-shadow border border-zinc-100 flex flex-col md:flex-row gap-6 md:gap-12 group hover:border-amber-400/30 transition-all duration-700">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10">
                    <div className="flex items-center gap-5 md:block">
                      <div className={`w-16 h-16 ${
                        item.color === 'blue' ? 'bg-blue-500' : 
                        item.color === 'emerald' ? 'bg-emerald-500' :
                        item.color === 'slate' ? 'bg-slate-500' : 'bg-amber-500'
                      } text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border-4 border-white mb-0 md:mb-6`}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8", strokeWidth: 2.5 })}
                      </div>
                      <div className="max-w-md">
                        <h4 className="text-2xl md:text-3xl font-black text-zinc-900 group-hover:text-amber-600 transition-colors leading-tight mb-1 tracking-tight">
                          {item.role}
                        </h4>
                        <p className="text-zinc-400 font-bold text-lg md:text-xl uppercase tracking-widest leading-none">{item.org}</p>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-zinc-500 bg-zinc-100/80 px-4 py-2 md:px-6 md:py-3 rounded-full tracking-[0.2em] mt-5 md:mt-0 self-start border border-zinc-200/50">
                      {item.date}
                    </span>
                  </div>
                  <div className="grid gap-4 md:gap-5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-4 md:gap-5 p-5 md:p-8 bg-zinc-50/50 rounded-3xl group-hover:bg-white transition-all shadow-sm group-hover:shadow-md border border-zinc-100/50">
                        <CheckCircle2 size={24} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-800 font-bold leading-snug text-lg md:text-2xl tracking-tight">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - I CAN */}
      <section id="blueprint" className="py-24 md:py-40 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader 
            title="I can" 
            subtitle="吉爾吉斯計畫：將「標準化 × 以人為本 × 效率」轉化為在地服務的具體行動。"
            dark
            annotation="Impact Strategy"
          />
          <div className="reveal-item bg-amber-500 rounded-[3rem] md:rounded-[5rem] px-6 py-12 md:p-24 text-zinc-900 overflow-hidden relative group shadow-[0_30px_60px_-10px_rgba(245,158,11,0.25)]">
            <div className="absolute top-0 right-0 p-8 md:p-16 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
              <Smile className="w-64 h-64 md:w-[400px] md:h-[400px]" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="max-w-5xl mb-12 md:mb-16">
                <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-[1] mb-8 md:mb-12">
                  我可以為計畫<br className="hidden md:block"/>帶來什麼價值？
                </h3>
                <p className="text-lg md:text-2xl font-bold opacity-80 leading-relaxed italic border-l-4 border-zinc-900 pl-4 md:pl-6 py-1 md:py-2">
                  我不只是去執行任務，更是去傳遞工具。讓專業經驗轉化為在地團隊可持續運作的數位資產。
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { 
                    title: '品牌敘事與數位資產', 
                    desc: '將家扶小舖的在地特色轉化為具吸引力的 brand story，並建立結構化的行銷素材庫。'
                  },
                  { 
                    title: '平台整合與流量轉化', 
                    desc: '將內容與商品套用至 FB、IG 與 Pinkoi 等平台，引導流量導向支持官網，建立透明的捐助連結。'
                  },
                  { 
                    title: '數位 SOP 與文化傳承', 
                    desc: '建立易於維護的數位指南，確保即使在人員更迭下，計畫的核心價值與營運流程也能持續運作。'
                  }
                ].map((plan, pIdx) => (
                  <div key={pIdx} className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/40 shadow-xl hover:translate-y-[-5px] transition-all duration-700 group/card flex flex-col justify-center">
                    <h4 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight text-zinc-900 leading-tight">
                      {plan.title}
                    </h4>
                    <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-500 group-hover/card:text-zinc-800 transition-colors">
                      {plan.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-8 text-center bg-white relative overflow-hidden">
        <div className="reveal-item max-w-6xl mx-auto bg-zinc-50 p-10 md:p-24 rounded-[3.5rem] md:rounded-[6rem] paper-shadow border border-zinc-100 group relative">
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:rotate-6 transition-transform duration-1000">
             <Rocket className="w-48 h-48 md:w-[300px] md:h-[300px]" />
          </div>
          <div className="mb-10 md:mb-12">
            <div className="font-black text-zinc-900 text-4xl sm:text-5xl md:text-[7rem] tracking-tighter leading-[1] md:leading-[0.85] space-y-1">
              <div>Sh<span className="text-amber-500">u</span>ping.</div>
              <div>Sh<span className="text-emerald-500">o</span>pping.</div>
              <div>Sh<span className="text-blue-500">i</span>pping.</div>
            </div>
          </div>
          <div className="mb-12 md:mb-20">
            <h3 className="text-[10px] md:text-lg font-black text-zinc-400 uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-80 mb-8 md:mb-12">
              Ready for the Next Mission
            </h3>
            <div className="flex flex-col items-center">
              <a 
                href="mailto:zeroshuping@gmail.com" 
                className="group flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-white px-8 py-6 md:px-16 md:py-10 rounded-3xl md:rounded-full paper-shadow border border-zinc-100 hover:border-amber-400/50 hover:bg-zinc-900 hover:text-white transition-all duration-700 active:scale-95 w-full sm:w-auto"
              >
                <div className="bg-amber-100 p-3 md:p-4 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                  <Mail className="w-6 h-6 md:w-10 md:h-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg md:text-5xl font-black tracking-tighter break-all sm:break-normal">
                  zeroshuping@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 md:px-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="font-black text-lg md:text-xl tracking-tighter mb-2 md:mb-4">LIN SHUPING</p>
            <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">© 2024. ALL SYSTEMS READY.</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 text-center md:text-right text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400">
             <span>Professional Folio v5.0</span>
             <span className="h-1 w-1 bg-amber-500 rounded-full"></span>
             <span>Taiwan Based</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
