import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBookOpen, HiClock, HiStar, HiCheckCircle } from 'react-icons/hi';
import { courses } from '../data/courses';

export default function Courses() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredCourses = selectedFilter === 'ALL'
    ? courses
    : courses.filter((c) => c.level.toUpperCase() === selectedFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header matching reference Screen 02 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto pt-8 pb-10 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Our Courses
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Learn Graphite Art<br />Step by Step
          </h1>
          <p className="text-gray-500 text-base">
            Structured courses designed for every skill level from fundamental pencil control to hyper-realism.
          </p>
        </motion.div>

        {/* ── Filter Pills ── */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {['ALL', 'BEGINNER', 'ADVANCED', 'MASTERCLASS'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {filter === 'ALL' ? 'All Courses' : filter}
            </button>
          ))}
        </div>

        {/* ── 3 White Cards matching reference with Framer Motion ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Level badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[10px] font-bold px-3 py-1 rounded tracking-widest uppercase shadow-md"
                        style={{
                          background: c.level === 'MASTERCLASS' ? '#1e3a5f' : '#2563eb',
                          color: '#fff',
                        }}
                      >
                        {c.level}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                      <HiStar className="text-amber-400" /> 4.9
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1 space-y-3">
                    <h2 className="font-serif text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {c.title}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed">{c.description}</p>

                    <div className="space-y-1.5 pt-1">
                      {c.highlights?.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <HiCheckCircle className="text-blue-600 shrink-0 text-sm" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100 mt-2">
                      <span className="flex items-center gap-1">
                        <HiBookOpen className="text-blue-600" /> {c.lessons} Lessons
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <HiClock className="text-blue-600" /> {c.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Tuition</span>
                      <span className="font-serif text-2xl font-bold text-gray-900">
                        ₹{c.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    {c.originalPrice && (
                      <div className="text-right">
                        <span className="text-xs text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded mr-1">
                          {Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100)}% OFF
                        </span>
                        <span className="text-sm text-gray-400 line-through block mt-0.5">
                          ₹{c.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      to={`/course/${c.id}`}
                      className="btn-secondary text-xs py-2.5 text-center font-semibold"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/enroll/${c.id}`}
                      className="btn-primary text-xs py-2.5 text-center font-semibold"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
