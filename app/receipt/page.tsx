"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Share2,
  X,
  SendHorizontal,
  Mail,
  MessageSquare,
  Shield,
} from "lucide-react";

type TransactionDirection = "credit" | "debit";

type Transaction = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  direction: TransactionDirection;
  fromName?: string;
  recipientName?: string;
  type: string;
  accountStatus: string;
  date: string;
  availableBalance: number;
  time: string;
  fee: number;
  customerCare: string;
  transactionType: string;
  account: string;
  authorizationCode: string;
  bankAddress: string;
};

const dummyTransaction: Transaction = {
  id: "98234723948",
  amount: 5000200,
  currency: "$",
  status: "Transaction Successful!",
  direction: "debit",
  recipientName: "Michael Roberts",
  type: "IntraBank",
  accountStatus: "Verified!",
  date: "Sun. July 03, 2025",
  availableBalance: 4751234.56,
  time: "03:02 PM",
  fee: 399.95,
  customerCare: "1-800-XXX-XXXX",
  transactionType: "Online transfer",
  account: "Checking",
  authorizationCode: "009823",
  bankAddress: "123 Main St, New York, NY 10001",
};

export default function TransactionReceiptPage() {
  const [showShareOverlay, setShowShareOverlay] = useState(false);

  const transaction = dummyTransaction;
  const isCredit = transaction.direction === "credit";

  const amountSign = isCredit ? "+" : "-";
  const amountColor = isCredit ? "text-[#168d5a]" : "text-[#d85b4f]";
  const statusColor = isCredit ? "text-[#168d5a]" : "text-[#d85b4f]";
  const iconColor = isCredit ? "text-[#168d5a]" : "text-[#d85b4f]";

  const directionLabel = isCredit ? "Incoming from" : "Sent to";
  const personName = isCredit
    ? transaction.fromName || "Unknown Sender"
    : transaction.recipientName || "Unknown Recipient";

  const formattedAmount = `${amountSign}${
    transaction.currency
  }${transaction.amount.toLocaleString()}`;

  const formattedBalance = `${
    transaction.currency
  }${transaction.availableBalance.toLocaleString()}`;

  const formattedFee = `${transaction.currency}${transaction.fee.toLocaleString()}`;

  const receiptText = `
Transaction Receipt

Amount: ${formattedAmount}
Status: ${transaction.status}
${directionLabel}: ${personName}
Transaction ID: ${transaction.id}
Date: ${transaction.date}
Time: ${transaction.time}
`;

  const handleShareOption = async (type: string) => {
    const encodedText = encodeURIComponent(receiptText);

    if (type === "whatsapp") {
      window.open(`https://wa.me/?text=${encodedText}`, "_blank");
      return;
    }

    if (type === "email") {
      window.location.href = `mailto:?subject=Transaction Receipt&body=${encodedText}`;
      return;
    }

    if (type === "sms") {
      window.location.href = `sms:?body=${encodedText}`;
      return;
    }

    if (type === "telegram") {
      window.open(`https://t.me/share/url?url=&text=${encodedText}`, "_blank");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e8edf3] px-5 pb-10 pt-8 text-[#3f3f3f]">
      <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pb-7 pt-12">
        <header className="relative flex items-center justify-center">
          <Link href="/transactions" className="absolute left-0 text-[#555]">
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.14em]">
            Transaction History
          </h1>
        </header>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[62px] w-[62px] overflow-hidden rounded-[8px] bg-white shadow-sm">
            <Image
              src="/images/logo.png"
              alt="ZentraBank"
              fill
              priority
              className="object-contain p-1"
            />
          </div>

          <p className="mt-3 text-[12px] font-semibold text-[#777]">
            ZentraBank of USA
          </p>

          <h2
            className={`mt-3 text-[31px] font-semibold tracking-[0.03em] ${amountColor}`}
          >
            {formattedAmount}
          </h2>

          <p className={`mt-2 text-[12px] font-semibold ${statusColor}`}>
            {transaction.status}
          </p>

          <div className="mt-7 text-center">
            <p className="text-[12px] font-medium text-[#777]">
              {directionLabel}{" "}
              {isCredit ? (
                <ArrowDownLeft
                  size={14}
                  className={`ml-2 inline-block ${iconColor}`}
                />
              ) : (
                <ArrowUpRight
                  size={14}
                  className={`ml-2 inline-block ${iconColor}`}
                />
              )}
            </p>

            <p className="mt-2 text-[15px] font-bold text-[#3d3d3d]">
              {personName}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <Detail label="Type" value={transaction.type} />
          <Detail
            label="Current account status"
            value={transaction.accountStatus}
            valueClassName="font-bold text-[#1D4ED8]"
          />
          <Detail label="Transaction date" value={transaction.date} />
          <Detail label="Available Balance" value={formattedBalance} />
          <Detail label="Transaction time" value={transaction.time} />
          <Detail label="Fee" value={formattedFee} />
          <Detail label="Transaction ID" value={transaction.id} />
          <Detail label="Customer Care" value={transaction.customerCare} />
          <Detail label="Transaction type" value={transaction.transactionType} />
          <Detail label="Account" value={transaction.account} />
          <Detail
            label="Authorization Code"
            value={transaction.authorizationCode}
          />
          <Detail label="Bank address" value={transaction.bankAddress} />
        </div>

        <p className="mt-auto pt-10 text-center text-[12px] font-medium text-[#777]">
          Thank you for banking with ZentraBank!
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setShowShareOverlay(true)}
            className="flex h-[39px] items-center justify-center gap-3 rounded-[10px] bg-white text-[15px] font-semibold shadow-sm transition active:scale-[0.98]"
          >
            Share
            <Share2 size={17} className={iconColor} />
          </button>

          <Link
            href="/transactions"
            className="flex h-[39px] items-center justify-center gap-3 rounded-[10px] bg-white text-[15px] font-semibold shadow-sm transition active:scale-[0.98]"
          >
            Close
            <X size={17} className={iconColor} />
          </Link>
        </div>
      </section>

      <ShareReceiptOverlay
        open={showShareOverlay}
        onClose={() => setShowShareOverlay(false)}
        onSelect={handleShareOption}
      />
    </main>
  );
}

