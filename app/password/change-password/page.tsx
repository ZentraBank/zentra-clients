"use client";

import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { useState } from "react";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState(["", "", "", "", ""]);
  const [confirmPassword, setConfirmPassword] = useState(["", "", "", "", ""]);

  const handleChange = (
    value: string,
    index: number,
    type: "password" | "confirm"
  ) => {
    const cleanValue = value.slice(-1);

    if (type === "password") {
      const next = [...password];
      next[index] = cleanValue;
      setPassword(next);
    } else {
      const next = [...confirmPassword];
      next[index] = cleanValue;
      setConfirmPassword(next);
    }
  };

  const handleSubmit = () => {
    const createPin = password.join("");
    const confirmPin = confirmPassword.join("");

    if (createPin.length < 5 || confirmPin.length < 5) {
      alert("Please complete all fields.");
      return;
    }

    if (createPin !== confirmPin) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Ready for backend:", { password: createPin });
    alert("Password changed locally. Backend can be connected later.");
  };

  return (
    <main className="min-h-screen bg-[#e6edf6] px-4 py-40">
      <section className="mx-auto h-[507px] w-[342px] rounded-[24px] bg-white px-6 pt-6 shadow-[0_2px_8px_rgba(0,0,0,0.22)]">
        <Link href="/settings" className="inline-flex text-[#555]">
          <ArrowLeft size={18} />
        </Link>

        <div className="flex min-h-[72vh] flex-col justify-center">
          <h1 className="mb-14 text-center text-[13px] font-black tracking-wide text-[#333]">
            Change Password
          </h1>

          <PasswordBoxes
            label="Create Password:"
            values={password}
            onChange={(value, index) => handleChange(value, index, "password")}
          />

          <div className="mt-4">
            <PasswordBoxes
              label="Confirm Password:"
              values={confirmPassword}
              onChange={(value, index) =>
                handleChange(value, index, "confirm")
              }
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-8 h-[42px] w-full rounded-[9px] bg-[#2d55d9] text-[15px] font-bold text-white shadow-sm active:scale-[0.98]"
          >
            Change Password
          </button>
        </div>
      </section>
    </main>
  );
}

function PasswordBoxes({
  label,
  values,
  onChange,
}: {
  label: string;
  values: string[];
  onChange: (value: string, index: number) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-black tracking-wide text-[#555]">
        {label}
      </p>

      <div className="flex justify-between gap-2">
        {values.map((value, index) => (
          <label
            key={index}
            className="flex h-[27px] w-[38px] items-center justify-center border-b border-[#aeb7c5]"
          >
            <input
              value={value}
              onChange={(e) => onChange(e.target.value, index)}
              maxLength={1}
              type="password"
              className="h-full w-full bg-transparent text-center text-[12px] outline-none"
            />

            {!value && (
              <Star
                size={9}
                className="pointer-events-none absolute text-[#b8dfcf]"
                fill="currentColor"
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
}