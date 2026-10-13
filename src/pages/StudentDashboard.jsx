import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPlay, HiLockClosed, HiCheck } from 'react-icons/hi';

const lessons = [
  { id: 1, title: 'Hair Texture Rendering',      dur: '28 min',      status: 'completed' },
  { id: 2, title: 'Beard Shading Techniques',    dur: '32 min',      status: 'current'   },
  { id: 3, title: 'Full Portrait (Part 1)',       dur: '41 min',      status: 'upcoming'  },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-0 pb-16">

      {/* ── Dashboard top navbar (PRAMOK brand) ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/logo.png" alt="Pramok" className="w-9 h-9 rounded-full object-contain bg-white border border-gray-200" />
          </Link>
          <div className="leading-none">
            <span className="font-serif text-sm font-bold text-gray-900 block">PRAMOK</span>
            <span className="text-[0.55rem] text-gray-400 uppercase tracking-widest font-semibold block">Art Academy</span>
          </div>
        </div>
        <Link to="/" className="text-xs text-gray-400 hover:text-gray-700">← Back to site</Link>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 space-y-6">

        {/* ── Profile Card matching reference Screen 06 ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
              <img src="/images/hero-portrait.jpg" alt="Arjun" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">Welcome Back, Arjun</h1>
              <p className="text-xs text-gray-500">Continue your art journey.</p>
            </div>
          </div>
          <Link to="/courses"
            className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors">
            All Courses
          </Link>
        </div>

        {/* ── Tabs matching reference Screen 06 ── */}
        <div className="flex gap-6 border-b border-gray-200 px-1">
          {['courses', 'certificates', 'profile'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold capitalize transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-500 hover:text-gray-800'
              }`}>
              {tab === 'courses' ? 'My Courses' : tab === 'certificates' ? 'Certificates' : 'Profile'}
            </button>
          ))}
        </div>

        {/* ── Course Progress Card matching reference ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
          <div className="flex gap-4 items-center">
            <img src="/images/course-masterclass.jpg" alt="Masterclass"
                 className="w-20 h-20 rounded-xl object-cover shrink-0 border border-gray-200" />
            <div className="flex-1 min-w-0 space-y-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider text-white"
                    style={{ background: '#1e3a5f' }}>
                MASTERCLASS
              </span>
              <h2 className="font-serif text-lg font-bold text-gray-900">Realism Masterclass</h2>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>26 of 40 lessons completed</span>
                <span className="font-bold text-blue-700 font-mono ml-auto">65%</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div className="h-2.5 rounded-full bg-blue-600 transition-all duration-700" style={{ width: '65%' }} />
          </div>

          {/* Continue button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer flex items-center justify-center gap-2">
            Continue Learning →
          </button>
        </div>

        {/* ── Recent Lessons matching reference Screen 06 ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <h3 className="font-serif text-base font-bold text-gray-900">Recent Lessons</h3>
          <div className="space-y-2.5">
            {lessons.map((lesson) => (
              <div key={lesson.id}
                className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                    <img
                      src={lesson.id === 1 ? '/images/gallery-hat.jpg' : lesson.id === 2 ? '/images/course-advanced.jpg' : '/images/hero-portrait.jpg'}
                      alt={lesson.title}
                      className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{lesson.title}</h4>
                    <p className="text-xs text-gray-400">Lesson {lesson.id + 11} · {lesson.dur}</p>
                  </div>
                </div>
                {/* Status icon */}
                {lesson.status === 'completed' && (
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    <HiCheck />
                  </span>
                )}
                {lesson.status === 'current' && (
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs flex-shrink-0">
                    <HiPlay className="ml-0.5" />
                  </span>
                )}
                {lesson.status === 'upcoming' && (
                  <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs flex-shrink-0">
                    <HiLockClosed />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
