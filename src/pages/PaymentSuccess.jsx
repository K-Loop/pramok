import { useLocation, Link } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';

export default function PaymentSuccess() {
  const { state } = useLocation();
  const s = state || {
    studentName: 'Arjun S',
    courseName: 'Realism Masterclass',
    amount: 7999,
    orderId: '#PM20261013-7842',
    razorpayId: 'pay_29F8k3hj9S',
    date: '13 Oct 2026, 02:45 PM',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      {/* Centered white card matching Screen 05 */}
      <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center space-y-6">

        {/* Green check circle with React Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
          <HiCheck className="w-9 h-9 text-white stroke-2" />
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Payment Successful!
          </h1>
          <p className="text-sm text-gray-500">
            Your enrollment has been confirmed.
          </p>
        </div>

        {/* Receipt card matching reference */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 text-left space-y-3">
          {[
            { label: 'Order ID', value: s.orderId, mono: true },
            { label: 'Razorpay Payment ID', value: s.razorpayId, mono: true },
            { label: 'Course', value: s.courseName },
            { label: 'Amount', value: `₹${Number(s.amount).toLocaleString('en-IN')}`, bold: true },
            { label: 'Date', value: s.date },
          ].map(({ label, value, mono, bold }) => (
            <div key={label} className="flex items-center justify-between text-xs border-b border-gray-100 pb-2 last:border-0 last:pb-0">
              <span className="text-gray-400 font-medium">{label}</span>
              <span className={`${mono ? 'font-mono' : ''} ${bold ? 'font-serif font-bold text-sm text-gray-900' : 'font-semibold text-gray-800'}`}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link to="/student/dashboard"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/25 text-center cursor-pointer">
          Go to My Dashboard →
        </Link>

        <p className="text-[11px] text-gray-400 leading-relaxed">
          A confirmation email has been sent to your inbox. Welcome to the PRAMOK Art Academy family!
        </p>
      </div>
    </div>
  );
}
