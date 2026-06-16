"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { company, web3formsAccessKey } from "@/lib/company";
import { IconCheck, IconArrowRight } from "./Icons";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

/**
 * Offerteformulier met client-side validatie en een nette succesmelding.
 *
 * Verzending loopt via Web3Forms (werkt op een statische site, geen backend
 * nodig). Vul de access key in `lib/company.ts` (web3formsAccessKey) in; de
 * aanvragen komen dan binnen op het bij Web3Forms ingestelde e-mailadres.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = "Vul uw naam in.";
    if (!email) {
      next.email = "Vul uw e-mailadres in.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Vul een geldig e-mailadres in.";
    }
    if (!phone) {
      next.phone = "Vul uw telefoonnummer in.";
    } else if (!/^[0-9+\s()-]{8,}$/.test(phone)) {
      next.phone = "Vul een geldig telefoonnummer in.";
    }
    if (!message) next.message = "Omschrijf kort uw vraag of klus.";
    return next;
  }

  async function submitForm(form: HTMLFormElement) {
    if (!web3formsAccessKey) {
      throw new Error("Formulier is nog niet geconfigureerd.");
    }
    const data = new FormData(form);
    const payload = {
      access_key: web3formsAccessKey,
      subject: `Nieuwe offerteaanvraag — ${data.get("name") ?? ""}`,
      from_name: company.name,
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("type"),
      message: data.get("message"),
      botcheck: data.get("botcheck"), // honeypot — moet leeg blijven
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.success) {
      throw new Error(json.message || "Verzenden mislukt");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Zet focus op het eerste veld met een fout (toegankelijkheid)
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitForm(form);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("idle");
      setErrors({ message: "Er ging iets mis. Probeer het later opnieuw." });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-spark-400/40 bg-spark-50 p-8 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-spark-400 text-ink-900">
          <IconCheck width={30} height={30} />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-ink-900">
          Bedankt voor uw aanvraag!
        </h3>
        <p className="mt-2 max-w-sm text-ink-600">
          We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u
          op. Voor spoed kunt u ons direct bellen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Nog een aanvraag doen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-8"
      aria-label="Offerteformulier"
    >
      {/* Honeypot tegen spam (Web3Forms) — onzichtbaar voor mensen */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Naam"
          name="name"
          autoComplete="name"
          error={errors.name}
          required
        />
        <Field
          label="Telefoonnummer"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
          required
        />
        <Field
          label="E-mailadres"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
          required
          className="sm:col-span-2"
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="type"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Type werk
          </label>
          <select
            id="type"
            name="type"
            defaultValue=""
            className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-ink-900 focus:border-volt-500"
          >
            <option value="" disabled>
              Kies een dienst…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Anders / weet ik nog niet">
              Anders / weet ik nog niet
            </option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Uw bericht <span className="text-volt-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-volt-500 ${
              errors.message ? "border-red-400" : "border-ink-200"
            }`}
            placeholder="Omschrijf kort uw klus of vraag…"
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">
          Uw gegevens worden uitsluitend gebruikt om uw aanvraag te
          beantwoorden.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? (
            "Versturen…"
          ) : (
            <>
              Verstuur aanvraag <IconArrowRight width={18} height={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink-800"
      >
        {label} {required && <span className="text-volt-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-volt-500 ${
          error ? "border-red-400" : "border-ink-200"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
