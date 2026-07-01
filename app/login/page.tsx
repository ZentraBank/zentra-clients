"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, X, LogIn } from "lucide-react";

type Method = "email" | "phone";

export default function LoginPage() {
  const [method, setMethod] = useState<Method>("email");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(["", "", "", "", ""]);

  const passwordRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleDigitChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, "").slice(0, 1);
    const next = [...password];

    next[index] = digit;
    setPassword(next);

    if (digit && index < 4) {
      passwordRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      method,
      email: method === "email" ? email : "",
      phone: method === "phone" ? `${countryCode}${phone}` : "",
      password: password.join(""),
    };

    console.log("Login payload:", payload);

    window.location.href = "/dashboard";
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#E8EEF3] px-4 py-6 text-[#555] md:flex md:items-center md:justify-center md:bg-gradient-to-br md:from-[#dbe8f5] md:via-white md:to-[#cbdaf3]">
      <Link href="/" className="absolute left-4 top-5 z-50">
        <ArrowLeft size={20} />
      </Link>

      <Link href="/" className="absolute right-4 top-5 z-50 md:hidden">
        <X size={20} />
      </Link>

      <section className="mx-auto grid w-full max-w-[960px] overflow-hidden rounded-[24px] bg-white shadow-2xl md:grid-cols-[1fr_1.05fr]">
        <div className="hidden bg-[#2458E8] p-10 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h2 className="font-sf-condensed text-[44px] leading-tight">
              Welcome Back.
            </h2>

            <p className="mt-4 max-w-[360px] font-lato text-[15px] leading-6 text-white/85">
              Log in to continue managing your account, transfers,
              subscriptions, notifications, and secure online banking services.
            </p>
          </div>

          <div className="relative mt-10 h-[310px] w-full">
            <Image
              src="/images/register.png"
              alt="Login illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative px-4 pb-6 pt-5 md:px-10 md:py-8">
          <Link
            href="/"
            className="absolute right-4 top-5 hidden md:block"
            aria-label="close"
          >
            <X size={20} />
          </Link>

          <h1 className="text-center font-sf-condensed text-[36px] md:text-[42px]">
            Log in
          </h1>

          <div className="mt-5 overflow-hidden rounded-tr-[70px] bg-[#2458E8] md:hidden">
            <div className="flex h-[96px] items-center justify-center bg-gradient-to-r from-white via-white/70 to-[#2458E8]">
              <Image
                src="/images/register.png"
                alt="Login illustration"
                width={150}
                height={112}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="mt-4 font-lato text-[14px] leading-[20px] text-[#1f1f1f]">
            Provide your login details to access your secure banking dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid h-[38px] grid-cols-2 overflow-hidden rounded-[10px] border border-[#2458E8] bg-[#EEF4FF]">
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`font-sf text-[12px] font-bold transition ${
                  method === "email" ? "bg-white text-[#2458E8]" : "text-[#777]"
                }`}
              >
                Email
              </button>

              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`font-sf text-[12px] font-bold transition ${
                  method === "phone" ? "bg-white text-[#2458E8]" : "text-[#777]"
                }`}
              >
                Phone
              </button>
            </div>

            {method === "email" ? (
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[38px] w-full border-b border-[#D6D6D6] bg-transparent px-1 font-lato text-[13px] text-[#333] outline-none placeholder:text-[#C6C6C6] focus:border-[#2458E8]"
              />
            ) : (
              <div className="flex h-[38px] w-full items-center border-b border-[#D6D6D6] focus-within:border-[#2458E8]">
                <select
                  title="Country code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="h-full bg-transparent pr-1 font-lato text-[13px] text-[#333] outline-none"
                >
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+91">🇮🇳 +91</option>
                </select>

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-full flex-1 bg-transparent px-1 font-lato text-[13px] text-[#333] outline-none placeholder:text-[#C6C6C6]"
                />
              </div>
            )}

            <div>
              <label className="font-lato text-[11px] font-bold text-[#555]">
                Password:
              </label>

              <div className="mt-1.5 flex justify-center gap-4">
                {password.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      passwordRefs.current[index] = el;
                    }}
                    title={`Password digit ${index + 1}`}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleDigitChange(e.target.value, index)}
                    className="h-7 w-7 border-b border-[#D6D6D6] bg-transparent text-center text-[13px] font-bold text-[#333] outline-none focus:border-[#2458E8]"
                  />
                ))}
              </div>
            </div>

            <Link
              href="/forgot-password"
              className="block font-lato text-[12px] font-semibold text-[#2458E8]"
            >
              Forgot Password?
            </Link>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-[10px] bg-[#2458E8] py-3 text-center font-sf text-[13px] font-semibold text-white shadow-lg transition hover:bg-[#1d49c9]"
            >
              Log in
              <LogIn size={16} />
            </button>
          </form>

          <div className="mx-auto mt-4 h-[1px] w-[130px] bg-[#D6D6D6]" />

          <p className="mt-2 text-center font-lato text-[11px]">
            Or Login with:
          </p>

          <div className="mt-3 flex justify-center gap-5 rounded-[8px] border border-dashed border-purple-400 py-2">
            {[
              { src: "/images/facebook.png", alt: "Facebook" },
              { src: "/images/instagram.png", alt: "Instagram" },
              { src: "/images/google.png", alt: "Google" },
            ].map((item) => (
              <button title="Login with"
                key={item.alt}
                type="button"
                className="transition hover:scale-110"
              >
                <Image src={item.src} alt={item.alt} width={34} height={34} />
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 font-lato text-[11px]">
            <span>Don&apos;t have an account?</span>

            <Link href="/register" className="flex items-center gap-2">
              Sign up
              <LogIn size={14} className="text-[#2E8B57]" />
            </Link>
          </div>

          <div className="mt-7 flex justify-center gap-8 font-lato text-[11px]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}