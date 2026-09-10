import React, { useState } from 'react';

interface QuoteFormProps {
  idPrefix: string;
}

export function QuoteForm({ idPrefix }: QuoteFormProps) {
  const [fullName, setFullName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('$100 to $175');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!zipCode.trim()) {
      newErrors.zipCode = 'Please enter your ZIP code.';
    } else if (!/^\d{5}(-\d{4})?$/.test(zipCode.trim())) {
      newErrors.zipCode = 'Please enter a valid 5 digit ZIP code.';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (phoneNumber.trim().replace(/\D/g, '').length < 10) {
      newErrors.phoneNumber = 'Please enter a 10 digit phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div
        id={`${idPrefix}-quote-success`}
        className="w-full lg:h-[420px] bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-6 sm:p-7 text-left flex flex-col justify-center"
      >
        <h3 className="font-serif text-[22px] font-semibold text-[#F6F5F1] mb-2.5">
          Quote request received.
        </h3>
        <p className="font-sans text-[15px] text-[#F6F5F1]/80 leading-relaxed mb-5">
          Thanks. A Solara engineer will call you within one business day.
        </p>
        <button
          type="button"
          id={`${idPrefix}-reset-form`}
          onClick={() => {
            setSubmitted(false);
            setFullName('');
            setZipCode('');
            setPhoneNumber('');
            setMonthlyBill('$100 to $175');
            setErrors({});
          }}
          className="text-[14px] font-sans font-medium text-[#E8A94A] hover:underline transition-all cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div
      id={`${idPrefix}-quote-card`}
      className="w-full lg:h-[420px] bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-5 sm:p-7 text-left flex flex-col justify-between"
    >
      <form
        id={`${idPrefix}-quote-form`}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col justify-between h-full gap-3.5"
      >
        <div>
          <label
            htmlFor={`${idPrefix}-fullname`}
            className="block font-sans text-[13px] font-medium text-[#8A9A8E] mb-1"
          >
            Full name
          </label>
          <input
            id={`${idPrefix}-fullname`}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
            }}
            placeholder="Jane Doe"
            className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0]/30 rounded-[12px] text-[15px] text-[#151A21] placeholder-[#8A9A8E] focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 transition-colors"
          />
          {errors.fullName && (
            <p className="mt-1 font-sans text-[12px] text-[#E8A94A]">{errors.fullName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor={`${idPrefix}-zipcode`}
              className="block font-sans text-[13px] font-medium text-[#8A9A8E] mb-1"
            >
              ZIP code
            </label>
            <input
              id={`${idPrefix}-zipcode`}
              name="zipCode"
              type="text"
              inputMode="numeric"
              required
              autoComplete="postal-code"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
                if (errors.zipCode) setErrors((prev) => ({ ...prev, zipCode: '' }));
              }}
              placeholder="97701"
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0]/30 rounded-[12px] text-[15px] text-[#151A21] placeholder-[#8A9A8E] focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 transition-colors"
            />
            {errors.zipCode && (
              <p className="mt-1 font-sans text-[12px] text-[#E8A94A]">{errors.zipCode}</p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-monthlybill`}
              className="block font-sans text-[13px] font-medium text-[#8A9A8E] mb-1"
            >
              Monthly electric bill
            </label>
            <select
              id={`${idPrefix}-monthlybill`}
              name="monthlyBill"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0]/30 rounded-[12px] text-[15px] text-[#151A21] focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 transition-colors cursor-pointer"
            >
              <option value="$100 to $175">$100 to $175</option>
              <option value="$176 to $250">$176 to $250</option>
              <option value="$251 to $350">$251 to $350</option>
              <option value="$351 and above">$351 and above</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="block font-sans text-[13px] font-medium text-[#8A9A8E] mb-1"
          >
            Phone number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phoneNumber"
            type="tel"
            required
            autoComplete="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: '' }));
            }}
            placeholder="(541) 555-0192"
            className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0]/30 rounded-[12px] text-[15px] text-[#151A21] placeholder-[#8A9A8E] focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 transition-colors"
          />
          {errors.phoneNumber && (
            <p className="mt-1 font-sans text-[12px] text-[#E8A94A]">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            id={`${idPrefix}-submit-button`}
            className="w-full bg-[#E8A94A] hover:bg-[#d9993c] text-[#151A21] font-sans font-medium text-[15px] sm:text-[16px] py-3 px-6 rounded-[12px] transition-colors duration-150 cursor-pointer text-center"
          >
            Request my free quote
          </button>
        </div>

        <p className="text-center font-sans text-[13px] text-[#8A9A8E]">
          No obligation. No pressure sales visit.
        </p>
      </form>
    </div>
  );
}
