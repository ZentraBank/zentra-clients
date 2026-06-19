"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Loader2,
  LogIn,
  XCircle,
} from "lucide-react";

type Bank = {
  name: string;
  code: string;
  logo?: string;
};

type ResolvedAccount = {
  accountName: string;
  accountType: string;
  routingNumber: string;
  bankCode: string;
};

const banks: Bank[] = [
  {
    name: "JPMorgan Chase",
    code: "CHASE",
    logo: "/images/chase.png",
  },
  {
    name: "Bank of America",
    code: "BOA",
    logo: "/images/boa.png",
  },
  {
    name: "Wells Fargo",
    code: "WELLS",
    logo: "/images/wells-fargo.png",
  },
  {
    name: "Citibank",
    code: "CITI",
    logo: "/images/citi.png",
  },
  {
    name: "HSBC",
    code: "HSBC",
    logo: "/images/hsbc.png",
  },
  {
    name: "Barclays",
    code: "BARCLAYS",
    logo: "/images/barclays.png",
  },
];

const dummyAccounts: Record<string, ResolvedAccount> = {
  "9361928368": {
    accountName: "Mary Jude Mclarry",
    accountType: "Savings",
    routingNumber: "07237402937023",
    bankCode: "CHASE",
  },

  "1234567890": {
    accountName: "John Smith",
    accountType: "Checking",
    routingNumber: "12345678901234",
    bankCode: "BOA",
  },

  "5555555555": {
    accountName: "Sarah Williams",
    accountType: "Current",
    routingNumber: "99887766554433",
    bankCode: "WELLS",
  },
};

const USE_DUMMY_DATA = process.env.NEXT_PUBLIC_USE_DUMMY_BANKS !== "false";

