"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  ChevronDown,
  ChevronUp,
  Loader2,
  Save,
} from "lucide-react";

type AccordionKey =
  | "personal"
  | "identification"
  | "contact"
  | "communication"
  | "employment";

type FormState = {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  nationality: string;
  dateOfBirth: string;

  ssn: string;
  idType: string;
  idNumber: string;
  documentExpiryDate: string;

  homeCode: string;
  homePhone: string;
  mobileCode: string;
  mobilePhone: string;
  email: string;
  mailingAddress: string;
  houseNo: string;
  street: string;
  cityState: string;
  contactCountry: string;

  communicationFirstName: string;
  communicationLastName: string;
  communicationMiddleName: string;
  communicationHomePhone: string;
  communicationMobilePhone: string;
  communicationEmail: string;
  communicationMailingAddress: string;

  employmentStatus: string;
  occupationEmployerName: string;
  annualIncomeRange: string;

  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
};

export default function ProfileSettingsPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const dobRef = useRef<HTMLInputElement | null>(null);
  const expiryRef = useRef<HTMLInputElement | null>(null);

  const [openAccordion, setOpenAccordion] =
    useState<AccordionKey>("personal");

  const [saving, setSaving] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const [form, setForm] = useState<FormState>({
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  nationality: "",
  dateOfBirth: "",

  ssn: "",
  idType: "",
  idNumber: "",
  documentExpiryDate: "",

  homeCode: "+1",
  homePhone: "",
  mobileCode: "+1",
  mobilePhone: "",
  email: "",
  mailingAddress: "",
  houseNo: "",
  street: "",
  cityState: "",
  contactCountry: "",

  communicationFirstName: "",
  communicationLastName: "",
  communicationMiddleName: "",
  communicationHomePhone: "",
  communicationMobilePhone: "",
  communicationEmail: "",
  communicationMailingAddress: "",

  employmentStatus: "",
  occupationEmployerName: "",
  annualIncomeRange: "",

  emailNotifications: true,
  smsNotifications: true,
  pushNotifications: true,
});

  const updateForm = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAccordion = (key: AccordionKey) => {
    setOpenAccordion((prev) => (prev === key ? "personal" : key));
  };

  const handleUpload = (file?: File) => {
    if (!file) return;

    setUploadedFileName(file.name);

    // Backend later:
    // const uploadData = new FormData();
    // uploadData.append("idDocument", file);
    // await fetch("/api/kyc/document", {
    //   method: "POST",
    //   body: uploadData,
    // });
  };

  const handleSave = async () => {
    setSaving(true);

    const payload = {
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
      gender: form.gender,
      nationality: form.nationality,
      dateOfBirth: form.dateOfBirth,

      ssn: form.ssn,
      idType: form.idType,
      idNumber: form.idNumber,
      documentExpiryDate: form.documentExpiryDate,

      email: form.email,
      homePhone: `${form.homeCode} ${form.homePhone}`,
      mobilePhone: `${form.mobileCode} ${form.mobilePhone}`,

      mailingAddress: form.mailingAddress,
      residentialAddress: {
        houseNo: form.houseNo,
        street: form.street,
        cityState: form.cityState,
        country: form.contactCountry,
      },

      preferences: {
        email: form.emailNotifications,
        sms: form.smsNotifications,
        push: form.pushNotifications,
      },
    };

    try {
      // Backend later:
      // await fetch("/api/profile/kyc", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      console.log("Backend-ready payload:", payload);

      setTimeout(() => {
        alert("Profile saved locally. Backend can be connected later.");
        setSaving(false);
      }, 800);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving.");
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#E7EBF0] px-2 pb-10 text-[#555]">
      <section className="mx-auto pt-10">
        <header className="relative mb-4 flex items-center justify-center">
          <Link href="/profile" className="absolute left-4">
            <ArrowLeft size={24} />
          </Link>

          <h1 className="text-[14px] font-sf-condensed font-bold tracking-[0.12em]">
            Profile settings page
          </h1>
        </header>

        <section className="rounded-[16px] border border-[#15803D] bg-[#E7EBF0] px-2 pb-5 pt-4 shadow-sm">
          <div className="grid grid-cols-2 h-[161px]  items-center gap-2">
            <div className="relative h-[135px] w-[142px]">
              <Image
                src="/images/kyc.png"
                alt="KYC illustration"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-[24px] font-sf-condensed leading-tight font-semibold text-[#1E3A8A]">
                Complete Your KYC
              </h2>
              <p className="mt-4 text-center text-[13px] font-semibold font-lato leading-[14px] text-[#666]">
                Completing your KYC is the only assured way of enjoying almost
                all our Banking features
              </p>
            </div>
          </div>

          <AccordionTitle
            title="Personal Information"
            open={openAccordion === "personal"}
            onClick={() => toggleAccordion("personal")}
          />

          {openAccordion === "personal" && (
            <Card>
              <div className="grid grid-cols-2 gap-2 font-sf-condensed text-[14px] text-[#1f1f1f]/80 rounded-[4px]">
                <Input
                  label="First name"
                  value={form.firstName}
                  onChange={(v) => updateForm("firstName", v)}
                  placeholder="i.e. john"
                />

                <Input
                  label="Middle name"
                  value={form.middleName}
                  onChange={(v) => updateForm("middleName", v)}
                  placeholder="i.e. Coupar"
                />
              </div>

              <Input
                label="last name"
                value={form.lastName}
                onChange={(v) => updateForm("lastName", v)}
                placeholder="i.e. Maxwell"
              />

              <Select
                label="Gender"
                value={form.gender}
                onChange={(v) => updateForm("gender", v)}
                placeholder="Male"
                options={["Male", "Female"]}
              />

              <Select
                label="Nationality/Citizenship"
                value={form.nationality}
                onChange={(v) => updateForm("nationality", v)}
                placeholder="Choose country"
                options={[
                  "United states",
                  "Cote d’ivore",
                  "Somalia",
                  "United kingdom",
                  "South Africa",
                  "South korea",
                  "China",
                  "Nigeria",
                ]}
              />

              <DateInput
                label="Date of Birth"
                value={form.dateOfBirth}
                onChange={(v) => updateForm("dateOfBirth", v)}
                inputRef={dobRef}
              />
            </Card>
          )}

          <AccordionTitle
            title="Identification detail"
            open={openAccordion === "identification"}
            onClick={() => toggleAccordion("identification")}
          />

          {openAccordion === "identification" && (
            <>
              <Card>
                <Input
                  label="Social Security Number (SSN) or ITIN"
                  value={form.ssn}
                  onChange={(v) => updateForm("ssn", v)}
                  placeholder="+1 848 449 99"
                />

                <label className="mt-3 block text-[12px] font-bold tracking-wide">
                  Government-issued ID
                </label>

                <div className="mt-1 grid grid-cols-2 gap-1">
                  <Select
                    value={form.idType}
                    onChange={(v) => updateForm("idType", v)}
                    placeholder="ID Type"
                    options={["Passport", "Driver License", "National ID"]}
                  />

                  <input
                    value={form.idNumber}
                    onChange={(e) => updateForm("idNumber", e.target.value)}
                    placeholder="ID number"
                    className="h-[31px] rounded-[8px] bg-[#e6e8ed] px-3 text-[12px] font-semibold outline-none"
                  />
                </div>

                <DateInput
                  label="Document Expiry Date"
                  value={form.documentExpiryDate}
                  onChange={(v) => updateForm("documentExpiryDate", v)}
                  inputRef={expiryRef}
                />
              </Card>

              <Card>
                <h3 className="text-[14px] font-bold tracking-wide text-[#1f1f1f]/60">
                  Upload ID Document
                </h3>

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*,.pdf,.png,.jpg,.jpeg,.doc,.docx"
                  hidden
                  onChange={(e) => handleUpload(e.target.files?.[0])}
                />

                <button
                  onClick={() => fileRef.current?.click()}
                  className="mx-auto mt-4 flex h-[58px] w-[180px] items-center justify-center rounded-[4px] border border-[#d0d5dc] bg-white"
                >
                  <span className="flex h-[28px] items-center gap-2 rounded-full border border-[#e5e5e5] px-5 text-[11px] font-semibold text-[#777]">
                    {uploadedFileName ? "Uploaded" : "Button"}
                    <Camera size={16} className="text-[#139b68]" />
                  </span>
                </button>

                {uploadedFileName && (
                  <p className="mt-2 text-center text-[11px] text-[#15935e]">
                    {uploadedFileName}
                  </p>
                )}

                <p className="mx-auto mt-3 max-w-[260px] text-center text-[12px] leading-[13px] text-[#1f1f1f]/30">
                  You may have to do a Selfie/Live Photo for identity
                  verification
                </p>
              </Card>
            </>
          )}
          

          <AccordionTitle
            title="Contact information:"
            open={openAccordion === "contact"}
            onClick={() => toggleAccordion("contact")}
          />

          {openAccordion === "contact" && (
            <Card>
              <div className="grid grid-cols-[80px_1fr] gap-2">
                <Select
                  label="Phone(Home)"
                  value={form.homeCode}
                  onChange={(v) => updateForm("homeCode", v)}
                  placeholder="+1"
                  options={["+1", "+44", "+234", "+27"]}
                />

                <Input
                  label=" "
                  value={form.homePhone}
                  onChange={(v) => updateForm("homePhone", v)}
                  placeholder="+1 848 449 99"
                />
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-2">
                <Select
                  label="Phone(Mobile)"
                  value={form.mobileCode}
                  onChange={(v) => updateForm("mobileCode", v)}
                  placeholder="+1"
                  options={["+1", "+44", "+234", "+27"]}
                />

                <Input
                  label=" "
                  value={form.mobilePhone}
                  onChange={(v) => updateForm("mobilePhone", v)}
                  placeholder="+1 848 449 99"
                />
              </div>

              <Input
                label="Email"
                value={form.email}
                onChange={(v) => updateForm("email", v)}
                placeholder="example@gmail.com"
              />

              <Input
                label="Mailing address"
                value={form.mailingAddress}
                onChange={(v) => updateForm("mailingAddress", v)}
                placeholder="no. 3 cooker street, Copua city, Johannesburg"
              />

              <label className="mt-3 block text-[12px] font-bold tracking-wide">
                Residential address
              </label>

              <div className="mt-1 grid grid-cols-2 gap-1">
                <Input
                  label=""
                  value={form.houseNo}
                  onChange={(v) => updateForm("houseNo", v)}
                  placeholder="no."
                  noMargin
                />

                <Input
                  label=""
                  value={form.street}
                  onChange={(v) => updateForm("street", v)}
                  placeholder="street"
                  noMargin
                />
              </div>

              <div className="mt-1 grid grid-cols-2 gap-1">
                <Input
                  label=""
                  value={form.cityState}
                  onChange={(v) => updateForm("cityState", v)}
                  placeholder="city/state"
                  noMargin
                />

                <Select
                  value={form.contactCountry}
                  onChange={(v) => updateForm("contactCountry", v)}
                  placeholder="Choose country"
                  options={[
                    "United states",
                    "United kingdom",
                    "Nigeria",
                    "South Africa",
                    "China",
                  ]}
                  noMargin
                />
              </div>
            </Card>
          )}

          <section className="mt-3 flex h-[92px] overflow-hidden bg-white">
            <div className="w-[47%] px-5 py-2 justify-center">
              <h2 className="text-[18px] font-sf-condensed font-bold leading-[26px] text-[#555]">
                Glowing
                <br />
                <span className="pl-10">Season</span>
              </h2>
              <p className="mt-2 text-[9px] font-sf-pro text-[#1f1f1f]/60">Offers that never fail!</p>
            </div>

            <div className="relative flex-1 rounded-tl-full bg-white">
              <Image
                src="/images/glowing-season.png"
                alt="Promo illustration"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <AccordionTitle
  title="Communication preference"
  open={openAccordion === "communication"}
  onClick={() => toggleAccordion("communication")}
/>

{openAccordion === "communication" && (
  <Card>
    <div className="grid grid-cols-2 gap-2">
      <Input
        label="First name"
        value={form.communicationFirstName}
        onChange={(v) => updateForm("communicationFirstName", v)}
        placeholder="i.e. john"
      />

      <Input
        label="last name"
        value={form.communicationLastName}
        onChange={(v) => updateForm("communicationLastName", v)}
        placeholder="i.e. Maxwell"
      />
    </div>

    <Input
      label="Middle name"
      value={form.communicationMiddleName}
      onChange={(v) => updateForm("communicationMiddleName", v)}
      placeholder="i.e. Coupar"
    />

    <div className="grid grid-cols-2 gap-2">
      <Input
        label="Phone(Home)"
        value={form.communicationHomePhone}
        onChange={(v) => updateForm("communicationHomePhone", v)}
        placeholder="+1 848 449 99"
      />

      <Input
        label="Phone(mobile)"
        value={form.communicationMobilePhone}
        onChange={(v) => updateForm("communicationMobilePhone", v)}
        placeholder="+1 338 449 83"
      />
    </div>

    <Input
      label="Email"
      value={form.communicationEmail}
      onChange={(v) => updateForm("communicationEmail", v)}
      placeholder="example@gmail.com"
    />

    <Input
      label="Mailing address"
      value={form.communicationMailingAddress}
      onChange={(v) => updateForm("communicationMailingAddress", v)}
      placeholder="no. 3 cooker street, Copua city, Johannesburg"
    />
  </Card>
)}

<AccordionTitle
  title="Employment & Financial Information"
  open={openAccordion === "employment"}
  onClick={() => toggleAccordion("employment")}
/>

{openAccordion === "employment" && (
  <Card>
    <Select
      label="Employment Status"
      value={form.employmentStatus}
      onChange={(v) => updateForm("employmentStatus", v)}
      placeholder="Self-employed"
      options={[
        "Unemployed",
        "Employed",
        "Self-employed",
        "Student",
        "Retired",
      ]}
    />

    <Input
      label="Occupation / Employer Name"
      value={form.occupationEmployerName}
      onChange={(v) => updateForm("occupationEmployerName", v)}
      placeholder="i.e. john Walker"
    />

    <Select
  label="Annual Income Range"
  value={form.annualIncomeRange}
  onChange={(v) => updateForm("annualIncomeRange", v)}
  placeholder="Select Income Range"
  options={[
    "$0 - $10,000",
    "$10,001 - $25,000",
    "$25,001 - $50,000",
    "$50,001 - $100,000",
    "$100,001 - $250,000",
    "$250,000+",
  ]}
/>
  </Card>
)}
          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-5 flex h-[43px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#1D4ED8] text-sm font-bold text-white disabled:opacity-60"
          >
            {saving ? (
              <Loader2 size={17} className="animate-spin" />
            ) : (
              <Save size={17} />
            )}
            {saving ? "Saving..." : "Save Profile"}
          </button>
        </section>
      </section>
    </main>
  );
}

function AccordionTitle({
  title,
  open,
  onClick,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-3 flex w-full items-center justify-between text-left text-[13px] font-black tracking-wide"
    >
      {title}
      {open ? (
        <ChevronUp size={17} className="text-[#aaa]" />
      ) : (
        <ChevronDown size={17} className="text-[#aaa]" />
      )}
    </button>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-2 rounded-[4px] bg-white p-2 shadow-sm">
      {children}
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  noMargin = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  noMargin?: boolean;
}) {
  return (
    <label
      className={`block text-[12px] font-bold tracking-wide ${
        noMargin ? "" : "mt-3"
      }`}
    >
      {label}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 h-[31px] w-full rounded-[8px] bg-[#e6e8ed] px-3 text-[12px] font-semibold outline-none focus:ring-2 focus:ring-[#2563eb]/20"
      />
    </label>
  );
}

function DateInput({
  label,
  value,
  onChange,
  inputRef,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const openPicker = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  return (
    <label className="mt-3 block text-[12px] font-bold tracking-wide">
      {label}

      <div className="relative mt-1">
        <input
          ref={inputRef}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[34px] w-full rounded-[9px] border border-[#d8d8d8] bg-[#f4f6fa] px-3 pr-10 text-[12px] font-semibold text-[#555] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
        />

        <button
          type="button"
          onClick={openPicker}
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#2563eb]"
        >
          <CalendarDays size={17} />
        </button>
      </div>
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  placeholder,
  options,
  noMargin = false,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  noMargin?: boolean;
}) {
  return (
    <label
      className={`block text-[12px] font-bold tracking-wide ${
        noMargin ? "" : "mt-3"
      }`}
    >
      {label}

      <div className="relative mt-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[31px] w-full appearance-none rounded-[8px] border border-[#d8d8d8] bg-white px-3 pr-8 text-[12px] font-semibold text-[#777] outline-none focus:border-[#2563eb]"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-2 text-[#888]"
        />
      </div>
    </label>
  );
}

function Toggle({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mb-2 flex h-[34px] w-full items-center justify-between rounded-lg bg-[#3977f5] px-3 text-[12px] font-semibold text-white"
    >
      {label}

      <span
        className={`relative h-[16px] w-[32px] rounded-full ${
          checked ? "bg-white" : "bg-white/40"
        }`}
      >
        <span
          className={`absolute top-[3px] h-[10px] w-[10px] rounded-full bg-[#3977f5] transition ${
            checked ? "right-[3px]" : "left-[3px]"
          }`}
        />
      </span>
    </button>
  );
}