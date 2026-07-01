import React, { useState } from 'react';

export default function StorageManagementModal({
  resumesSize,
  coverLettersSize,
  cacheSize,
  storageLimit,
  setResumesSize,
  setCoverLettersSize,
  setCacheSize,
  setStorageLimit,
  onClose
}) {
  const [upgradeStep, setUpgradeStep] = useState('storage'); // 'storage', 'plans', 'checkout', 'success'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '', name: '' });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const newLimit = selectedPlan === 'Pro' ? 2000 : 10000;
      setStorageLimit(newLimit);
      setUpgradeStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl ${upgradeStep === 'plans' ? 'max-w-4xl' : 'max-w-lg'} w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* STEP 1: Storage Management */}
        {upgradeStep === 'storage' && (
          <>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600">storage</span> Manage Storage Space
            </h4>

            {/* Total Storage Progress Bar */}
            <div className="space-y-2 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-500">Total Space Used</span>
                <span className="font-bold text-black dark:text-white">
                  {(resumesSize + coverLettersSize + cacheSize).toFixed(1)} MB / {storageLimit} MB
                </span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 transition-all duration-300" 
                  style={{ width: `${((resumesSize + coverLettersSize + cacheSize) / storageLimit) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-500">description</span>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Resumes &amp; CVs</p>
                    <p className="text-xs text-slate-500">{resumesSize.toFixed(1)} MB used (12 files)</p>
                  </div>
                </div>
                <button 
                  disabled={resumesSize === 0}
                  onClick={() => setResumesSize(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${resumesSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                >
                  Clear Files
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-violet-500">article</span>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Cover Letters</p>
                    <p className="text-xs text-slate-500">{coverLettersSize.toFixed(1)} MB used (85 files)</p>
                  </div>
                </div>
                <button 
                  disabled={coverLettersSize === 0}
                  onClick={() => setCoverLettersSize(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${coverLettersSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                >
                  Clear Letters
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-500">cached</span>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Temporary Cache</p>
                    <p className="text-xs text-slate-500">{cacheSize.toFixed(1)} MB used</p>
                  </div>
                </div>
                <button 
                  disabled={cacheSize === 0}
                  onClick={() => setCacheSize(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${cacheSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                >
                  Clear Cache
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setResumesSize(25.4);
                  setCoverLettersSize(12.1);
                  setCacheSize(4.5);
                }}
                className="px-4 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                Reset Storage Demo
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setUpgradeStep('plans')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
                >
                  Upgrade Space
                </button>
              </div>
            </div>
          </>
        )}

        {/* STEP 2: Choose Plan (Pricing UI matching landing page) */}
        {upgradeStep === 'plans' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Pricing Plans</span>
              <h3 className="text-2xl font-black mt-2 mb-2 text-black dark:text-white">Simple, Transparent Pricing</h3>
              <p className="text-xs text-slate-500">Expand your storage limits and unlock premium templates with a plan that fits your search.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
              {/* Free Plan */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between bg-slate-50/20">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Free</h4>
                  <p className="text-[10px] text-slate-500 mb-4">Get started for free</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">₹0</span>
                    <span className="text-slate-500 text-xs ml-1">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                      100 MB Storage
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                      Up to 10 applications / mo
                    </li>
                  </ul>
                </div>
                <button 
                  disabled={storageLimit === 100}
                  onClick={() => {
                    setStorageLimit(100);
                    setUpgradeStep('storage');
                  }}
                  className="w-full py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 disabled:bg-slate-100 dark:disabled:bg-slate-800 dark:disabled:text-slate-500"
                >
                  {storageLimit === 100 ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-emerald-600 rounded-2xl p-6 flex flex-col justify-between bg-white dark:bg-slate-800/40 relative shadow-md">
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">Most Popular</span>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Pro</h4>
                  <p className="text-[10px] text-slate-500 mb-4">For serious job seekers</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl font-black text-emerald-600">₹499</span>
                    <span className="text-slate-500 text-xs ml-1">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                      <strong>2,000 MB (2 GB)</strong> Storage
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                      Unlimited applications
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                      Auto Apply AI Copilot
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    setSelectedPlan('Pro');
                    setUpgradeStep('checkout');
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                >
                  {storageLimit === 2000 ? 'Re-subscribe' : 'Select Pro Plan'}
                </button>
              </div>

              {/* Premium Plan */}
              <div className="border border-slate-800 rounded-2xl p-6 flex flex-col justify-between bg-slate-900 dark:bg-slate-950 text-white">
                <div>
                  <h4 className="text-lg font-bold mb-1">Premium</h4>
                  <p className="text-[10px] text-slate-400 mb-4">For active professionals</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl font-black">₹999</span>
                    <span className="text-slate-400 text-xs ml-1">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                      <strong>10,000 MB (10 GB)</strong> Storage
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                      Everything in Pro
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                      LinkedIn Sync Support
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    setSelectedPlan('Premium');
                    setUpgradeStep('checkout');
                  }}
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl text-xs font-bold transition-colors"
                >
                  {storageLimit === 10000 ? 'Re-subscribe' : 'Select Premium Plan'}
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setUpgradeStep('storage')}
                className="px-4 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span> Back
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Checkout Payment Gateways */}
        {upgradeStep === 'checkout' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-5">
            <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600">credit_card</span> Secure Checkout
            </h4>
            <p className="text-xs text-slate-500">Complete payment to upgrade storage space instantly.</p>

            {/* Plan Summary Card */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">upgrade</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-black dark:text-white">{selectedPlan} Upgrade Plan</p>
                  <p className="text-[10px] text-slate-500">Includes {selectedPlan === 'Pro' ? '2 GB' : '10 GB'} Storage Limit</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-extrabold text-emerald-600">{selectedPlan === 'Pro' ? '₹499' : '₹999'}</p>
                <p className="text-[9px] text-slate-400">billed monthly</p>
              </div>
            </div>

            {/* Credit Card Inputs */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Cardholder Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Anshuman Singh"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                  className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Card Number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required 
                    maxLength={19}
                    placeholder="4111 2222 3333 4444"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                    className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 pl-10 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">credit_card</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Expiry Date</label>
                  <input 
                    type="text" 
                    required 
                    maxLength={5}
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500 text-center"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">CVC / CVV</label>
                  <input 
                    type="password" 
                    required 
                    maxLength={3}
                    placeholder="•••"
                    value={cardDetails.cvc}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                    className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500 text-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setUpgradeStep('plans')}
                className="px-4 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                disabled={isProcessingPayment}
              >
                Back to Plans
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
                disabled={isProcessingPayment || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvc}
              >
                {isProcessingPayment ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                    Processing...
                  </>
                ) : (
                  <>Pay {selectedPlan === 'Pro' ? '₹499' : '₹999'}</>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Message */}
        {upgradeStep === 'success' && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Upgrade Successful!</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Your storage limit has been increased to <strong>{storageLimit === 2000 ? '2 GB' : '10 GB'}</strong>. You can now save more resumes and cover letters.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm transition-colors"
            >
              Back to Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
