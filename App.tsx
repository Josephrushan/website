import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import PrivacyPolicyModule from './components/PrivacyPolicyModule';
import RefundPolicyModule from './components/RefundPolicyModule';
import { 
  Download, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Smartphone, 
  ArrowRight, 
  Mail, 
  Phone, 
  Menu,
  X,
  Plus,
  Zap,
  Camera,
  LayoutGrid,
  Megaphone,
  Monitor,
  Shield,
  ChevronRight,
  CheckCircle2,
  Globe,
  Star,
  MessageCircle
} from 'lucide-react';

// --- Page Components ---

const Footer = ({ setActiveTab }: { setActiveTab: (t: string) => void }) => (
  <footer className="bg-brand-navy text-white py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
      <div className="space-y-6">
        <Logo white size="md" />
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
          The next-generation educational bridge connecting parents, teachers, and students in a secure digital campus.
        </p>
      </div>
      <div>
        <h4 className="font-medium uppercase tracking-widest text-[10px] text-brand-teal mb-6">Platform</h4>
        <ul className="space-y-4 text-sm font-medium text-slate-300">
          <li><button onClick={() => setActiveTab('how-it-works')} className="hover:text-white transition-colors">How it Works</button></li>
          <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">Our Story</button></li>
          <li><button onClick={() => setActiveTab('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium uppercase tracking-widest text-[10px] text-brand-teal mb-6">Support</h4>
        <ul className="space-y-4 text-sm font-medium text-slate-300">
          <li><button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
          <li><button onClick={() => setActiveTab('refund-policy')} className="hover:text-white transition-colors">Refund Policy</button></li>
          <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors">Privacy Center</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium uppercase tracking-widest text-[10px] text-brand-teal mb-6">Connect</h4>
        <div className="flex gap-4">
          <a href="mailto:info@educater.co.za" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer group">
            <Mail className="w-5 h-5 text-brand-teal group-hover:text-brand-navy" />
          </a>
          <a href="tel:0816884617" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer group">
            <Smartphone className="w-5 h-5 text-brand-teal group-hover:text-brand-navy" />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500">© 2026 Educater. All Rights Reserved.</p>
      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500 italic">Designed for Institutional Excellence</p>
    </div>
  </footer>
);

const Home = ({ setActiveTab, openDownloadModal }: { setActiveTab: (t: string) => void, openDownloadModal: () => void }) => {
  const FeatureItem = ({ icon: Icon, title, desc, align = 'left' }: { icon: any, title: string, desc: string, align?: 'left' | 'right' }) => (
    <div className={`flex flex-col items-center text-center ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} space-y-3`}>
      <div className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm text-brand-teal transition-transform hover:scale-110`}>
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{title}</h4>
      <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed max-w-[240px] md:max-w-[200px]">{desc}</p>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-start px-6 overflow-hidden bg-white pt-12 pb-20 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 backdrop-blur-md rounded-full border border-slate-100 mb-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">The Institution Reimagined</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight uppercase mb-8">
            The Digital School <span className="text-brand-teal">Experience.</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
            Educater is a secure, verified digital school ecosystem featuring <strong>automated yearbooks</strong>, tutoring resources, and direct parent-teacher messaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 mb-16 md:mb-20">
            <button onClick={openDownloadModal} className="px-10 py-5 bg-brand-navy text-white rounded-[2rem] font-medium uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              Get Started <ArrowRight className="w-4 h-4 text-brand-teal" />
            </button>
            <button onClick={() => setActiveTab('pricing')} className="px-10 py-5 bg-slate-50 text-slate-600 border border-slate-200 rounded-[2rem] font-medium uppercase tracking-widest text-[11px] hover:bg-slate-100 transition-all flex items-center justify-center gap-3">
              View Pricing
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center relative z-10 w-full">
          {/* Top Stack on Mobile */}
          <div className="flex flex-col gap-10 md:gap-16 items-center order-2 md:order-1">
            <FeatureItem icon={Camera} title="Auto Yearbook" desc="Daily moments harvested automatically into a stunning annual archive." align="right" />
            <FeatureItem icon={BookOpen} title="Tutoring Hub" desc="Premium subject resources and video guides for every grade instantly." align="right" />
          </div>

          <div className="relative flex justify-center order-1 md:order-2 py-4 md:py-0 scale-75 md:scale-100">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-teal/5 blur-[80px] rounded-full scale-150 -z-10"></div>
              <img src="https://firebasestorage.googleapis.com/v0/b/websitey-9f8e4.firebasestorage.app/o/educater%20screen.png?alt=media&token=e794e768-6c78-4867-bb8f-ae3c82eea16f" className="w-full max-w-[200px] md:max-w-[300px] h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] mix-blend-multiply" alt="App Preview" />
            </div>
          </div>

          {/* Bottom Stack on Mobile */}
          <div className="flex flex-col gap-10 md:gap-16 items-center order-3">
            <FeatureItem icon={MessageCircle} title="Grade Chats" desc="Strictly grade-specific community collaboration and classmate chats." />
            <FeatureItem icon={Mail} title="Direct Messaging" desc="Safe, official Parent-Teacher channels for focused institutional communication." />
          </div>
        </div>
      </section>

      {/* Pricing Section (Mini) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy uppercase tracking-tighter">Simple. Affordable. <span className="text-brand-teal">Direct.</span></h2>
           <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-semibold text-brand-navy tracking-tighter">
                50 <span className="text-2xl md:text-4xl text-brand-teal font-bold tracking-widest uppercase">RAND</span>
              </div>
              <p className="text-lg font-bold uppercase tracking-widest text-slate-400 mt-2">Per Month / Per Child</p>
           </div>
           <p className="text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
             Bypassing App Store commissions to keep excellence affordable for every family.
           </p>
           <button onClick={() => setActiveTab('pricing')} className="px-10 py-4 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-widest text-[9px]">Learn About Pricing</button>
        </div>
      </section>
    </div>
  );
};
/* ... remainder of App.tsx remains unchanged ... */

const Pricing = ({ openDownloadModal }: { openDownloadModal: () => void }) => (
  <div className="animate-fade-in max-w-7xl mx-auto py-32 px-6 space-y-24">
    <div className="text-center space-y-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Fair Institutional Pricing</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight uppercase">
        Simple. Affordable. <span className="text-brand-teal">Direct.</span>
      </h2>
      
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-8xl md:text-[140px] font-semibold text-brand-navy leading-none tracking-tighter">
          50 <span className="text-2xl md:text-4xl text-brand-teal font-bold uppercase tracking-widest">RAND</span>
        </div>
        <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-slate-400 mt-4">Per Month / Per Child</p>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-50 p-12 rounded-[4rem] border border-slate-200 text-left space-y-8 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
           <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center text-brand-teal"><Zap className="w-5 h-5" /></div>
           <h3 className="text-xl font-bold uppercase tracking-tight">App Store Independence</h3>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed">
          We specifically designed Educater to be installed as a PWA, bypassing the 30% App Store fees. This makes the platform significantly more affordable for you and your family while maintaining world-class performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="flex items-center gap-3 font-bold text-slate-900 uppercase text-[10px] tracking-widest"><CheckCircle2 className="text-brand-teal w-4 h-4" /> No App Store markups</div>
          <div className="flex items-center gap-3 font-bold text-slate-900 uppercase text-[10px] tracking-widest"><CheckCircle2 className="text-brand-teal w-4 h-4" /> Grade-locked chat included</div>
          <div className="flex items-center gap-3 font-bold text-slate-900 uppercase text-[10px] tracking-widest"><CheckCircle2 className="text-brand-teal w-4 h-4" /> Auto Yearbook profile</div>
          <div className="flex items-center gap-3 font-bold text-slate-900 uppercase text-[10px] tracking-widest"><CheckCircle2 className="text-brand-teal w-4 h-4" /> Full Tutoring Hub access</div>
        </div>
      </div>

      <button onClick={openDownloadModal} className="mt-12 px-16 py-8 bg-brand-navy text-white rounded-[3rem] font-bold uppercase tracking-[0.2em] text-[12px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
        Start Free Trial
      </button>
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="animate-fade-in max-w-7xl mx-auto py-32 px-6">
    <div className="text-center mb-32 space-y-6">
      <h2 className="text-4xl md:text-7xl font-semibold text-brand-navy uppercase tracking-tighter">How it <br /><span className="text-brand-teal">Works.</span></h2>
      <p className="text-slate-400 font-medium uppercase tracking-[0.4em] text-[10px]">Connected Classroom Experience</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
      <div className="bg-brand-navy p-10 rounded-[3.5rem] text-white space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-tight text-brand-teal">For Parents</h3>
        <ul className="space-y-4 text-slate-300 text-sm font-medium">
          <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Direct Message Teachers securely</li>
          <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> View grade-locked visual feeds</li>
          <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Instant absence & health alerts</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-10 rounded-[3.5rem] border-2 border-slate-100 text-brand-navy space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-tight">For Students</h3>
        <ul className="space-y-4 text-slate-500 text-sm font-medium">
          <li className="flex gap-3"><Star className="w-4 h-4 text-brand-navy" /> Access Tutoring Resources (Notes/Videos)</li>
          <li className="flex gap-3"><Star className="w-4 h-4 text-brand-navy" /> Join Grade-Specific Community Chats</li>
          <li className="flex gap-3"><Star className="w-4 h-4 text-brand-navy" /> Track homework and assignments</li>
        </ul>
      </div>

      <div className="bg-white p-10 rounded-[3.5rem] border-2 border-slate-100 shadow-sm text-brand-navy space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-tight">For Schools</h3>
        <ul className="space-y-4 text-slate-500 text-sm font-medium">
          <li className="flex gap-3"><Zap className="w-4 h-4 text-brand-teal" /> Fully Automated Digital Yearbooks</li>
          <li className="flex gap-3"><Zap className="w-4 h-4 text-brand-teal" /> Institutional bulletin broadcasts</li>
          <li className="flex gap-3"><Zap className="w-4 h-4 text-brand-teal" /> Multi-tenant school isolation</li>
        </ul>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    console.log('Active Tab:', activeTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'refund-policy', label: 'Refund Policy' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleGotIt = () => {
    setIsDownloadModalOpen(false);
    window.location.href = "https://app.educater.co.za";
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-brand-navy">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <button onClick={() => setActiveTab('home')} className="hover:opacity-80 transition-opacity">
            <Logo size="md" />
          </button>
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => setActiveTab(link.id)}
                className={`text-[10px] font-medium uppercase tracking-widest transition-all ${activeTab === link.id ? 'text-brand-teal' : 'text-slate-400 hover:text-brand-navy'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setIsDownloadModalOpen(true)}
              className="px-6 py-3 bg-brand-navy text-white rounded-full font-black uppercase tracking-widest text-[9px] shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-brand-teal" /> Download App
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-3 bg-slate-50 rounded-xl text-brand-navy shadow-sm">
            {isMenuOpen ? <X className="w-6 h-6 text-brand-teal" /> : <Menu className="w-6 h-6 text-brand-teal" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-24 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl animate-slide-up">
             {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => { setActiveTab(link.id); setIsMenuOpen(false); }}
                className={`text-lg font-medium uppercase tracking-widest text-left ${activeTab === link.id ? 'text-brand-teal' : 'text-slate-400'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { setIsDownloadModalOpen(true); setIsMenuOpen(false); }}
              className="w-full py-5 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5 text-brand-teal" /> Download App
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-24">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} openDownloadModal={() => setIsDownloadModalOpen(true)} />}
        {activeTab === 'about' && <div className="animate-fade-in max-w-7xl mx-auto py-32 px-6 space-y-12">
            <h2 className="text-5xl md:text-7xl font-semibold text-brand-navy leading-none tracking-tighter uppercase">Our Vision <br /><span className="text-brand-teal">Reimagined.</span></h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              Educater unify fragmented school communication. We built a single source of truth—a secure digital campus where every memory is preserved and every student is supported.
            </p>
        </div>}
        {activeTab === 'how-it-works' && <HowItWorks />}
        {activeTab === 'pricing' && <Pricing openDownloadModal={() => setIsDownloadModalOpen(true)} />}
        {activeTab === 'contact' && <div className="animate-fade-in max-w-7xl mx-auto py-32 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12 text-center lg:text-left">
            <h2 className="text-6xl font-semibold text-brand-navy uppercase tracking-tighter leading-none">Let's connect <br />your <span className="text-brand-teal">Campus.</span></h2>
            <div className="space-y-6">
              <a href="mailto:info@educater.co.za" className="flex items-center justify-center lg:justify-start gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-brand-navy text-brand-teal rounded-2xl flex items-center justify-center group-hover:bg-brand-teal group-hover:text-brand-navy transition-all shrink-0"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Institutional Inquiries</p>
                  <p className="text-lg font-semibold text-brand-navy uppercase">info@educater.co.za</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white p-12 md:p-16 rounded-[4rem] border-2 border-slate-100 shadow-2xl">
             <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent!"); }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-medium uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input required type="text" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-brand-teal focus:bg-white rounded-2xl outline-none font-medium text-brand-navy uppercase tracking-widest transition-all" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-medium uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input required type="email" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-brand-teal focus:bg-white rounded-2xl outline-none font-medium text-brand-navy uppercase tracking-widest transition-all" placeholder="john@school.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-medium uppercase tracking-widest text-slate-400 ml-4">Message</label>
                  <textarea required rows={4} className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-brand-teal focus:bg-white rounded-2xl outline-none font-medium transition-all resize-none" placeholder="Tell us about your school..." />
                </div>
                <button type="submit" className="w-full py-6 bg-brand-navy text-white rounded-2xl font-medium uppercase tracking-[0.2em] text-[11px] shadow-2xl active:scale-95 transition-all">Send Inquiry</button>
             </form>
          </div>
        </div>}
        {activeTab === 'privacy' && (
          <>
            {console.log('Rendering PrivacyPolicyModule')}
            <PrivacyPolicyModule />
          </>
        )}
        {activeTab === 'refund-policy' && <div className="max-w-5xl mx-auto py-32 px-6 space-y-12">
            <h2 className="text-4xl md:text-6xl font-semibold text-brand-navy uppercase tracking-tighter text-center">Refund <span className="text-brand-teal">Policy.</span></h2>
            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-200 text-center md:text-left space-y-8">
              <p className="text-slate-500 font-medium leading-relaxed">
                We ensure total fairness and standard industry terms.
              </p>
              <ul className="space-y-8">
                <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  <CheckCircle2 className="w-8 h-8 text-brand-teal shrink-0" />
                  <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed"><strong>5-Day Minimum Use:</strong> Refund requests can only be initiated after 5 full days of account use to ensure a complete evaluation of the service.</p>
                </li>
                <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  <CheckCircle2 className="w-8 h-8 text-brand-teal shrink-0" />
                  <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed"><strong>Official Channel:</strong> All refund requests must be emailed to <strong>info@educater.co.za</strong> with your details.</p>
                </li>
              </ul>
            </div>
        </div>}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Install Modal */}
      {isDownloadModalOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-slate-900/90 backdrop-blur-xl flex items-start justify-center p-4 sm:p-10 overflow-y-auto animate-fade-in" 
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-scale-up my-auto" 
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-brand-navy p-10 md:p-12 text-center relative">
              <button onClick={() => setIsDownloadModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
                <X className="w-7 h-7" />
              </button>
              
              <div className="flex justify-center mb-6">
                <Logo white size="sm" />
              </div>

              <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-brand-teal" />
              </div>
              <h2 className="text-3xl font-semibold text-white mb-3 uppercase tracking-tighter">Install Educater.</h2>
              <p className="text-slate-400 text-sm font-medium max-w-sm mx-auto">
                Educater is a PWA. Install it directly for the full institutional experience.
              </p>
            </div>
            
            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">iOS (iPhone)</h3>
                  </div>
                  <ol className="space-y-3 text-[10px] font-medium text-slate-500">
                    <li>1. Open app in Safari</li>
                    <li>2. Tap 'Share' icon</li>
                    <li>3. Tap 'Add to Home Screen'</li>
                  </ol>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Monitor className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">Android</h3>
                  </div>
                  <ol className="space-y-3 text-[10px] font-medium text-slate-500">
                    <li>1. Open in Chrome</li>
                    <li>2. Tap menu (3 dots)</li>
                    <li>3. Tap 'Install App'</li>
                  </ol>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">Windows</h3>
                  </div>
                  <ol className="space-y-3 text-[10px] font-medium text-slate-500">
                    <li>1. Open in Edge/Chrome</li>
                    <li>2. Tap Install Icon</li>
                    <li>3. Add to Taskbar</li>
                  </ol>
                </div>
            </div>

            <div className="p-8 md:p-10 border-t border-slate-100 flex flex-col items-center gap-4">
               <button 
                onClick={handleGotIt}
                className="w-full py-5 bg-brand-teal text-brand-navy rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
               >
                 Got it! Take me there <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Badge */}
      <div className="fixed bottom-6 right-6 z-[60] pointer-events-none sm:bottom-10 sm:right-10">
        <div className="bg-brand-navy/90 backdrop-blur-md text-white px-5 py-3 rounded-[2rem] border border-white/10 shadow-2xl flex items-center gap-3 animate-fade-in pointer-events-auto">
          <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-brand-navy" strokeWidth={3} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[8px] font-black uppercase tracking-widest text-brand-teal leading-none mb-1">Encrypted by Firebase</span>
            <span className="text-[10px] font-bold text-white/80 leading-none">Total Institutional Safety</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
