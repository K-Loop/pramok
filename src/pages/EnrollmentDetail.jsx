import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';

export default function EnrollmentDetail() {
  const { id } = useParams();
  const [emailSent, setEmailSent] = useState(false);

  const student = {
    name: 'Arjun S',
    email: 'arjun@example.com',
    phone: '+91 9876543210',
    course: 'Realism Masterclass',
    amount: 7999,
    status: 'Paid',
    razorpayId: 'pay_29F8k3hj9S',
    orderId: '#PM20261013-7842',
    date: '13 Oct 2026, 02:45 PM',
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">

      {/* Admin header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/logo.png" alt="Pramok" className="w-9 h-9 rounded-full object-contain bg-white border border-gray-200" />
          </Link>
          <div className="leading-none">
            <span className="font-serif text-sm font-bold text-gray-900 block">PRAMOK</span>
            <span className="text-[0.55rem] text-gray-400 uppercase tracking-widest font-semibold block">Art Academy</span>
          </div>
        </div>
        <Link to="/admin/dashboard" className="text-xs font-semibold text-blue-600 hover:text-blue-800">
          ← Back
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        <h1 className="font-serif text-2xl font-bold text-gray-900">Enrollment Details</h1>

        {/* ── Main detail card matching Screen 09 ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">

          {/* Student profile */}
          <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
            <img src="/images/hero-portrait.jpg" alt={student.name}
                 className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shrink-0" />
            <div>
              <h2 className="font-serif text-xl font-bold text-gray-900">{student.name}</h2>
              <p className="text-xs text-gray-500">{student.email}</p>
              <p className="text-xs text-gray-500">{student.phone}</p>
            </div>
          </div>

          {/* Detail grid */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            {[
              { label: 'Course',       value: student.course },
              { label: 'Amount',       value: `₹${student.amount.toLocaleString('en-IN')}`, bold: true },
              { label: 'Status',       isStatus: true },
              { label: 'Razorpay ID', value: student.razorpayId, mono: true },
              { label: 'Order ID',    value: student.orderId,    mono: true },
              { label: 'Date',        value: student.date },
            ].map(({ label, value, bold, mono, isStatus }) => (
              <div key={label} className="space-y-0.5">
                <span className="text-gray-400 block">{label}</span>
                {isStatus ? (
                  <span className="badge-green">{student.status}</span>
                ) : (
                  <span className={`${bold ? 'font-serif text-base font-bold text-gray-900' : ''} ${mono ? 'font-mono text-gray-700' : 'font-semibold text-gray-900'}`}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Payment Verified badge matching Screen 09 */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <HiCheck className="text-xs stroke-2" />
              </span>
              <span className="text-sm font-bold text-emerald-900">Payment Verified via Razorpay</span>
            </div>
            <p className="text-xs text-emerald-700 pl-7">
              This payment has been successfully verified and the student has been enrolled.
            </p>
          </div>

          {/* Actions matching Screen 09 */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-700 block">Actions</span>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setEmailSent(true)}
                className="flex-1 py-2.5 px-4 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                {emailSent ? (
                  <>
                    <HiCheck className="text-emerald-600 text-sm stroke-2" /> Email Sent!
                  </>
                ) : (
                  'Re-send Access Email'
                )}
              </button>
              <button onClick={() => alert('Refund request initiated for ' + student.name)}
                className="flex-1 py-2.5 px-4 rounded-lg border border-red-200 hover:border-red-300 text-red-600 text-xs font-semibold hover:bg-red-50 transition-colors cursor-pointer">
                Issue Refund
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
