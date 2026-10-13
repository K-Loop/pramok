import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiStar, HiBookOpen, HiClock, HiCheckCircle, HiCheck } from 'react-icons/hi';
import { courses } from '../data/courses';

const gallery = [
  { src: '/images/gallery-eye.jpg',       alt: 'Detailed Eye Study' },
  { src: '/images/course-masterclass.jpg', alt: 'Elderly Realistic Portrait' },
  { src: '/images/hero-portrait.jpg',      alt: 'Portrait Drawing Study' },
  { src: '/images/course-advanced.jpg',    alt: 'Advanced Shading Study' },
  { src: '/images/gallery-dog.jpg',        alt: 'German Shepherd Pencil Art' },
  { src: '/images/gallery-hat.jpg',        alt: 'Man with Cap Portrait' },
];

export default function Home() {
  const galleryRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const scroll = (dir) => {
    galleryRef.current?.scrollBy({ left: dir === 'left' ? -260 : 260, behavior: 'smooth' });
  };

  const filteredCourses = selectedFilter === 'ALL'
    ? courses
    : courses.filter((c) => c.level.toUpperCase() === selectedFilter);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* ════════════════════════════════════════════════
          SCREEN 01 — HERO  (dark background per reference)
      ════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0b1120 0%, #0f1d35 55%, #0b1120 100%)' }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left Content (Animated with Framer Motion) ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-7 text-center lg:text-left"
            >
              {/* Sub-label */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-blue-400 inline-block px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40"
              >
                REALISTIC TRANSFORMATION TO YOUR ART JOURNEY
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif font-bold text-white leading-[1.06] tracking-tight"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
              >
                MASTER THE<br />
                ART OF REALISM
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Step by step graphite pencil art masterclasses for beginners to advanced artists. Learn proportions, depth, shading, and hyper-realistic skin textures.
              </motion.p>

              {/* CTAs with Framer Motion hover/tap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              >
                <motion.a
                  href="#courses"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all shadow-lg shadow-blue-600/40 group cursor-pointer"
                >
                  Explore Masterclasses
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/enroll"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm px-8 py-3.5 rounded-lg transition-all hover:bg-white/10"
                  >
                    Enroll Now
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats row matching reference */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <p className="font-serif text-3xl font-bold text-white">4200+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Students</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-serif text-3xl font-bold text-blue-400">3+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Years</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-serif text-3xl font-bold text-emerald-400">Global</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Community</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right — Portrait with handwritten overlay ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm">
                {/* Glow */}
                <div className="absolute -inset-4 rounded-3xl opacity-35 blur-2xl pointer-events-none"
                     style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />

                {/* Portrait Frame */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img src="/images/hero-portrait.jpg" alt="Realistic graphite portrait"
                       className="w-full object-cover" style={{ maxHeight: '500px' }} />
                  {/* Dark overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Handwritten callout tag */}
                <motion.div
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 3, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className="absolute -top-4 -right-4 sm:-right-10 z-10 cursor-default shadow-xl"
                  style={{ background: 'rgba(15,29,53,0.92)', backdropFilter: 'blur(10px)',
                           border: '1px solid rgba(255,255,255,0.18)', borderRadius: '0.75rem',
                           padding: '0.6rem 1.1rem' }}
                >
                  <span className="font-script text-white drop-shadow" style={{ fontSize: '1.65rem', lineHeight: 1.2 }}>
                    Art Builds a Better You
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── STUDENT ARTWORK GALLERY strip (bottom of dark hero) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 mt-14 border-t border-white/10 py-6"
          style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-200">
                  STUDENT ARTWORK GALLERY
                </span>
                <div className="flex gap-1.5">
                  <button onClick={() => scroll('left')}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm hover:bg-white/20 transition-colors cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <HiChevronLeft />
                  </button>
                  <button onClick={() => scroll('right')}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm hover:bg-white/20 transition-colors cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <HiChevronRight />
                  </button>
                </div>
              </div>
              <a href="#gallery"
                 className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors">
                Real People. Real Progress. <HiArrowRight className="text-blue-400" />
              </a>
            </div>

            {/* 6 Thumbnails with framer motion hover */}
            <div ref={galleryRef}
                 className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-md cursor-pointer"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          COURSES FULL SECTION (white - Screen 02 fully embedded)
      ════════════════════════════════════════════════ */}
      <section id="courses" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              Curriculum & Programs
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Learn Graphite Art<br />Step by Step
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Structured courses designed for every skill level. Progress from pencil pressure basics to gallery-grade realism.
            </p>
          </motion.div>

          {/* Filter Pills */}
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

          {/* Course Cards Grid */}
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
                  <div>
                    {/* Image with level badge */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {c.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2">
                        {c.highlights?.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                            <HiCheckCircle className="text-blue-600 shrink-0 text-sm" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Course Meta */}
                      <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100 mt-3">
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

                  {/* Pricing and Action CTAs */}
                  <div className="px-6 pb-6 space-y-3">
                    <div className="flex items-baseline justify-between border-t border-gray-100 pt-4">
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
      </section>

      {/* ════════════════════════════════════════════════
          GALLERY SECTION (white)
      ════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="font-script text-3xl text-blue-600 block mb-1">Student Artwork Gallery</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Real People. Real Progress.
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-md">
                Original graphite works drawn by students who started with zero experience.
              </p>
            </div>
            <a
              href="#courses"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 flex-shrink-0"
            >
              Explore Our Courses <HiArrowRight />
            </a>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card overflow-hidden group aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT THE INSTRUCTOR (light gray)
      ════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Pramok - Instructor"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                Meet The Mentor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Pramok — Master Realistic Pencil Artist
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Helping 4,200+ students across the globe transform their art journey through step-by-step structured learning. From fundamental pencil control to museum-grade hyper-realism.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  '10+ Years Dedicated Studio Practice',
                  'Direct Personalized Feedback on Every Assignment',
                  'Structured Curriculum from Beginner to Masterclass',
                  'Private Community & Lifelong Mentorship',
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <HiCheck className="text-xs text-blue-700 stroke-2" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
              <div className="pt-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <a href="#courses" className="btn-primary px-8 py-3.5 inline-flex items-center gap-2">
                    Start Your Journey <HiArrowRight />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CONTACT / FOOTER CONTACT (white)
      ════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Begin Today
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Transform Your Art?
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Join 4,200+ students who have already transformed their pencil art skills with Pramok Art Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/enroll" className="btn-primary px-10 py-4 text-base inline-flex items-center gap-2 shadow-lg shadow-blue-500/20">
                Enroll Now <HiArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/918754314927"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-10 py-4 text-base inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
