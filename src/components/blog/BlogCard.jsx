import React from "react";
import { ArrowRight } from "lucide-react";

export function BlogCard({ post }) {
  return (
    <article
      id={`post-${post.slug}`}
      className="flex min-h-[560px] scroll-mt-32 flex-col border border-pocket-blue bg-pocket-canvas p-[15px] wide:min-h-[598px]"
    >
      <img src={post.image} alt="" className="aspect-[1.334/1] w-full object-cover" />

      <h3 className="mt-5 text-[20px] font-extrabold leading-[1.08] tracking-[0] text-pocket-muted">
        {post.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.categories.slice(0, 3).map((category) => (
          <span key={category} className="bg-pocket-yellow px-[7px] py-1 text-[11px] font-extrabold leading-none text-black">
            {category}
          </span>
        ))}
      </div>

      <p className="mt-4 text-[14px] font-semibold uppercase leading-tight text-pocket-blue">
        {post.author} <span aria-hidden="true">|</span> {post.date}
      </p>

      <a
        href={`#post-${post.slug}`}
        className="mt-auto inline-flex items-center gap-2 pt-8 text-[20px] font-semibold leading-none text-pocket-muted transition-colors hover:text-pocket-yellow"
      >
        Read More <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </a>
    </article>
  );
}
