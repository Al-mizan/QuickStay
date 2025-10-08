import React, { useState } from 'react';
import Title from './Title';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (ev) => {
    ev.preventDefault();
    const value = email ? email.trim() : '';
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
  };

  const handleBack = () => {
    setSubscribed(false);
    setEmail('');
    setError('');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      {!subscribed ? (
        <>
          <Title
            title="Stay Inspired"
            subtitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
          />

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full"
          >
            <input
              id="newsletter-email"
              type="email"
              className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error ? 'true' : 'false'}
              required
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
            >
              Subscribe
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </form>

          <div className="mt-6 text-xs text-center w-full max-w-xl">
            {error ? (
              <p className="text-red-400">{error}</p>
            ) : (
              <p className="text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            )}
          </div>
        </>
      ) : (
        // 🎉 Fullscreen success section
        <div className="flex flex-col items-center justify-center text-center min-h-[250px] w-full">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            🎉 Congratulations!
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            You are successfully subscribed to our newsletter.
          </p>
          <button
            onClick={handleBack}
            className="bg-black px-6 py-2.5 rounded text-white hover:bg-gray-800 transition-all"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
