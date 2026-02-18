import React, { useState, useEffect } from 'react';
import { 
  Rocket, Navigation, Globe2, ChevronDown, 
  Anchor, ShoppingCart, ChevronRight,
  CheckCircle2, Mail, Briefcase, Smile
} from 'lucide-react';

// Fix: Added explicit type definitions and a default value for 'dark' to make it optional, resolving errors at call sites missing this property.
const SectionHeader = ({ title, subtitle, dark = false, annotation }: { title: string; subtitle?: string; dark?: boolean; annotation?: string }) => (
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

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    { role: '船副 (Officer)', org: 'LNG 天然氣船', date: '2022 - PRESENT', color: 'blue', icon: <Anchor />, details: ['負責 20 萬噸級 LNG 船之航行安全、貨物裝卸作業監控與風險控管。', '於跨國團隊中建立標準化操作流程 (SOP)，確保全球供應鏈極限環境下的零失誤營運。', '具備國際海事法規、跨國溝通協作與高壓力環境決策能力。'] },
    { role: '電商部門經理', org: 'Costco Taiwan', date: '2017 - 2022', color: 'emerald', icon: <ShoppingCart />, details: ['主導全台電商平台營運，優化端到端供應鏈效率，達成顯著的業績成長目標。', '建立數位化績效追蹤體系，將繁雜的零售數據轉化為可執行之商業決策。', '負責跨部門溝通標準化，提升物流、行銷與技術團隊之協作動能。'] },
    { role: '共同創辦人', org: 'FunTime 旅遊比價平台', date: '2008 - 2017', color: 'amber', icon: <Rocket />, details: ['從 0 到 1 打造全台領先的旅遊搜尋服務，橫跨產品規劃、技術研發與市場商務擴展。', '建立橫跨技術、產品與營運的溝通橋樑，落實使用者導向之數位轉型策略。'] },
    { role: '顧問 / 產品經理', org: 'Eland Tech / ezTravel', date: '2002 - 2008', color: 'slate', icon: <Briefcase />, details: ['負責產品規劃、技術文件編寫與跨部門專案管理。', '優化旅遊搜尋引擎邏輯，提升大規模數據查詢效率與準確度。'] }
  ];

  const pillarData = [
    { label: 'Shuping.', title: 'The Pioneer · 0→1 開創者', desc: '具備從零開始的開創精神。橫跨旅遊、商管與航海，善於運用數位工具與系統化方法，將繁瑣任務轉化為高效流程。', color: 'amber', letter: 'u' },
    { label: 'Shopping.', title: 'The Scaling Expert · 規模化營運者', desc: '於大型零售電商建立可擴充的 SOP。我專注於「可複製的成功」，讓系統成為支撐業務高速成長的最堅實底層。', color: 'emerald', letter: 'o' },
    { label: 'Shipping.', title: 'The Performer · 海上實踐者', desc: '於極限環境執行任務，重視紀律與精確度。在 20 萬噸級 LNG 船上，清楚的架構是守護營運安全的唯一防線。', color: 'blue', letter: 'i' }
  ];

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-[#fafaf9]">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 md:py-4 shadow-sm border-b border-zinc-200/50' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="group font-black text-xl md:text-2xl tracking-tighter">
            <span className="text-amber-600">LIN</span> <span className="text-zinc-900">SHUPING</span>
          </button>
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <button onClick={() => scrollToId('portfolio')} className="hover:text-amber-600 transition-colors">I AM</button>
            <button onClick={() => scrollToId('timeline')} className="hover:text-amber-600 transition-colors">I WORK</button>
            <button onClick={() => scrollToId('blueprint')} className="hover:text-amber-600 transition-colors">I CAN</button>
            <button onClick={() => scrollToId('contact')} className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] hover:bg-amber-600 transition-all">CONNECT</button>
          </div>
          <button onClick={() => scrollToId('contact')} className="lg:hidden bg-zinc-900 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">CONNECT</button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="mb-6"><span className="personal-note text-2xl text-zinc-400">The Multi-Dimensional Integrator —</span></div>
            <h1 className="fluid-hero-text font-black text-zinc-900 flex flex-col mb-10">
              <div className="reveal-item">Sh<span className="text-amber-500">u</span>ping.</div>
              <div className="reveal-item" style={{transitionDelay:'0.1s'}}>Sh<span className="text-emerald-500">o</span>pping.</div>
              <div className="reveal-item" style={{transitionDelay:'0.2s'}}>Sh<span className="text-blue-500">i</span>pping.</div>
            </h1>
            <p className="text-xl md:text-3xl font-black text-zinc-800 leading-tight mb-8">
              二十年跨界實踐，橫跨數位新創、大型零售與國際航運。
            </p>
            <button onClick={() => scrollToId('portfolio')} className="group flex items-center space-x-4 text-zinc-400 hover:text-amber-600 transition-all font-black text-xs uppercase tracking-[0.3em]">
              <span>Explore My Identity</span> <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          <div className="relative aspect-[4/5] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden paper-shadow border-[12px] md:border-[20px] border-white rotate-2 hover:rotate-0 transition-all duration-700">
            <img src={profileImage} className="w-full h-full object-cover contrast-[1.05]" alt="Lin Shuping" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 md:py-40 px-6 md:px-8 bg-white border-y">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I am" subtitle="橫跨開創、營運與執行，將多維經驗整合為一套獨特的專業體系。" annotation="Identity" />
          <div className="grid gap-16 md:gap-32 mt-12 md:mt-20">
            {pillarData.map((item, idx) => (
              <div key={idx} className="reveal-item group flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20">
                <h3 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter shrink-0">
                  Sh<span className={item.color === 'amber' ? 'text-amber-500' : item.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}>{item.letter}</span>{item.label.split(item.letter)[1]}
                </h3>
                <div className="flex-1 space-y-4">
                  <h4 className="text-xl md:text-3xl font-black">{item.title}</h4>
                  <p className="text-base md:text-xl font-medium text-zinc-500 leading-relaxed border-l-4 border-zinc-100 pl-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="I work" subtitle="從數位新創、跨國零售到國際航運，始終如一的專業承諾。" annotation="Experience" />
          <div className="grid gap-8">
            {careerData.map((item, idx) => (
              <div key={idx} className="reveal-item bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] paper-shadow border flex flex-col md:flex-row gap-8 group hover:border-amber-400/30 transition-all duration-500">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'} text-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-black">{item.role}</h4>
                        <p className="text-zinc-400 font-bold uppercase tracking-widest">{item.org}</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-zinc-500 bg-zinc-100 px-4 py-2 rounded-full mt-4 md:mt-0 self-start">{item.date}</span>
                  </div>
                  <div className="grid gap-4">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100/50">
                        <CheckCircle2 size={24} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-800 font-bold text-lg md:text-2xl tracking-tight leading-snug">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blueprint" className="py-24 md:py-40 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader title="I can" subtitle="吉爾吉斯計畫：將「標準化 × 以人為本 × 效率」轉化為在地服務的具體行動。" dark annotation="Impact Strategy" />
          <div className="reveal-item bg-amber-500 rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 text-zinc-900 relative group overflow-hidden">
            <div className="absolute -top-20 -right-20 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
              <Smile className="w-64 h-64 md:w-[400px] md:h-[400px]" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10">我可以為計畫<br/>帶來什麼價值？</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { title: '品牌敘事與數位資產', desc: '將在地特色轉化為具吸引力的 brand story，並建立結構化的行銷素材庫。' },
                  { title: '平台整合與流量轉化', desc: '將內容與商品套用至 FB、IG 與 Pinkoi 等平台，引導流量支持官網。' },
                  { title: '數位 SOP 與文化傳承', desc: '建立易於維護的數位指南，確保計畫價值與營運流程可持續運作。' }
                ].map((plan, pIdx) => (
                  <div key={pIdx} className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl flex flex-col justify-center min-h-[250px]">
                    <h4 className="text-2xl font-black mb-4 leading-tight">{plan.title}</h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">{plan.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-40 px-6 md:px-8 text-center bg-white">
        <div className="reveal-item max-w-6xl mx-auto bg-zinc-50 p-10 md:p-24 rounded-[3.5rem] md:rounded-[6.5rem] paper-shadow border">
          <h2 className="font-black text-zinc-900 text-4xl md:text-[7.5rem] tracking-tighter leading-none mb-12">
            <div>Sh<span className="text-amber-500">u</span>ping.</div>
          </h2>
          <div className="flex flex-col items-center">
            <a href="mailto:zeroshuping@gmail.com" className="group flex items-center gap-6 bg-white px-8 py-6 md:px-16 md:py-10 rounded-full paper-shadow border hover:bg-zinc-900 hover:text-white transition-all duration-700 active:scale-95">
               <Mail className="w-6 h-6 md:w-12 md:h-12 text-amber-600" />
               <span className="text-xl md:text-5xl font-black tracking-tighter lowercase">zeroshuping@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-zinc-100 text-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">
        © 2024 Lin Shuping. Efficiency meets Impact.
      </footer>
    </div>
  );
};

export default App;