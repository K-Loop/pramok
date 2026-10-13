import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiPlay, HiBookOpen, HiClock, HiAcademicCap, HiChatAlt2, HiCheck } from 'react-icons/hi';
import { getCourseById } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const course = getCourseById(id) || getCourseById('masterclass');
  const [activeThumb, setActiveThumb] = useState(0);

  const thumbs = [
    '/images/course-masterclass.jpg',
    '/images/gallery-eye.jpg',
    '/images/gallery-dog.jpg',
  ];

  const learns = [
    'Realistic portrait drawing workflow from reference to finish',
    'Skin texture, micro pores, hair, eyes and wrinkles',
    'Charcoal & graphite techniques for high contrast realism',
    'Composition & tonal planning and light understanding',
    'Live demonstrations & assignments with critique',
    'Full portrait (reference to final) step by step',
  ];

  const curriculum = [
    { n: 1, title: 'Introduction & Materials', lessons: course.curriculum?.[0]?.lessons || 5 },
    { n: 2, title: 'Basic Shapes & Shading', lessons: course.curriculum?.[1]?.lessons || 6 },
    { n: 3, title: 'Facial Proportions', lessons: course.curriculum?.[2]?.lessons || 5 },
    { n: 4, title: 'Eyes, Nose, Lips (Detailed)', lessons: course.curriculum?.[3]?.lessons || 6 },
    { n: 5, title: 'Hair & Texture Rendering', lessons: course.curriculum?.[4]?.lessons || 8 },
    { n: 6, title: 'Full Portrait (Real Time)', lessons: course.curriculum?.[5]?.lessons || 10 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-8 pb-6 text-xs text-gray-400 flex items-center gap-2"
        >
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <span>/</span>
          <span className="text-gray-700 font-semibold">{course.title}</span>
        </motion.div>

        {/* ── 2 column layout matching reference Screen 03 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >

          {/* ── LEFT: Video + What You'll Learn + Curriculum (5 cols) ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Video Player Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-2 space-y-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 cursor-pointer group">
                <img src={thumbs[activeThumb]} alt="Preview"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <HiPlay className="text-white text-2xl ml-0.5" />
                  </div>
                </div>
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-3 gap-2">
                {thumbs.map((t, i) => (
                  <button key={i} onClick={() => setActiveThumb(i)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeThumb === i ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                    <img src={t} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="font-serif text-lg font-bold text-gray-900">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learns.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <HiCheck className="text-xs" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="font-serif text-lg font-bold text-gray-900">Course Curriculum</h2>
              <div className="space-y-2">
                {curriculum.map((m) => (
                  <div key={m.n}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm">
                    <span className="font-semibold text-gray-800">{m.n}. {m.title}</span>
                    <span className="text-xs text-blue-600 font-medium">{m.lessons} lessons</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Price + Enroll + Instructor (5 cols) ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Sticky Price Box */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-5 lg:sticky lg:top-24">
              {/* Badge + Title */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest text-white"
                      style={{ background: course.level === 'MASTERCLASS' ? '#1e3a5f' : '#2563eb' }}>
                  {course.level}
                </span>
                <h1 className="font-serif text-2xl font-bold text-gray-900 leading-snug">{course.title}</h1>
                <p className="text-sm text-gray-500">{course.subtitle}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl font-bold text-gray-900">
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-gray-400 line-through">₹9,999</span>
                <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">20% OFF</span>
              </div>

              {/* Enroll Button */}
              <Link to={`/enroll/${course.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3.5 rounded-xl text-center transition-all shadow-md shadow-blue-600/25 cursor-pointer">
                Enroll Now
              </Link>

              {/* 4 Stats */}
              <div className="grid grid-cols-4 gap-1 pt-4 border-t border-gray-100 text-center">
                {[
                  { icon: <HiBookOpen />, label: '40+ Lessons' },
                  { icon: <HiClock />, label: 'Lifetime Access' },
                  { icon: <HiAcademicCap />, label: 'Certificate' },
                  { icon: <HiChatAlt2 />, label: 'Doubt Support' },
                ].map((s) => (
                  <div key={s.label} className="space-y-1">
                    <div className="text-blue-600 text-lg mx-auto w-fit">{s.icon}</div>
                    <p className="text-[10px] font-semibold text-gray-700 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* About Instructor */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="font-serif text-base font-bold text-gray-900">About the Instructor</h2>
              <div className="flex items-start gap-3">
                <img src="/images/hero-portrait.jpg" alt="Pramok"
                     className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shrink-0" />
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900">Pramok</h3>
                  <p className="text-xs text-blue-600 font-medium">Realistic Pencil Artist & Art Educator</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1.5">
                    Helping 4200+ students across the globe transform their art journey through step by step structured learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
