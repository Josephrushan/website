
import React from 'react';
import { Shield, Lock, Server, UserCheck, CheckCircle2, FileText } from 'lucide-react';

const PrivacyPolicyModule: React.FC = () => {
  const sections = [
    {
      icon: Lock,
      title: "Firebase Encryption",
      content: "All data is encrypted using military-grade AES-256 protocols provided by Google Firebase. Your information is safe and locked."
    },
    {
      icon: Shield,
      title: "School Isolation",
      content: "Strict multi-tenant architecture ensures that School A can never see School B's data. Each school exists in its own secure silo."
    },
    {
      icon: UserCheck,
      title: "Grade Isolation",
      content: "Privacy extends within the school: Grade 1 users cannot see Grade 2. Communication and photos are strictly limited to your assigned grade."
    },
    {
      icon: Server,
      title: "Photo Privacy",
      content: "Classroom memories are exclusively visible to members of that specific grade. Nobody else but the verified grade members can see photos."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-32 pt-10 px-6">
      <div className="relative bg-[#072432] rounded-[3.5rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl text-left">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 uppercase text-white">Privacy <span className="text-brand-teal">Protocols.</span></h2>
        <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
          We use Google Firebase to ensure your data is encrypted and completely isolated. Total safety for every school and every student.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {sections.map((section, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-teal flex items-center justify-center mb-8">
              <section.icon className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 uppercase tracking-tight mb-4">{section.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyModule;