function ShareReceiptOverlay({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/20 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 rounded-t-[28px] bg-white px-7 pb-8 pt-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <header className="relative flex items-center justify-center">
          <h2 className="text-[13px] font-bold tracking-[0.03em] text-[#555]">
            Share receipt
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-0 text-black/25"
          >
            <X size={20} />
          </button>
        </header>

        <div className="mt-7 grid grid-cols-3 place-items-center gap-y-5">
          <ShareOption
            label="WhatsApp"
            type="whatsapp"
            onSelect={onSelect}
            icon={<SendHorizontal size={25} />}
          />

          <ShareOption
            label="email"
            type="email"
            onSelect={onSelect}
            icon={<Mail size={25} />}
          />

          <ShareOption
            label="SMS"
            type="sms"
            onSelect={onSelect}
            icon={<MessageSquare size={25} />}
          />

          <div className="col-start-2">
            <ShareOption
              label="Telegram"
              type="telegram"
              onSelect={onSelect}
              icon={<Shield size={24} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ShareOption({
  label,
  type,
  icon,
  onSelect,
}: {
  label: string;
  type: string;
  icon: React.ReactNode;
  onSelect: (type: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      className="flex flex-col items-center gap-2 active:scale-95"
    >
      <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#d9edf0] to-[#35b66f] text-[#2c9d65] shadow-sm">
        {icon}
      </span>

      <span className="text-[12px] font-medium text-[#35b66f]">{label}</span>
    </button>
  );
}

function Detail({
  label,
  value,
  valueClassName = "",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-5 text-[13px]">
      <p className="shrink-0 text-[#777]">{label}</p>

      <p className={`text-right font-medium text-[#444] ${valueClassName}`}>
        {value}
      </p>
    </div>
  );
}