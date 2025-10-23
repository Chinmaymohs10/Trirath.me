import { Briefcase, Award, TrendingUp, Users } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'CEO & Founder',
    company: 'Mohs10 Technologies',
    period: '2020 - Present',
    description: 'Leading innovative tech solutions company',
    highlights: [
      'Empowering businesses and communities with cutting-edge digital transformation solutions',
      'Building scalable platforms that impact millions of lives across healthcare, education, and enterprise sectors'
    ],
    icon: 'briefcase'
  },
  {
    id: 2,
    role: 'Director of Quality Assurance',
    company: 'General Electric',
    period: '2018 - 2020',
    description: 'Led global QA teams and initiatives',
    highlights: [
      'Managed international quality assurance operations',
      'Implemented enterprise-wide testing frameworks'
    ],
    icon: 'award'
  },
  {
    id: 3,
    role: 'Consultant',
    company: 'GENPACT',
    period: '2015 - 2018',
    description: 'Business process consulting',
    highlights: [
      'Optimized business operations for Fortune 500 clients',
      'Delivered strategic consulting for process improvement'
    ],
    icon: 'trending'
  },
  {
    id: 4,
    role: 'Multiple Leadership Roles',
    company: 'Various Organizations',
    period: '2010 - 2015',
    description: 'Building expertise across domains',
    highlights: [
      'Cross-functional leadership experience',
      'Built foundation in tech and business operations'
    ],
    icon: 'users'
  }
];

const iconMap = {
  briefcase: Briefcase,
  award: Award,
  trending: TrendingUp,
  users: Users
};

export default function ExperienceSection() {
  return (
   <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6 overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaC0ydjJoMnYtMmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMiAyaDJ2LTJoLTJ2MnptLTQgMHYyaC0ydjJoMnYtMmgydi0yaC0yem0yLTJoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyem0tMiAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

  <div className="container mx-auto max-w-7xl relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      {/* <div className="inline-block mb-6">
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          PROFESSIONAL JOURNEY
        </span>
      </div> */}
      <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
        Experience &{' '}
        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Achievements
        </span>
      </h2>
      <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-light">
        A track record of driving innovation, building high-performing teams, and delivering transformative solutions
      </p>
    </div>

    {/* Experiences */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {experiences.map((exp, index) => {
        const Icon = iconMap[exp.icon];

        return (
          <div
            key={exp.id}
            className="group relative"
            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 h-full">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm mb-1">{exp.company}</p>
                      <p className="text-slate-500 text-xs font-medium tracking-wide">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-slate-700 font-medium mb-4 text-sm">{exp.description}</p>

                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover/item:scale-150 transition-transform"></div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed flex-1">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  <style>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-white mb-2">{number}</div>
      <div className="text-cyan-100 text-sm font-medium">{label}</div>
    </div>
  );
}
