"use client";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How do I start earning?",
    answer:
      "Create a free account, complete available tasks, and earn rewards directly in your wallet.",
  },
  {
    question: "How can I deposit funds?",
    answer:
      "You can deposit using EasyPaisa, JazzCash, or USDT (TRC20).",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "Go to the Withdraw page, choose your payment method, enter your details, and submit the request.",
  },
  {
    question: "What is the minimum withdrawal?",
    answer:
      "The minimum withdrawal amount will be configurable by the admin from the dashboard.",
  },
  {
    question: "Is EarnNova secure?",
    answer:
      "Yes. We use secure authentication and encrypted connections to protect user accounts and transactions.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "Invite your friends using your referral link and earn commissions based on their activity.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Find answers to the most common questions about EarnNova.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}