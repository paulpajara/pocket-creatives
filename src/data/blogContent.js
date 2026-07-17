const blogImage = (number) => `/figma/blog/blog-${String(number).padStart(2, "0")}.jpg`;

export const blogCategories = [
  "Beauty",
  "Company",
  "Crowdfunding",
  "Events",
  "Fashion",
  "Food",
  "Food & Drink",
  "Jewellery",
  "People",
  "Photography",
  "Portaits",
  "Products",
  "Video"
];

export const blogPosts = [
  {
    slug: "explainer-video-benefits-and-uses",
    title: "What is an Explainer Video? Benefits and Uses Explained",
    categories: ["Beauty", "Products", "Video"],
    author: "Pocket Creatives",
    date: "14 March 2025",
    image: blogImage(1)
  },
  {
    slug: "pony-revolution-beauty-photography",
    title: "Beauty Product Photography for Pony Revolution",
    categories: ["Beauty", "Photography", "Products"],
    author: "Pocket Creatives",
    date: "7 March 2025",
    image: blogImage(2)
  },
  {
    slug: "meeting-gouri-kubair-holy-lama",
    title: "Meeting Gouri Kubair at Holy Lama",
    categories: ["Beauty", "Company", "People"],
    author: "Pocket Creatives",
    date: "28 February 2025",
    image: blogImage(3)
  },
  {
    slug: "shooting-stop-motion-video",
    title: "Shooting Stop Motion Video",
    categories: ["Beauty", "Products", "Video"],
    author: "Pocket Creatives",
    date: "21 February 2025",
    image: blogImage(4)
  },
  {
    slug: "christmas-photography-2020",
    title: "Christmas Photography: Building a Seasonal Set",
    categories: ["Beauty", "Jewellery", "Photography", "Products"],
    author: "Pocket Creatives",
    date: "14 February 2025",
    image: blogImage(5)
  },
  {
    slug: "beauty-video-production-behind-the-scenes",
    title: "Behind the Lens: Beauty Video Production",
    categories: ["Beauty", "Company", "Video"],
    author: "Pocket Creatives",
    date: "7 February 2025",
    image: blogImage(6)
  },
  {
    slug: "crowdfunding-campaign-that-converts",
    title: "Creating a Crowdfunding Campaign That Converts",
    categories: ["Beauty", "Crowdfunding", "Video"],
    author: "Pocket Creatives",
    date: "31 January 2025",
    image: blogImage(7)
  },
  {
    slug: "product-photography-brands-tangible",
    title: "Product Photography: Making Brands Tangible",
    categories: ["Beauty", "Photography", "Products"],
    author: "Pocket Creatives",
    date: "24 January 2025",
    image: blogImage(8)
  },
  {
    slug: "food-drink-social-campaigns",
    title: "Food and Drink Photography for Social Campaigns",
    categories: ["Beauty", "Food", "Food & Drink", "Photography"],
    author: "Pocket Creatives",
    date: "17 January 2025",
    image: blogImage(9)
  },
  {
    slug: "fashion-content-that-moves",
    title: "Fashion Content That Moves With Your Audience",
    categories: ["Beauty", "Fashion", "People", "Video"],
    author: "Pocket Creatives",
    date: "10 January 2025",
    image: blogImage(10)
  },
  {
    slug: "event-content-longer-life",
    title: "Giving Event Content a Longer Life",
    categories: ["Beauty", "Events", "Photography", "Video"],
    author: "Pocket Creatives",
    date: "3 January 2025",
    image: blogImage(11)
  },
  {
    slug: "portrait-photography-brand-stories",
    title: "Portrait Photography That Tells Brand Stories",
    categories: ["Beauty", "People", "Portaits", "Photography"],
    author: "Pocket Creatives",
    date: "20 December 2024",
    image: blogImage(12)
  }
];

export const featuredBlogPosts = blogPosts.slice(0, 6);
