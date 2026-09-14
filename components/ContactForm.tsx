"use client";

import { useState } from "react";
import {
  ehrOptions,
  moduleOptions,
  roles,
  site,
  timelines,
} from "@/lib/site";
import {
  inquiryFromForm,
  inquiryMailto,
  requiredInquiryFields,
  type Inquiry,
} from "@/lib/form";

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-ink outline-none transition-colors focus:border-blue";

const SUCCESS = "Thanks. We will reply from accounts@cohesyshealth.com.";

function missingFields(data: Inquiry) {
  return requiredInquiryFields.filter((key) => !data[key]);
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("companyWebsite") ?? "").trim()) {
      setStatus("success");
      return;
    }

    const data = inquiryFromForm(formData);
    const missing = missingFields(data);
    if (missing.length) {
      setStatus("error");
      setError("Please complete every required field.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail)) {
      setStatus("error");
      setError("Enter a work email address.");
      return;
    }

    setStatus("submitting");
    setError("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.workEmail,
            organization: data.organization,
            role: data.role,
            ehr: data.ehr,
            moduleFocus: data.moduleFocus,
            timeline: data.timeline,
            comments: data.comments,
            _subject: `Hospital inquiry — ${data.organization} — ${data.moduleFocus}`,
          }),
        });
        if (response.ok) {
          form.reset();
          setStatus("success");
          return;
        }
      } catch {
        // Fall through to mailto.
      }
    }

    window.location.href = inquiryMailto(data);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="border border-blue/20 bg-paper px-5 py-6 text-base leading-7 text-navy"
      >
        {SUCCESS}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" />
        <Field label="Last name" name="lastName" autoComplete="family-name" />
      </div>
      <Field
        label="Work email"
        name="workEmail"
        type="email"
        autoComplete="email"
      />
      <Field
        label="Organization"
        name="organization"
        autoComplete="organization"
      />
      <Select label="Role" name="role" options={roles} />
      <Select label="EHR" name="ehr" options={ehrOptions} />
      <Select label="Module/focus" name="moduleFocus" options={moduleOptions} />
      <Select label="Timeline" name="timeline" options={timelines} />

      <div>
        <label htmlFor="comments" className="text-sm font-medium text-navy">
          Comments <span className="font-normal text-steel">(optional)</span>
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={5}
          className={fieldClass}
        />
        <p className="mt-2 text-sm text-steel">
          Do not include patient names or other PHI. This is a public marketing
          form.
        </p>
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-red-800">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-sm bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-steel">
          Goes to{" "}
          <a href={`mailto:${site.email}`} className="text-blue underline-offset-2 hover:underline">
            {site.email}
          </a>
          . No phone line on this site.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = name;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}{" "}
        <span className="text-steel" aria-hidden="true">
          *
        </span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  const id = name;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}{" "}
        <span className="text-steel" aria-hidden="true">
          *
        </span>
      </label>
      <select id={id} name={name} required defaultValue="" className={fieldClass}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
