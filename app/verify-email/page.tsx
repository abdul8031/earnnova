export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#07142D] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#2563EB]">
          Verify Your Email
        </h1>

        <p className="mt-4 text-gray-600">
          We've sent a verification email to your inbox.
        </p>

        <p className="mt-2 text-gray-600">
          Please verify your email before logging in.
        </p>

        <a
          href="/login"
          className="inline-block mt-8 rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Go to Login
        </a>
      </div>
    </main>
  );
}