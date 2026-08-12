import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Package,
  DollarSign,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  designType: string;
  budget: string;
  briefMessage: string;
  agreeTerms: boolean;
}

const designTypes = [
  "T-Shirt Designs",
  "Hoodie & Sweater",
  "Social Media Posts",
  "Logo & Branding",
  "Mixed Monthly Package",
];

const budgetRanges = [
  "299 AED (Basic)",
  "499 AED (Standard)",
  "799 AED (Premium)",
  "1,299 AED (Elite)",
  "Custom Quote",
];

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    designType: "",
    budget: "",
    briefMessage: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would send to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        designType: "",
        budget: "",
        briefMessage: "",
        agreeTerms: false,
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-b from-white to-red-50/30 px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-red-500/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <Reveal>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-red-500 sm:text-xs">
                Premium Design Package
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl">
                Book Your Monthly
                <br />
                <span className="text-red-500">Design Package</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Get started in minutes. Tell us about your apparel brand and we'll
                create a custom design plan for you. Our team responds within 24 hours.
              </p>

              {/* Benefits List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-4 w-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Fast Turnaround
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-4 w-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Flexible Pricing
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Starting from 299 AED
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-4 w-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Unlimited Revisions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      On premium packages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-4 w-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Worldwide Delivery
                    </p>
                    <p className="text-xs text-muted-foreground">
                      50+ countries supported
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Form Container */}
          <Reveal delay={60}>
          <div className="rounded-[28px] border border-black/[0.08] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.035)] p-8 sm:p-10 lg:p-12 sticky top-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">
                      Booking request received!
                    </p>
                    <p className="text-sm text-green-800 mt-1">
                      We'll get back to you within 24 hours with a custom quote.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">
                      Something went wrong
                    </p>
                    <p className="text-sm text-red-800 mt-1">
                      Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}

              {/* Grid Layout */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+971 50 XXX XXXX"
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Brand/Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your brand name"
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Country */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Where are you based?"
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>

                {/* Design Type */}
                <div>
                  <label
                    htmlFor="designType"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    What designs do you need? *
                  </label>
                  <select
                    id="designType"
                    name="designType"
                    value={formData.designType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm text-black/60 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.5rem center",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select a design type</option>
                    {designTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label className="block text-sm font-semibold text-ink mb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-red-500" />
                    Select Your Package *
                  </div>
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgetRanges.map((range) => (
                    <label
                      key={range}
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.budget === range
                          ? "border-red-500 bg-red-50"
                          : "border-black/[0.08] bg-white hover:border-black/[0.12]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={handleChange}
                        className="w-4 h-4 text-red-500 cursor-pointer"
                      />
                      <span className="text-sm font-semibold text-ink">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brief Message */}
              <div>
                <label
                  htmlFor="briefMessage"
                  className="block text-sm font-semibold text-ink mb-2"
                >
                  Tell us about your brand *
                </label>
                <textarea
                  id="briefMessage"
                  name="briefMessage"
                  value={formData.briefMessage}
                  onChange={handleChange}
                  required
                  placeholder="What's your brand about? What style do you prefer? Any specific requirements?"
                  rows={5}
                  className="w-full rounded-lg border border-black/[0.12] bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-1 text-red-500 rounded cursor-pointer"
                />
                <span className="text-xs text-black/70">
                  I agree to CloudFitz Apparels' terms and conditions. I
                  understand that someone from our team will reach out within 24
                  hours to discuss my project.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-red-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(239,68,68,0.20)] transition-all duration-200 hover:bg-red-600 hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Package className="h-4 w-4" />
                {isSubmitting ? "Processing..." : "Get Your Quote"}
              </button>

              {/* Info text */}
              <p className="text-center text-xs text-black/50">
                💬 Or message us on WhatsApp for instant assistance
              </p>
            </form>
          </div>
        </Reveal>
        </div>

        {/* Value Proposition - Full Width Below */}
        <Reveal delay={120}>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-red-500" />
                <span className="text-sm font-semibold text-ink">
                  Fast Response
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                We reply within 24 hours with a custom quote
              </p>
            </div>

            <div className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-5 w-5 text-red-500" />
                <span className="text-sm font-semibold text-ink">
                  Flexible Plans
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Packages from 299 AED to custom enterprise solutions
              </p>
            </div>

            <div className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-sm font-semibold text-ink">
                  Global Support
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                We serve 50+ countries with fast worldwide delivery
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
