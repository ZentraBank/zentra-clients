import Link from "next/link";
import { ArrowLeft, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import BottomNav from "@/components/layout/BottomNav";

const transactions = [
  { type: "in", name: "Butcher Maxwell", text: "has transfe...", bank: "ZentraBank" },
  { type: "out", name: "McCray Jane", text: "has donated the ,", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "has insured ...", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "has donated", bank: "ZentraBank" },
  { type: "out", name: "McCray Jane", text: "", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "ZentraBank" },
  { type: "out", name: "McCray Jane", text: "", bank: "ZentraBank" },
  { type: "out", name: "McCray Jane", text: "", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "Bank of USA" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "ZentraBank" },
  { type: "in", name: "Butcher Maxwell", text: "", bank: "Bank of USA" },
];

export default function TransactionHistoryPage() {
  return (
    <main className="min-h-screen bg-[#E7EBF0] pb-[92px] text-[#1f1f1f]/80">
  <section className="mx-auto max-w-[390px] px-4 pt-11">
    <header className="relative mb-5 flex h-8 items-center justify-center">
      <Link
        href="/dashboard"
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <ArrowLeft size={22} />
      </Link>

      <h1 className="font-sf text-[14px] font-bold font-sf-condensed text-[#1f1f1f]/80">
        Transaction History
      </h1>
    </header>

    <div className="space-y-3">
      {transactions.map((tx, index) => (
        <TransactionRow
          key={index}
          type={tx.type as "in" | "out"}
          name={tx.name}
          text={tx.text}
          bank={tx.bank}
        />
      ))}
    </div>
  </section>

  <BottomNav />
</main>
);
}

function TransactionRow({
  type,
  name,
  text,
  bank,
}: {
  type: "in" | "out";
  name: string;
  text: string;
  bank: string;
}) {
  const isIn = type === "in";

  return (
    <article className="flex min-h-[52px] items-center justify-between rounded-[8px] bg-[#ffffff]/30 px-3 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.18)]">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
            isIn ? "bg-[#DFF3E8]" : "bg-[#FBE3E3]"
          }`}
        >
          {isIn ? (
            <ArrowDownLeft size={14} className="text-[#2F9158]" />
          ) : (
            <ArrowUpRight size={14} className="text-[#E0443E]" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[11px] font-medium text-black/30 font-lato">
            {name} {text}
          </p>

          <h3 className="truncate text-[14px] leading-tight text-black/60 font-lato">
            {bank}
          </h3>
        </div>
      </div>

      <p
        className={`ml-2 shrink-0 text-[15px] font-semibold font-sf ${
          isIn ? "text-[#2E8B57]" : "text-[#C0392B]/80"
        }`}
      >
        -₦5,000,...
      </p>
    </article>
  );
}