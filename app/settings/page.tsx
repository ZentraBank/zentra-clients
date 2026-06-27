"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = [
  "English",
  "Mandarin Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Modern Standard Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Urdu",
];

const twoFactorOptions = ["SMS OTP", "Authenticator App"];

const accountOptions = [
  "Edit Profile",
  "Freeze Account",
  "Close Account",
  "Download Account Data",
];

export default function SettingsSupportPage() {
  const [freezeAccount, setFreezeAccount] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [twoFactorOpen, setTwoFactorOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const [language, setLanguage] = useState("English");
  const [twoFactorMethod, setTwoFactorMethod] = useState("");
  const [accountAction, setAccountAction] = useState("");

  const closeOtherDropdowns = (current: "language" | "twoFactor" | "account") => {
    if (current !== "language") setLanguageOpen(false);
    if (current !== "twoFactor") setTwoFactorOpen(false);
    if (current !== "account") setAccountOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#E7EBF0] px-5 pb-10 text-[#1f1f1f]/80">
      <section className="mx-auto max-w-[430px] pt-10">
        <header className="relative flex items-center justify-center">
          <Link href="/profile" className="absolute left-0">
            <ArrowLeft size={24} />
          </Link>

          <h1 className="text-[14px] font-sf-condensed tracking-wide">
            Settings & Support
          </h1>
        </header>

    <div className="relative mx-auto mt-8 h-[189px] w-[230px]">
    <Image
        src="/images/profile-setting-2.png"
        alt="Settings support"
        fill
        priority
        className="object-contain"
    />
    </div>

        <section className="mx-auto mt-7 max-w-[294px] space-y-2 rounded-[12px] font-roboto text-[#1f1f1f]/80">
          <MenuLink href="/profile/settings" title="Edit Profile" />
          <MenuLink href="/verify-human" title="Confirm you’re not a robot" />
          <MenuLink href="/change-password" title="Change Password" />
          <MenuLink
            href="/transaction-pin"
            title="Set / Change Transaction PIN"
          />
        </section>

        <section className="mx-auto mt-5 max-w-[294px] rounded-[12px] bg-[#2563EB] p-[7px] text-[#1f1f1f]/80">
          <ToggleRow
            label="Freeze account (temporary lock)"
            checked={freezeAccount}
            onClick={() => setFreezeAccount(!freezeAccount)}
          />

          <ToggleRow
            label="Login Alerts"
            checked={loginAlerts}
            onClick={() => setLoginAlerts(!loginAlerts)}
          />

          <ToggleRow
            label="Transaction alerts"
            checked={transactionAlerts}
            onClick={() => setTransactionAlerts(!transactionAlerts)}
            last
          />
        </section>

        <section className="mx-auto mt-5 max-w-[294px] rounded-[12px] bg-[#2563eb] p-[7px] text-[#1f1f1f]/80">
          <DropdownGroup
            title="Choose Language"
            open={languageOpen}
            onClick={() => {
              closeOtherDropdowns("language");
              setLanguageOpen(!languageOpen);
            }}
            options={languages}
            selected={language}
            onSelect={(value) => {
              setLanguage(value);
              setLanguageOpen(false);
            }}
          />

          <DropdownGroup
            title="Two-Factor Authentication (2FA)"
            open={twoFactorOpen}
            onClick={() => {
              closeOtherDropdowns("twoFactor");
              setTwoFactorOpen(!twoFactorOpen);
            }}
            options={twoFactorOptions}
            selected={twoFactorMethod}
            onSelect={(value) => {
              setTwoFactorMethod(value);
              setTwoFactorOpen(false);
            }}
          />

          <DropdownGroup
            title="Account Management"
            open={accountOpen}
            onClick={() => {
              closeOtherDropdowns("account");
              setAccountOpen(!accountOpen);
            }}
            options={accountOptions}
            selected={accountAction}
            onSelect={(value) => {
              setAccountAction(value);
              setAccountOpen(false);
            }}
            last
          />
        </section>
      </section>
    </main>
  );
}

function MenuLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex h-[38px] items-center rounded-[10px] bg-white px-5 text-[13px] font-bold shadow-sm transition active:scale-[0.98]"
    >
      {title}
    </Link>
  );
}

function ToggleRow({
  label,
  checked,
  onClick,
  last = false,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[43px] w-full items-center justify-between rounded-[8px] bg-white px-4 text-left text-[13px] font-bold transition active:scale-[0.98] ${
        last ? "" : "mb-[4px]"
      }`}
    >
      {label}

      <span
        className={`relative h-[14px] w-[25px] rounded-full transition ${
          checked ? "bg-[#2fa265]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-[2px] h-[10px] w-[10px] rounded-full bg-white transition ${
            checked ? "right-[2px]" : "left-[2px]"
          }`}
        />
      </span>
    </button>
  );
}

function DropdownGroup({
  title,
  open,
  onClick,
  options,
  selected,
  onSelect,
  last = false,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  last?: boolean;
}) {
  return (
    <div className={`${last ? "" : "mb-[8px]"}`}>
      <button
        type="button"
        onClick={onClick}
        className="flex h-[43px] w-full items-center justify-between rounded-[8px] bg-white px-4 text-left text-[13px] font-bold transition active:scale-[0.98]"
      >
        <span>{selected || title}</span>

        <ChevronDown
          size={17}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-[4px] space-y-[4px]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`flex h-[24px] w-full items-center rounded-[7px] bg-white px-4 text-left text-[13px] font-medium transition active:scale-[0.98] ${
                selected === option ? "text-[#2563eb]" : "text-[#444]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}