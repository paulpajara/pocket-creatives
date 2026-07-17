import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { FeaturedBlogCarousel } from "./FeaturedBlogCarousel";
import { blogCategories, blogPosts } from "../../data/blogContent";
import { cn } from "../../utils/cn";

const POSTS_PER_PAGE = 9;

export function BlogLandingPage() {
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const [page, setPage] = useState(0);

  const filteredPosts = useMemo(
    () => blogPosts.filter((post) => post.categories.includes(activeCategory)),
    [activeCategory]
  );
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const visiblePosts = filteredPosts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setPage(0);
  };

  return (
    <main className="bg-pocket-canvas">
      <FeaturedBlogCarousel />

      <section className="bg-pocket-canvas px-5 pb-24 pt-16 desktop:min-h-[2280px] desktop:px-[37px] desktop:pb-[120px] desktop:pt-[96px] wide:h-[2560px] wide:px-0 wide:pb-0 wide:pt-[136px]">
        <div className="mx-auto w-full max-w-[1428px]">
          <h1 className="text-center text-[52px] font-extrabold leading-none tracking-[0] text-pocket-blue desktop:text-[72px] wide:text-[80px]">
            Our Blogs
          </h1>

          <div className="mx-auto mt-9 flex max-w-[1320px] flex-wrap justify-center gap-x-5 gap-y-4 desktop:mt-12 desktop:gap-x-6 wide:mt-[54px]">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={cn(
                  "text-[14px] font-extrabold uppercase leading-none transition-colors hover:text-pocket-yellow desktop:text-[17px] wide:text-[20px]",
                  activeCategory === category ? "text-pocket-yellow" : "text-pocket-muted"
                )}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 desktop:mt-[84px] desktop:grid-cols-3 desktop:gap-x-6 desktop:gap-y-9 wide:mt-[80px] wide:grid-cols-3 wide:gap-[35px]">
            {visiblePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <nav className="mt-16 flex items-center justify-center gap-8 desktop:mt-[76px] wide:mt-[53px]" aria-label="Blog pagination">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(0, current - 1))}
              disabled={page === 0}
              className="inline-flex items-center gap-2 text-[18px] font-semibold transition-colors hover:text-pocket-yellow disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" /> Prev
            </button>
            <span className="text-[18px] font-semibold">{page + 1} of {pageCount}</span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
              disabled={page >= pageCount - 1}
              className="inline-flex items-center gap-2 text-[18px] font-semibold transition-colors hover:text-pocket-yellow disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}
