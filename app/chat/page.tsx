"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const messages = [
  {
    id: 1,
    type: "agent",
    text: "Hi dear esteemed client!\nI am Mr. Creg, your account customer care manager.\nHow may I help you?",
  },
  {
    id: 2,
    type: "user",
    text: "Thank you Mr. Creg.\nI am trying to redeem my donated funds of $100,000 from one of the donors, but I am being asked for OTP",
  },
  {
    id: 3,
    type: "user",
    text: "Please what must I do to acquire the OTP before the donated funds expires???",
  },
  {
    id: 4,
    type: "agent",
    text: "Yes! Congratulations!\nMcCray Jane is one of our most valued and go-to clients for HUGE donations such as this.\nAlso note that it implies your request wasn’t genuine if this fund reverses back the donor.",
  },
  {
    id: 5,
    type: "agent",
    text: "First i need to verify that your intentions for the released funds is not contradictory with your initial explanation; as it will vex our donor if they discover otherwise",
  },
  {
    id: 6,
    type: "agent",
    text: "Please remind me of what purpose you intended the use of this donated funds for?",
  },
  {
    id: 7,
    type: "user",
    text: "I’m sorry, I had explained this earlier that donated fund shall be used for helping the poor and beggars on the street.\nI AM A PHILANTHROPIST!!!",
  },
];

export default function CustomerCareChatPage() {
  return (
    <main
      className="min-h-screen bg-[#f7f7f7] px-4 pb-4 pt-12 text-[#3f3f3f]"
      style={{
        backgroundImage: "url('/images/chat-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="mx-auto flex h-[calc(100vh-64px)] w-full max-w-[430px] flex-col">
        <header className="relative flex items-center justify-center">
          <Link href="/gift" className="absolute left-0 text-[#555]">
            <ArrowLeft size={20} />
          </Link>

          <div className="absolute left-9 h-[21px] w-[21px] overflow-hidden rounded-full">
            <Image
              src="/images/chat-icon.png"
              alt="Customer care"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.08em] text-[#555]">
            Customer Care Chat
          </h1>
        </header>

        <div className="mt-5 flex-1 space-y-4 overflow-y-auto pb-4">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              type={message.type as "agent" | "user"}
              text={message.text}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button title="Add attachment"
            type="button"
            className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <Plus size={26} className="text-[#2458E8]" />
          </button>

          <input
            type="text"
            placeholder="Type your message"
            className="h-[41px] flex-1 rounded-full bg-[#f0f0f0] px-4 text-[14px] outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.15)] placeholder:text-[#aaa]"
          />

          <button title="Send message"
            type="button"
            className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#2458E8] shadow-sm active:scale-95"
          >
            <ArrowRight size={28} className="text-white" />
          </button>
        </div>
      </section>
    </main>
  );
}

function ChatBubble({
  type,
  text,
}: {
  type: "agent" | "user";
  text: string;
}) {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[83%] rounded-[15px] px-4 py-3 text-[14px] leading-[16px] shadow-sm ${
          isUser
            ? "rounded-tr-[6px] bg-[#5EA4FF] text-[#1f1f1f]"
            : "rounded-tl-[6px] bg-white text-[#4a4a4a]"
        }`}
      >
        {!isUser && (
          <div className="absolute -left-3 top-0 h-[24px] w-[24px] overflow-hidden rounded-full">
            <Image
              src="/images/chat-icon.png"
              alt="Customer care"
              fill
              className="object-cover"
            />
          </div>
        )}

        {isUser && (
          <div className="absolute -right-3 top-0 h-[24px] w-[24px] overflow-hidden rounded-full">
            <Image
              src="/images/chat-icon.png"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
        )}

        <p className="whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}