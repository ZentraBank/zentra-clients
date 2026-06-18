// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid2X2, ChevronDown } from "lucide-react";

const features = [
  { title: "Loan", image: "/images/loan.png", icon: "/icons/loan.png" },
  { title: "Investment", image: "/images/investment.png", icon: "/icons/investment.png" },
  { title: "Donations", image: "/images/donations.png", icon: "/icons/donation.png" },
  { title: "Bill Payment", image: "/images/bill-payment.png", icon: "/icons/bill.png" },
  { title: "P.O.D Net-of-kin", image: "/images/nok.png", icon: "/icons/pod.png" },
  { title: "Transfer", image: "/images/transfer.png", icon: "/icons/transfer.png" },
];

const services = [
  { title: "Bill Payment", image: "/images/service-bill.png" },
  { title: "POD next-of-kin", image: "/images/service-pod.png" },
  { title: "Bills Subscription", image: "/images/service-subscription.png" },
  { title: "Donations", image: "/images/service-donation.png" },
  { title: "Virtual Cards", image: "/images/service-card.png" },
  { title: "Data and Airtime", image: "/images/service-airtime.png" },
];

const faqs = [
  "What is ZentraBank?",
  "How do I create an account?",
  "Can I buy a virtual card?",
  "How do transfers work?",
  "How do subscriptions work?",
  "How do I contact support?",
];

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#E8EEF3] text-[#1F1F1F]">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Image
          src="/images/logo.png"
          alt="ZentraBank"
          width={54}
          height={54}
          className="rounded-md"
        />

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-white/80 px-5 py-2 text-sm font-semibold shadow-sm"
          >
            Login <ArrowRight size={17} className="text-[#2E8B57]" />
          </Link>

          <button className="grid h-11 w-11 place-items-center rounded-full bg-white/70 shadow-sm">
            <Grid2X2 className="text-[#2E8B57]" size={24} />
          </button>
        </div>
      </header>

      {/* Hero */}
<section className="mx-auto max-w-7xl px-4 lg:px-8">
  <div className="relative overflow-hidden rounded-[28px] bg-transparent text-white lg:min-h-[560px]">
    <Image
      src="/images/hero.png"
      alt="ZentraBank city"
      fill
      priority
      className="object-cover"
    />
          <div className="relative z-10 flex min-h-[455px] flex-col items-center justify-center px-5 py-16 text-center lg:min-h-[560px]">
            <h1 className="max-w-4xl text-[34px] font-black leading-[34px] text-white drop-shadow-[2px_3px_0_#111] md:text-6xl md:leading-[64px]">
              Welcome to the ONE-
              <br />
              STOP Banking
              <br />
              Network in USA
            </h1>

            <p className="mt-8 max-w-xl text-sm font-semibold drop-shadow md:text-lg">
              Zentrabank Gateway is the best thing that can happen to you
            </p>

            <Link
              href="/onboarding"
              className="mt-14 rounded-xl bg-[#2458E8] px-12 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#1d4ed8]"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
<section className="mx-auto mt-8 max-w-7xl px-5 lg:px-8">
  <div className="mb-5 flex justify-center">
    <span className="rounded-full bg-white px-8 py-1 text-xs">
      What is ZentraBank?
    </span>
  </div>

  <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:gap-6">
    {features.map((item) => (
      <div
        key={item.title}
        className="
          relative
          h-[145px]
          overflow-hidden
          rounded-t-[18px]
         

          md:h-[190px]
          lg:h-[220px]
        "
        style={{
          borderBottomLeftRadius: "55% 14%",
          borderBottomRightRadius: "55% 14%",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />

        {/* <div
          className="
            absolute
            left-1/2
            top-[34px]
            grid
            h-[58px]
            w-[58px]
            -translate-x-1/2
            place-items-center
            rounded-[14px]
            bg-white/90
            backdrop-blur-sm
            md:h-[72px]
            md:w-[72px]
          "
        >
          <Image
            src={item.icon}
            alt=""
            width={32}
            height={32}
            className="object-contain md:h-10 md:w-10"
          />
        </div> */}

        <span
          className="
            absolute
            bottom-[28px]
            left-1/2
            max-w-[86px]
            -translate-x-1/2
            bg-black/85
            px-2
            py-[2px]
            text-center
            text-[12px]
            leading-[13px]
            text-white
            md:max-w-[110px]
            md:text-sm
            md:leading-4
          "
        >
          {item.title}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-5 flex items-center justify-between gap-4 md:justify-center md:gap-10">
    <p className="max-w-[210px] text-sm font-bold leading-5 text-[#444] md:max-w-lg md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <button className="h-8 min-w-[120px] rounded-full bg-white px-8 text-sm font-semibold text-[#555]">
      Button
    </button>
  </div>
</section>

      {/* About */}
      <section className="mt-10 bg-[#2458E8] px-5 py-8 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-lg font-bold tracking-widest text-black/70">
            About ZentraBank
          </h2>

          <p className="max-w-3xl text-sm font-semibold leading-6 md:text-base">
            ZentraBank is a modern digital finance platform built to help users
            manage subscriptions, payments, virtual cards, transfers, and secure
            account activities from one simple dashboard.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="mb-8 text-center text-lg font-bold tracking-widest text-[#444]">
          Our Services
        </h2>

        <div className="relative rounded-[40px] bg-gradient-to-br from-[#27AE60] via-[#CFE7DD] to-white p-6 md:p-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-white bg-white md:h-32 md:w-32">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={140}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-10">
        <h2 className="mb-5 text-center text-lg font-bold tracking-widest text-[#444]">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <button
              key={faq}
              className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-left text-sm shadow-sm"
            >
              {faq}
              <ChevronDown size={18} className="text-[#2E8B57]" />
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7DB99A] px-5 py-8 text-[#1F1F1F]">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-lg font-bold tracking-widest">
            Subscribe to our Newsletter
          </h2>

          <div className="mx-auto mb-8 flex max-w-xl rounded-full bg-white/50 p-2">
            <input
              placeholder="Enter email"
              className="flex-1 bg-transparent px-3 text-sm outline-none"
            />
            <button className="rounded-full bg-[#2458E8] px-7 py-2 text-sm font-semibold text-white">
              Subscribe
            </button>
          </div>

          <h3 className="mb-3 text-center font-bold tracking-widest">
            Our Services
          </h3>

          <p className="mx-auto max-w-3xl text-sm leading-5">
            ZentraBank is a complete e-Banking system. We provide secure digital
            tools for subscriptions, virtual cards, transfers, account activity,
            notifications, and customer support.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-3">
            <div>
              <h4 className="font-bold text-white">Quick Links</h4>
              <p className="mt-3">Register</p>
              <p>Our Branches</p>
              <p>Contact</p>
            </div>

            <div>
              <h4 className="font-bold text-white">Legal</h4>
              <p className="mt-3">Company Policy</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>

            <div>
              <h4 className="font-bold text-white">Contact Us</h4>
              <p className="mt-3">Istanbul, Turkey</p>
              <p>support@zentrabank.com</p>
            </div>
          </div>

          <div className="mt-8 rounded-t-md bg-[#2E8B57] py-4 text-center text-sm text-white">
            Copyright © 2026 ZentraBank. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}