export default function AddBankAccountPage() {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

  const [resolvedAccount, setResolvedAccount] =
    useState<ResolvedAccount | null>(null);

  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const canSearch = selectedBank && accountNumber.length === 10;
  const canSubmit = selectedBank && resolvedAccount;

  const selectedBankAccountMatches = useMemo(() => {
    if (!selectedBank || !resolvedAccount) return false;
    return selectedBank.code === resolvedAccount.bankCode;
  }, [selectedBank, resolvedAccount]);

  useEffect(() => {
    const resolveAccount = async () => {
      setResolvedAccount(null);
      setHasSearched(false);

      if (!selectedBank || accountNumber.length !== 10) return;

      setLoading(true);

      try {
        if (USE_DUMMY_DATA) {
          await new Promise((resolve) => setTimeout(resolve, 800));

          const account = dummyAccounts[accountNumber];

          if (account && account.bankCode === selectedBank.code) {
            setResolvedAccount(account);
          } else {
            setResolvedAccount(null);
          }

          setHasSearched(true);
          return;
        }

        const response = await fetch("/api/bank/resolve-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bankCode: selectedBank.code,
            accountNumber,
          }),
        });

        const data = await response.json();

        if (data?.success && data?.data) {
          setResolvedAccount(data.data);
        } else {
          setResolvedAccount(null);
        }

        setHasSearched(true);
      } catch (error) {
        setResolvedAccount(null);
        setHasSearched(true);
      } finally {
        setLoading(false);
      }
    };

    resolveAccount();
  }, [selectedBank, accountNumber]);

  const handleSubmit = async () => {
    if (!canSubmit || !selectedBankAccountMatches) return;

    const payload = {
      bankName: selectedBank.name,
      bankCode: selectedBank.code,
      accountNumber,
      accountName: resolvedAccount.accountName,
      accountType: resolvedAccount.accountType,
      routingNumber: resolvedAccount.routingNumber,
    };

    console.log("Bank account added:", payload);

    // LIVE MODE:
    // await fetch("/api/bank/add-account", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e9eef4] text-[#333]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden px-5 pb-[110px] pt-12">
        <Image
          src="/images/ring.png"
          alt=""
          width={614}
          height={613}
          priority
          className="pointer-events-none absolute right-[0px] top-[120px] h-[700px] w-[700px] object-contain"
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <Link href="/profile" className="text-[#555]">
              <ArrowLeft size={22} />
            </Link>

            <p className="font-heading text-[13px] font-bold tracking-[0.15em] text-[#333]">
              Add Bank Account
            </p>

            <div className="w-[22px]" />
          </div>

          <h1 className="mx-auto mt-4 max-w-[370px] text-center font-heading text-[31px] font-black leading-[31px] tracking-[0.02em] text-[#2d8d55] sm:text-[34px] sm:leading-[35px]">
            Securely link your bank account to deposit or withdraw funds
          </h1>

          <p className="mt-4 text-center text-[13px] font-medium text-[#555]">
            Your information is encrypted and safe.
          </p>

          <div className="mt-4 space-y-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-[45px] w-full items-center justify-between rounded-[5px] border border-[#d4d7dd] bg-white px-2 text-[13px] text-[#555] shadow-sm outline-none"
              >
                {selectedBank ? (
                  <span className="flex w-full items-center gap-3">
                    {selectedBank.logo && (
                      <span className="relative h-[26px] w-[96px] overflow-hidden rounded-[4px] bg-[#d9e8ff]">
                        <Image
                          src={selectedBank.logo}
                          alt={selectedBank.name}
                          fill
                          className="object-contain px-1"
                        />
                      </span>
                    )}

                    <span className="flex-1 text-left text-[12px]">
                      {selectedBank.name}
                    </span>
                  </span>
                ) : (
                  <span>Chose bank</span>
                )}

                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-[50px] z-50 w-full overflow-hidden rounded-[8px] border border-[#d4d7dd] bg-white shadow-xl">
                  {banks.map((bank) => (
                    <button
                      key={bank.code}
                      type="button"
                      onClick={() => {
                        setSelectedBank(bank);
                        setDropdownOpen(false);
                      }}
                      className="flex h-[44px] w-full items-center gap-3 px-3 text-left text-[13px] text-[#333] hover:bg-[#eef4ff]"
                    >
                      {bank.logo && (
                        <span className="relative h-[24px] w-[72px] overflow-hidden rounded bg-[#d9e8ff]">
                          <Image
                            src={bank.logo}
                            alt={bank.name}
                            fill
                            className="object-contain px-1"
                          />
                        </span>
                      )}

                      <span>{bank.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              value={accountNumber}
              onChange={(e) =>
                setAccountNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              inputMode="numeric"
              placeholder="Your account number"
              className="h-[35px] w-full rounded-full border border-[#d4d7dd] bg-white/80 px-4 text-[15px] text-[#333] outline-none placeholder:text-[#a9adb5]"
            />

            {loading && (
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#1D4ED8]">
                <Loader2 size={15} className="animate-spin" />
                Verifying account...
              </div>
            )}

            {resolvedAccount && selectedBankAccountMatches && (
              <div className="space-y-4">
                <input
                  readOnly
                  value={resolvedAccount.accountName}
                  className="h-[28px] w-full rounded-[5px] bg-white px-3 text-[13px] text-[#333] outline-none"
                />

                <div className="grid grid-cols-2 gap-8 pt-1">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] text-[#666]">
                      Account Type
                    </p>
                    <p className="mt-1 text-[15px] text-black">
                      {resolvedAccount.accountType}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] text-[#666]">
                      Routing Number
                    </p>
                    <p className="mt-1 text-[15px] text-black">
                      {resolvedAccount.routingNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#168d5a]">
                  <CheckCircle2 size={15} />
                  Account verified successfully
                </div>
              </div>
            )}

            {hasSearched && !loading && !resolvedAccount && canSearch && (
              <div className="flex items-center gap-2 text-[12px] font-semibold text-red-600">
                <XCircle size={15} />
                Account not found. Try test number 9361928368 with JPMorgan
                Chase.
              </div>
            )}
          </div>
        </div>

        <div className="relative z-10 mt-auto px-8">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || !selectedBankAccountMatches}
            className={`flex h-[36px] w-[273px] items-center justify-center gap-3 rounded-[9px] text-[14px] font-semibold text-white transition ${
              canSubmit && selectedBankAccountMatches
                ? "bg-[#1D4ED8] shadow-lg active:scale-[0.98]"
                : "bg-[#1D4ED8]/60"
            }`}
          >
            Add account
            <LogIn size={17} />
          </button>
        </div>
      </section>

      <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 items-center justify-between bg-white/90 px-4 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] backdrop-blur">
        <BottomItem href="/dashboard" src="/images/profile-dashboard.png" active />
        <BottomItem href="/cards" src="/images/profile-profile.png" />
        <BottomItem href="/profile" src="/images/profile-transactions.png" />
        <BottomItem href="/wallet" src="/images/profile-investment.png" />
        <BottomItem href="/transactions" src="/images/profile-more.png" />
      </nav>
    </main>
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