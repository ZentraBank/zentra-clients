"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      alert("Password must contain letters and numbers.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log({
      password,
      confirmPassword,
    });

    window.location.href = "/login";
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#E8EEF3] px-4 py-6">
      <Link
        href="/forgot-password"
        className="absolute left-4 top-5 text-[#555]"
      >
        <ArrowLeft size={20} />
      </Link>

      <section className="flex min-h-[486px] w-full max-w-[326px] flex-col justify-center rounded-[18px] bg-white px-7 py-10 shadow-[0_0_8px_rgba(0,0,0,0.28)] md:max-w-[420px] md:px-9">
        <h1 className="text-center font-sf text-[13px] font-black text-[#2b2b2b] md:text-[18px]">
          Change Password
        </h1>

        <form onSubmit={handleSubmit} className="mt-[70px] space-y-5">
          <div>
            <label className="font-sf text-[12px] font-bold tracking-[0.02em] text-[#6a6a6a]">
              Create Password:
            </label>

            <div className="mt-2 flex h-[46px] items-center rounded-[10px] border border-[#D8D8D8] px-4 focus-within:border-[#2458E8]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="h-full flex-1 bg-transparent text-[14px] text-[#333] outline-none placeholder:text-[#B7B7B7]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-[#777]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="font-sf text-[12px] font-bold tracking-[0.02em] text-[#6a6a6a]">
              Confirm Password:
            </label>

            <div className="mt-2 flex h-[46px] items-center rounded-[10px] border border-[#D8D8D8] px-4 focus-within:border-[#2458E8]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="h-full flex-1 bg-transparent text-[14px] text-[#333] outline-none placeholder:text-[#B7B7B7]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="text-[#777]"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <p className="font-lato text-[11px] leading-[16px] text-[#777]">
            Password must be at least 8 characters and contain both letters and
            numbers.
          </p>

          <button
            type="submit"
            className="mt-8 h-[38px] w-full rounded-[10px] bg-[#2458E8] text-center font-sf text-[15px] font-bold text-white shadow-lg transition hover:bg-[#1d49c9]"
          >
            Change Password
          </button>
        </form>
      </section>
    </main>
  );
}