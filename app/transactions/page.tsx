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
    <main className="min-h-screen bg-[#E8EDF3] pb-[92px] text-[#333]">
      <section className="mx-auto max-w-[390px] px-4 pt-11">
        <div className="relative border-[3px] border-[#1594FF] bg-[#E8EDF3]">
          <header className="relative flex h-7 items-center justify-center border-b-[2px] border-dotted border-[#1594FF]">
            <Link href="/dashboard" className="absolute left-2 top-1/2 -translate-y-1/2">
              <ArrowLeft size={18} />
            </Link>

            <h1 className="text-[13px] font-bold tracking-wide">
              Transaction History
            </h1>
          </header>

          <div>
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
    <article className="flex min-h-[52px] items-center justify-between border-b-[2px] border-dotted border-[#1594FF] px-3 py-2">
      <div className="flex min-w-0 items-center gap-3">
        {isIn ? (
          <ArrowDownLeft size={18} className="shrink-0 text-[#2F9158]" />
        ) : (
          <ArrowUpRight size={18} className="shrink-0 text-[#E0443E]" />
        )}

        <div className="min-w-0">
          <p className="truncate text-[11px] text-black/30">
            {name} {text}
          </p>
          <h3 className="text-[13px] leading-tight text-black/55">{bank}</h3>
        </div>
      </div>

      <p
        className={`ml-2 shrink-0 text-[15px] font-semibold ${
          isIn ? "text-[#2F9158]" : "text-[#E0443E]"
        }`}
      >
        -₦5,000,...
      </p>
    </article>
  );
}