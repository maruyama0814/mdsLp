import React, { useState, useEffect, useRef } from 'react';
import { GridOverlay } from './components/GridOverlay';
import { Section } from './components/Section';
import { MagneticButton } from './components/MagneticButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrolled(containerRef.current.scrollTop);
      }
    };
    
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#f2f2f2] font-sans antialiased relative overflow-hidden text-black">
      {/* PC Background: Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{
               backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Mobile Wrapper - Updated to be full height on PC */}
      <div 
        ref={containerRef}
        id="mobile-container"
        className="w-full h-full md:max-w-[420px] bg-white relative overflow-y-scroll overflow-x-hidden no-scrollbar md:shadow-2xl transition-all duration-500 z-10 border-x border-black/5"
      >
        <GridOverlay />
        
        {/* Sticky Header */}
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 flex justify-between items-center ${scrolled > 20 ? 'bg-white/90 backdrop-blur-md border-b border-black/5' : 'bg-transparent'}`}>
          <span className="font-display font-bold tracking-tighter text-xl">MARUCOF</span>
          <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer group">
             <span className="w-full h-0.5 bg-black transition-all group-hover:w-1/2 ml-auto"></span>
             <span className="w-full h-0.5 bg-black"></span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-between px-6 pb-12 pt-4 relative z-10">
           <div className="mt-12">
             <Section delay={100}>
               <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
                 <span className="w-8 h-px bg-black"></span>
                 Personal Design Tutor
               </h2>
             </Section>
             <Section delay={300}>
               <h1 className="font-display text-[6rem] leading-[0.8] font-black tracking-tighter break-words -ml-1">
                 MARU<br/>
                 COF<br/>
                 <span className="text-4xl tracking-tight font-light font-sans block mt-6 border-l-4 border-black pl-6 py-2">
                   Design<br/>School
                 </span>
               </h1>
             </Section>
           </div>

           <div className="mb-8">
             <Section delay={600}>
               <div className="w-full h-px bg-black mb-8 origin-left transform scale-x-100 opacity-20"></div>
               <p className="font-serif text-xl leading-relaxed mb-10 font-medium">
                 デザインは、<br/>
                 整えること。<br/>
                 伝えること。<br/>
                 そして、魅せること。
               </p>
               {/* Fixed Scroll Text orientation */}
               <div className="flex flex-col items-center gap-2 animate-bounce items-start">
                  <div className="h-16 w-px bg-black"></div>
                  <span className="text-[10px] tracking-widest uppercase">Scroll</span>
               </div>
             </Section>
           </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-6 relative z-10 bg-white text-black border-t border-black">
          <Section>
             <div className="relative mb-16">
               <h2 className="font-display text-8xl font-bold leading-none opacity-5 absolute -top-10 -left-6 select-none pointer-events-none break-all">
                 PHILO<br/>SOPHY
               </h2>
               <h2 className="font-display text-4xl font-bold relative z-10">PHILOSOPHY</h2>
             </div>
          </Section>
          
          <Section delay={200}>
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-display text-5xl font-bold opacity-10 group-hover:opacity-100 transition-opacity">01</span>
                  <h3 className="text-xl font-bold font-display tracking-wide uppercase">Grid System</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-loose pl-14 border-l border-black/10">
                  美しさには数学的な根拠があります。感性だけでなく、ロジックに基づいたレイアウトを学びます。
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-display text-5xl font-bold opacity-10 group-hover:opacity-100 transition-opacity">02</span>
                  <h3 className="text-xl font-bold font-display tracking-wide uppercase">Typography</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-loose pl-14 border-l border-black/10">
                  文字は読むものであり、見るものです。書体の選び方から、文字組みの微細な調整まで徹底的に。
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-display text-5xl font-bold opacity-10 group-hover:opacity-100 transition-opacity">03</span>
                  <h3 className="text-xl font-bold font-display tracking-wide uppercase">White Space</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-loose pl-14 border-l border-black/10">
                  余白は「空き」ではなく「意図された空間」です。間の取り方でデザインの品格は決まります。
                </p>
              </div>
            </div>
          </Section>
        </section>

        {/* Curriculum Preview */}
        <section className="py-24 px-6 relative z-10 border-t border-black">
          <Section>
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-display text-5xl font-bold">COURSE</h2>
              <span className="text-[10px] font-bold tracking-widest bg-black text-white px-2 py-1">カリキュラム</span>
            </div>
          </Section>

          <div className="space-y-8">
             <Section delay={100}>
               <div className="group cursor-pointer border border-black p-6 hover:bg-black hover:text-white transition-all duration-300">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="text-3xl font-bold font-display">BASIC</h3>
                   <span className="font-mono text-xs border border-current px-2 rounded-full">01</span>
                 </div>
                 <p className="text-xs opacity-70 leading-relaxed mb-6">ツールの基礎操作から、デザインの基本原則（近接・整列・反復・対比）までをマスターします。</p>
                 <div className="flex justify-end">
                   <span className="text-[10px] uppercase tracking-widest group-hover:underline">View Detail -></span>
                 </div>
               </div>
             </Section>

             <Section delay={200}>
               <div className="group cursor-pointer border border-black p-6 hover:bg-black hover:text-white transition-all duration-300">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="text-3xl font-bold font-display">ADVANCE</h3>
                   <span className="font-mono text-xs border border-current px-2 rounded-full">02</span>
                 </div>
                 <p className="text-xs opacity-70 leading-relaxed mb-6">実案件を想定したバナー制作、LPデザイン、印刷物の入稿データ作成など実践的なスキルを。</p>
                 <div className="flex justify-end">
                    <span className="text-[10px] uppercase tracking-widest group-hover:underline">View Detail -></span>
                 </div>
               </div>
             </Section>

             <Section delay={300}>
               <div className="group cursor-pointer border border-black p-6 hover:bg-black hover:text-white transition-all duration-300">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="text-3xl font-bold font-display">PRO</h3>
                   <span className="font-mono text-xs border border-current px-2 rounded-full">03</span>
                 </div>
                 <p className="text-xs opacity-70 leading-relaxed mb-6">ブランディング、ロゴデザイン、そしてフリーランスとして独立するためのビジネススキルまで。</p>
                 <div className="flex justify-end">
                    <span className="text-[10px] uppercase tracking-widest group-hover:underline">View Detail -></span>
                 </div>
               </div>
             </Section>
          </div>
        </section>

        {/* Big Text Transition */}
        <section className="py-16 overflow-hidden bg-white text-black border-y border-black relative">
           <div className="absolute inset-0 bg-black/5 skew-y-3 scale-110 transform"></div>
           <div className="whitespace-nowrap font-display text-[8rem] font-bold tracking-tighter select-none animate-marquee opacity-100">
             DESIGN IS INTELLIGENCE MADE VISIBLE — 
           </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6 relative z-10 bg-white">
          <Section>
             <h2 className="font-display text-7xl font-bold mb-16 text-center tracking-tighter">PRICE</h2>
          </Section>

          <Section delay={200}>
            <div className="border-2 border-black p-8 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-4 py-1 uppercase tracking-widest font-bold">
                Recommended
              </div>
              <h3 className="text-center font-serif text-xl font-bold mb-4 mt-2">マンツーマン指導</h3>
              <div className="text-center mb-8 pb-8 border-b border-dashed border-black">
                <span className="text-5xl font-display font-bold">¥5,000</span>
                <span className="text-xs font-bold text-gray-500 ml-2">/ 60min</span>
              </div>
              <ul className="space-y-4 text-sm mb-10 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
                  完全オーダーメイドカリキュラム
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
                  チャットでの質問無制限
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
                  ポートフォリオ添削付き
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
                  就職・転職相談
                </li>
              </ul>
              <MagneticButton className="w-full">
                Plan Detail
              </MagneticButton>
            </div>
          </Section>
        </section>

        {/* CTA / Footer */}
        <footer className="bg-white text-black px-6 py-20 relative overflow-hidden border-t-2 border-black">
          {/* Grid lines for footer */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute left-[20%] top-0 bottom-0 w-px bg-black" />
            <div className="absolute right-[20%] top-0 bottom-0 w-px bg-black" />
            <div className="absolute top-[50%] left-0 right-0 h-px bg-black" />
          </div>

          <Section>
            <div className="text-center mb-16 relative z-10">
              <h2 className="font-display text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
                START<br/>CREATING
              </h2>
              <p className="text-sm font-medium text-gray-600 mb-10 font-serif leading-loose">
                あなたのクリエイティブな旅を、<br/>
                ここから始めましょう。
              </p>
              <MagneticButton variant="solid" className="bg-black text-white hover:bg-gray-800">
                FREE CONSULTATION
              </MagneticButton>
            </div>
          </Section>

          <div className="border-t border-black pt-8 flex flex-col items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
             <div className="flex gap-8">
               <a href="#" className="hover:line-through decoration-1 transition-all">Instagram</a>
               <a href="#" className="hover:line-through decoration-1 transition-all">Twitter</a>
             </div>
             <p className="opacity-50">&copy; 2024 MARUCOF DESIGN SCHOOL</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;