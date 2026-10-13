import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiFilter, HiX, HiDownload, HiRefresh } from 'react-icons/hi';
import CustomDropdown from '../components/CustomDropdown';

const ENROLLMENTS = [
  { id: 1, name: 'Arjun S',      contact: '+91 9876543210', course: 'Masterclass', amount: 7999, status: 'Paid',     payId: 'pay_29F8k3hj9S', date: '13 Oct 2026' },
  { id: 2, name: 'Divya R',      contact: 'divya@ex.com',  course: 'Masterclass', amount: 7999, status: 'Paid',     payId: 'pay_28Kd99xL',   date: '12 Oct 2026' },
  { id: 3, name: 'Karthik M',    contact: 'karthik@ex.com',course: 'Beginner',    amount: 2999, status: 'Paid',     payId: 'pay_27Xm41b',    date: '12 Oct 2026' },
  { id: 4, name: 'Meena P',      contact: '+91 9123456789',course: 'Masterclass', amount: 7999, status: 'Paid',     payId: 'pay_26Hw28L',    date: '11 Oct 2026' },
  { id: 5, name: 'Sanjay V',     contact: 'sanjay@ex.com', course: 'Advanced',   amount: 4999, status: 'Pending',  payId: '—',              date: '11 Oct 2026' },
  { id: 6, name: 'Pooja K',      contact: '+91 8887776655',course: 'Beginner',    amount: 2999, status: 'Refunded', payId: 'pay_25Tk11a',    date: '10 Oct 2026' },
  { id: 7, name: 'Rahul N',      contact: 'rahul@ex.com',  course: 'Advanced',   amount: 4999, status: 'Paid',     payId: 'pay_24Lm90q',    date: '09 Oct 2026' },
];

const statusOptions = [
  { value: 'ALL', label: 'All Statuses' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Refunded', label: 'Refunded' },
];

const courseOptions = [
  { value: 'ALL', label: 'All Courses' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Masterclass', label: 'Masterclass' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [selectedCourse, setSelectedCourse] = useState('ALL');

  const hasActiveFilters = search !== '' || selectedStatus !== 'ALL' || selectedCourse !== 'ALL';

  const resetFilters = () => {
    setSearch('');
    setSelectedStatus('ALL');
    setSelectedCourse('ALL');
  };

  const filtered = ENROLLMENTS.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.contact.toLowerCase().includes(search.toLowerCase()) ||
      e.payId.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      selectedStatus === 'ALL' || e.status.toLowerCase() === selectedStatus.toLowerCase();

    const matchesCourse =
      selectedCourse === 'ALL' || e.course.toLowerCase() === selectedCourse.toLowerCase();

    return matchesSearch && matchesStatus && matchesCourse;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-16">

      {/* Top admin header matching Screen 08 */}
      <header className="bg-white border-b border-gray-200 px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/logo.png" alt="Pramok" className="w-9 h-9 rounded-full object-contain bg-white border border-gray-200" />
          </Link>
          <div className="leading-none">
            <span className="font-serif text-sm font-bold text-gray-900 block">PRAMOK</span>
            <span className="text-[0.55rem] text-gray-400 uppercase tracking-widest font-semibold block">Art Academy Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs text-gray-500 hover:text-blue-600 font-medium">
            ← View Site
          </Link>
          <Link to="/admin" className="text-xs font-semibold text-red-500 hover:text-red-700">
            Logout →
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ── Title Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">Enrollments Management</h1>
            <p className="text-sm text-gray-500 mt-0.5">Filter, search, and manage all student enrollments.</p>
          </div>
          <button
            onClick={() => alert('Exporting enrollments CSV...')}
            className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <HiDownload /> Export CSV
          </button>
        </div>

        {/* ── 4 Stat Cards matching Screen 08 ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Enrollments', value: '248', color: 'text-gray-900' },
            { label: 'Total Revenue',     value: '₹12,48,502', color: 'text-blue-700' },
            { label: 'This Month',        value: '42',  color: 'text-emerald-600' },
            { label: 'Pending Payment',   value: '3',   color: 'text-amber-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:shadow-sm transition-shadow">
              <span className="text-xs text-gray-500 font-medium block">{stat.label}</span>
              <h3 className={`font-serif text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* ── Filters & Controls Section with Custom Dropdowns ── */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <HiFilter className="text-blue-600 text-base" /> Filter & Search
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <HiX /> Clear all filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
              <input
                type="text"
                placeholder="Search student, contact, pay ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Custom Status Dropdown */}
            <CustomDropdown
              options={statusOptions}
              value={selectedStatus}
              onChange={setSelectedStatus}
              placeholder="Filter by Status"
            />

            {/* Custom Course Dropdown */}
            <CustomDropdown
              options={courseOptions}
              value={selectedCourse}
              onChange={setSelectedCourse}
              placeholder="Filter by Course"
            />
          </div>

          {/* Result Count and Active Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900 font-bold">{filtered.length}</strong> of{' '}
              <strong className="text-gray-900 font-bold">{ENROLLMENTS.length}</strong> enrollments
            </span>

            {/* Quick Status Filters */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] text-gray-400 mr-1">Quick:</span>
              {['ALL', 'Paid', 'Pending'].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`text-[11px] px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {st === 'ALL' ? 'All' : st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Live Enrollments Table matching Screen 08 ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Name</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Course</th>
                  <th className="py-3.5 px-4">Amount</th>
                  <th className="py-3.5 px-4">Payment ID</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700 font-medium">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-gray-400">
                      <p className="text-sm font-semibold">No enrollments match your filter criteria.</p>
                      <button
                        onClick={resetFilters}
                        className="mt-2 text-xs text-blue-600 hover:underline cursor-pointer"
                      >
                        Reset filters
                      </button>
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-blue-50/40 transition-colors cursor-pointer"
                      onClick={() => navigate(`/admin/enrollment/${row.id}`)}
                    >
                      <td className="py-3.5 px-4 text-gray-400 font-mono">{row.id}</td>
                      <td className="py-3.5 px-4 font-semibold text-gray-900">{row.name}</td>
                      <td className="py-3.5 px-4 text-gray-500">{row.contact}</td>
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-gray-800">{row.course}</span>
                      </td>
                      <td className="py-3.5 px-4 font-serif font-bold text-gray-900">
                        ₹{row.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-gray-400">{row.payId}</td>
                      <td className="py-3.5 px-4 text-gray-500">{row.date}</td>
                      <td className="py-3.5 px-4">
                        {row.status === 'Paid' && (
                          <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Paid
                          </span>
                        )}
                        {row.status === 'Pending' && (
                          <span className="inline-block bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Pending
                          </span>
                        )}
                        {row.status === 'Refunded' && (
                          <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Refunded
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          to={`/admin/enrollment/${row.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
