import Image from 'next/image';

export default function IsgpPromo() {
  return (
    <section
      id="isgp"
      className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24 z-10"
    >
      <div className="max-w-[1024px] mx-auto">
        {/* Eyebrow & Partner Clarification Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5E17EB]/10 border border-[#5E17EB]/20 text-[#5E17EB] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E17EB]" />
            PARTNER OPPORTUNITY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-3">
            InsighTechs ISGP Programme
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            Featured external partner announcement by <span className="font-semibold text-neutral-800">InsighTechs Int Ltd</span> for <span className="font-medium text-neutral-800">Connected Britain 2026</span> at ExCeL London.
          </p>
        </div>

        {/* Banner with mailto link and hover ring effect */}
        <a
          href="mailto:info@insightecs.co?subject=ISGP%20Programme%20Enquiry"
          className="group relative block w-full rounded-2xl overflow-hidden ring-1 ring-black/10 hover:ring-2 hover:ring-[#5E17EB] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#5E17EB]/15"
          data-cursor-hover
          aria-label="Enquire about InsighTechs ISGP Programme for Connected Britain 2026 via email to info@insightecs.co"
        >
          <Image
            src="/ISGP.jpg.jpeg"
            alt="InsighTechs ISGP Programme banner for Connected Britain 2026 at ExCeL London - contact info@insightecs.co"
            width={1280}
            height={701}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </a>

        {/* Direct Email Prompt / Caption */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-500 text-center">
          <span>Interested? Click the banner or email:</span>
          <a
            href="mailto:info@insightecs.co?subject=ISGP%20Programme%20Enquiry"
            className="font-medium text-[#5E17EB] hover:underline"
            data-cursor-hover
          >
            info@insightecs.co
          </a>
        </div>
      </div>
    </section>
  );
}
