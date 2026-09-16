import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["600"],
});

export default function StartupCard({
  date,
  views,
  authorName,
  authorImage,
  authorHref,
  title,
  description,
  image,
  id,
  category = "Tech",
}) {
  return (
    <div
      className="group flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
                 h-[420px] flex-col overflow-hidden rounded-2xl border border-[#14110F]/10
                 bg-white p-4 transition hover:shadow-[0_8px_30px_rgba(20,17,15,0.08)]"
    >
      {/* Date + views */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          {date}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#14110F]/50">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {views}
        </span>
      </div>

      {/* Author -> profile link */}
      <Link
        href={authorHref}
        className="mt-4 flex items-center gap-2 text-sm text-[#14110F]/60 hover:text-[#14110F]"
      >
        <img
          src={authorImage}
          alt={authorName}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span>{authorName}</span>
      </Link>

      {/* Title -> startup link */}
      <Link href={`/startup/${id}`}>
        <h3
          className={`${plexMono.className} mt-2 text-lg font-semibold leading-snug text-[#14110F] transition group-hover:text-amber-600`}
        >
          {title}
        </h3>
      </Link>

      {/* Description -> startup link */}
      <Link href={`/startup/${id}`}>
        <p className="mt-1 line-clamp-2 text-sm text-[#14110F]/60">
          {description}
        </p>
      </Link>

      {/* Image -> startup link */}
      <Link href={`/startup/${id}`} className="mt-4 block flex-1 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      {/* Category + Details */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-[#14110F]/40">
          {category}
        </span>
        <Link
          href={`/startup/${id}`}
          className="rounded-full bg-[#14110F] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-500 hover:text-[#14110F]"
        >
          Details
        </Link>
      </div>
    </div>
  );
}