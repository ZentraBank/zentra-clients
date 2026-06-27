"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  Check,
  Copy,
  Edit3,
  Gift,
  Settings,
  ShieldCheck,
  ChevronRight,
  X,
} from "lucide-react";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [redeemOpen, setRedeemOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: "Johnson Dutcher",
    email: "johndutcher@gmail.com",
    phone: "+16886399087",
    address: "2, Johnson street, Bapua city, Johannessburg",
    donationCode: "0872619472",
  });

  const [prefs, setPrefs] = useState({
    email: true,
    sms: true,
    push: true,
  });

  const copyDonationCode = async () => {
    await navigator.clipboard.writeText(profile.donationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen bg-[#E7EBF0] pb-24 text-[#3f3f3f]">
      <section className="mx-auto max-w-[430px] overflow-hidden">
        <div className="h-8 bg-[#E7EBF0]" />

        <div className="px-5 pt-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/profile-avatar.png"
                alt={profile.name}
                width={46}
                height={46}
                className="rounded-full object-cover"
              />

              <div>
                <h1 className="text-[12px] font-lato font-bold text-[#1f1f1f]/80">{profile.name}</h1>
                <p className="mt-1 text-[12px] font-semibold text-[#27AE60]">
                  Teir 3 <span className="text-[#2563EB]">Verified!</span>
                </p>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-2 text-[#2E8B57]">
              <button onClick={() => alert("Notifications opened")}>
                <Bell size={18} />
              </button>

              <Link href="/settings">
                <Settings size={20} />
              </Link>

              <Link href="/security">
                <ShieldCheck size={20} className="text-[#1c62ff]" />
              </Link>
            </div>
          </div>
        </div>

        <section className="px-5 pt-5">
          <h2 className="text-[14px] font-bold">Contact details:</h2>

          <div className="mt-2 grid grid-cols-[1fr_120px] gap-3">
            <div className="rounded-[4px] bg-[#2E8B57] px-3 py-3 text-[#ffffff] shadow-md">
              <div className="flex justify-between gap-2">
                <div className="space-y-2 text-[11px] font-medium font-latoleading-tight">
                  <p>{profile.email}</p>
                  <p>{profile.phone}</p>
                  <p>{profile.address}</p>
                </div>

                <button onClick={() => setEditOpen(true)}>
                  <Edit3 size={15} className="shrink-0" />
                </button>
              </div>

              <Link
                href="/profile/kyc"
                className="mt-3 ml-auto flex h-[24px] w-fit items-center rounded-[12px] border-amber-200 border-[1px] bg-white px-5 text-[11px] font-semibold text-[#1f1f1f]/80"
              >
                Complete KYC
              </Link>
            </div>

            <div className="relative h-[141px]">
              <Image
                src="/images/profile-setting.png"
                alt="Profile illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mt-4 bg-gradient-to-b from-[#A7C7E7] to-[#FFFFFF] px-5 py-3">
          <h2 className="text-[14px] font-bold text-[#1f1f1f]/80">Frequently Asked Questions</h2>

          <div className="mt-3 grid grid-cols-[120px_1fr] items-center gap-2">
            <button
              onClick={copyDonationCode}
              className="flex items-center gap-3 text-[12px] font-semibold text-[#1f1f1f]/80"
            >
              <span>{profile.donationCode}</span>
              {copied ? (
                <Check size={15} className="text-green-600" />
              ) : (
                <Copy size={15} className="text-[#38a474]" />
              )}
            </button>

            <div>
              <p className="text-center text-[12px] leading-[12px] text-[#1f1f1f]/80 font-lato">
                You can request for or redeem financial donations. Tap the
                button to redeem....
              </p>

              <div className="flex justify-end">
              <button
                onClick={() => setRedeemOpen(true)}
                className="mt-2 flex h-[24px] w-[162px] items-center justify-center gap-2 rounded-full bg-[#2563EB] text-[12px] text-white font-lato font-semibold "
              >
                Redeem donations
                <Gift size={12} />
              </button>
            </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-4">
          <h2 className="text-[14px] font-sf-condensed text-[#1f1f1f]/80 font-bold">Communication preference:</h2>

          <div className="mt-2 rounded-[4px] bg-[#2563EB] p-1 shadow-md text-[#ffffff] font-lato">
            <div className="grid grid-cols-2 gap-1 bg-[ffffff]/10 rounded-[10px]">
              <Preference
                label="email"
            
                checked={prefs.email}
                onClick={() => setPrefs({ ...prefs, email: !prefs.email })}
              />
              <Preference
                label="sms"
                checked={prefs.sms}
                onClick={() => setPrefs({ ...prefs, sms: !prefs.sms })}
              />
            </div>

            <div className="mt-1 bg-[ffffff]/10 rounded-[10px]">
              <Preference
                label="push notifications"
                checked={prefs.push}
                onClick={() => setPrefs({ ...prefs, push: !prefs.push })}
                wide
              />
            </div>
          </div>
        </section>

        <section className="mt-4 flex h-[92px] overflow-hidden bg-white">
          <div className="w-[47%] px-5 py-3">
            <h2 className="font-heading text-[24px] font-black leading-[26px] text-[#1f1f1f]/80">
              Glowing
              <br />
              <span className="pl-10">Season</span>
            </h2>
            <p className="mt-2 text-[11px] font-semibold text-[#1f1f1f]/60">Offers that never fail!</p>
          </div>

          <div className="relative flex-1 rounded-tl-full ">
            <Image
              src="/images/glowing-season.png"
              alt="Promo illustration"
              fill
              className="object-contain"
            />
          </div>
        </section>

        <section className="space-y-2 px-5 pt-7 text-[#1f1f1f]/80 font-roboto text-[14px]">
          <MenuItem title="Settings & Support" href="/settings" />
          <MenuItem title="Profile & Preferences" href="/" />
          <MenuItem title="Security & Privacy" href="/" />
          <MenuItem title="Messages & Notifications" href="notifications" />
        </section>
      </section>

      <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 items-center justify-between bg-white/90 px-4 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] backdrop-blur">
        <BottomItem href="/dashboard" src="/images/profile-dashboard.png" active />
        <BottomItem href="/cards" src="/images/profile-profile.png" />
        <BottomItem href="/profile" src="/images/profile-transactions.png" />
        <BottomItem href="/wallet" src="/images/profile-investment.png" />
        <BottomItem href="/transactions" src="/images/profile-more.png" />
      </nav>

      {editOpen && (
        <EditProfileModal
          profile={profile}
          setProfile={setProfile}
          onClose={() => setEditOpen(false)}
        />
      )}

      {redeemOpen && (
        <Popup title="Redeem Donations" onClose={() => setRedeemOpen(false)}>
          <p className="text-sm text-[#555]">
            Donation redemption will be connected to your backend later.
          </p>

          <button
            onClick={() => setRedeemOpen(false)}
            className="mt-5 h-[42px] w-full rounded-xl bg-[#2563eb] text-sm font-bold text-white"
          >
            Continue
          </button>
        </Popup>
      )}

      {copied && (
        <div className="fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-full bg-black px-5 py-2 text-xs font-semibold text-white">
          Copied successfully
        </div>
      )}
    </main>
  );
}

function Preference({
  label,
  checked,
  onClick,
  wide = false,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
  wide?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[25px] items-center justify-between rounded-[3px] bg-[#3977f5] px-2 text-[12px] font-medium text-white ${
        wide ? "w-full" : ""
      }`}
    >
      <span>{label}</span>

      <span
        className={`relative h-[13px] w-[25px] rounded-full transition ${
          checked ? "bg-white" : "bg-white/40"
        }`}
      >
        <span
          className={`absolute top-[2px] h-[9px] w-[9px] rounded-full bg-[#3977f5] transition ${
            checked ? "right-[2px]" : "left-[2px]"
          }`}
        />
      </span>
    </button>
  );
}

function EditProfileModal({
  profile,
  setProfile,
  onClose,
}: {
  profile: any;
  setProfile: (profile: any) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState(profile);

  const saveChanges = () => {
    setProfile(form);
    onClose();
  };

  return (
    <Popup title="Edit Contact Details" onClose={onClose}>
      <div className="space-y-3">
        <Input
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
          placeholder="Email"
        />

        <Input
          value={form.phone}
          onChange={(value) => setForm({ ...form, phone: value })}
          placeholder="Phone"
        />

        <textarea
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Address"
          className="min-h-[80px] w-full rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none"
        />

        <button
          onClick={saveChanges}
          className="h-[42px] w-full rounded-xl bg-[#2563eb] text-sm font-bold text-white"
        >
          Save Changes
        </button>
      </div>
    </Popup>
  );
}

function Popup({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 px-5">
      <div className="w-full max-w-[360px] rounded-2xl bg-white p-5 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-[#333]">{title}</h3>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-[42px] w-full rounded-xl border border-gray-200 px-3 text-sm outline-none"
    />
  );
}

function MenuItem({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex h-[45px] items-center justify-between rounded-[10px] bg-white px-4 text-[13px] font-semibold shadow-md"
    >
      {title}
      <ChevronRight size={18} className="text-[#168654]" />
    </Link>
  );
}

function BottomItem({
  href,
  src,
  active = false,
}: {
  href: string;
  src: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex h-[42px] w-[58px] items-center justify-center rounded-[15px] border-2 border-[#15834f] bg-white ${
        active ? "shadow-md" : ""
      }`}
    >
      <Image src={src} alt="Navigation icon" width={32} height={32} />
    </Link>
  );
}