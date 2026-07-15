import React from "react";
export const asset = (name) => `/figma/${name}`;

export const clientNames = [
  "Argos",
  "Soap & Glory",
  "Macmillan Cancer Support",
  "Kopparberg",
  "Ladbrokes",
  "Co-op",
  "Business Insider",
  "The Gym Group",
  "The Telegraph",
  "Rightmove",
  "The Guardian",
  "Prestige Flowers",
  "Tower Bridge Studios",
  "HairO",
  "Smiles Alliance",
  "Ayumi",
  "National Portrait Gallery",
  "Small Business Britain"
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Works", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Pricing", href: "/pricing/" }
];

export const worksPortfolioPage = {
  categories: [
    "Beauty",
    "Product",
    "Events",
    "Crowdfunding",
    "Fashion",
    "People",
    "Jewellery",
    "TV Ads",
    "HR",
    "Education",
    "Explainers",
    "Social First"
  ],
  featured: [
    {
      eyebrow: "Soap & Glory",
      title: "Beauty Product Campaign",
      type: "Photography",
      image: asset("works/portfolio/soap-and-glory.gif"),
      alt: "Soap and Glory beauty campaign",
      width: 460
    },
    {
      eyebrow: "HairO Brand Advert",
      title: "Beauty Video Production",
      type: "Video",
      video: asset("works/portfolio/hairo-brand-advert.com.mp4"),
      alt: "HairO beauty brand advert",
      width: 800
    },
    {
      eyebrow: "Nursem",
      title: "People & Portrait Photography",
      type: "Photography",
      image: asset("works/portfolio/nursem.png"),
      alt: "Nursem portrait campaign",
      width: 360
    },
    {
      eyebrow: "Photo Comp",
      title: "Beauty Product Photography",
      type: "Photography",
      image: asset("works/portfolio/works-gallery-photo-comp.jpg"),
      alt: "Stacked beauty pots on a yellow set",
      width: 600
    }
  ],
  categoryIntro: {
    title: "Category: Beauty",
    copy:
      "Beauty is where details matter. Texture, tone, skin, product finish and movement all need to feel considered, so we plan each shoot around the visual quality the brand needs to communicate. From social-first films to clean product photography, our team builds content that feels polished, useful and ready to perform.",
    links: [
      { label: "Beauty Videography", href: "#beauty-videography" },
      { label: "Beauty Photography", href: "#beauty-photography" }
    ]
  },
  videoItems: [
    { title: "Ayumi Behind the Scenes", video: asset("works/portfolio/client-video/behind-the-scenes-with-ayumi-vidburner.com.mp4"), alt: "Behind the scenes of an Ayumi beauty production" },
    { title: "Ayumi Campaign", video: asset("works/portfolio/client-video/behind-the-scenes-with-ayumi-vidburner.com (1).mp4"), alt: "Ayumi skincare campaign video" },
    { title: "BiM's Tasty Wraps", video: asset("works/portfolio/client-video/bims-tasty-wraps-vidburner.com.mp4"), alt: "BiM's Tasty Wraps campaign video" },
    { title: "BiM's Social Campaign", video: asset("works/portfolio/client-video/bims-tasty-wraps-vidburner.com (1).mp4"), alt: "BiM's Tasty Wraps social video" },
    { title: "California Walnuts", video: asset("works/portfolio/client-video/california-walnuts-christmas-tv-ad-vidburner.com.mp4"), alt: "California Walnuts Christmas television advert" },
    { title: "Gatineau Paris", video: asset("works/portfolio/client-video/gatineau-paris-video-1-vidburner.com.mp4"), alt: "Gatineau Paris beauty campaign" },
    { title: "Hygie Crowdfunding", video: asset("works/portfolio/client-video/hygie-crowdfunding-video-vidburner.com.mp4"), alt: "Hygie crowdfunding campaign video" },
    { title: "Little Cooks Co", video: asset("works/portfolio/client-video/little-cooks-co-tv-ad-vidburner.com.mp4"), alt: "Little Cooks Co television advert" },
    { title: "Pocket Creatives", video: asset("works/portfolio/client-video/Pocket Creatives Brand Film (1).mp4"), alt: "Pocket Creatives brand film" },
    { title: "Pancake Day", video: asset("works/portfolio/client-video/pocket-pancake-day-vidburner.com.mp4"), alt: "Pocket Creatives Pancake Day video" },
    { title: "Pancake Day Campaign", video: asset("works/portfolio/client-video/pocket-pancake-day-vidburner.com (1).mp4"), alt: "Pancake Day social campaign" },
    { title: "Vida Glow at Vogue", video: asset("works/portfolio/client-video/vida-glow-at-vogue-vidburner.com.mp4"), alt: "Vida Glow at Vogue event video" }
  ],
  photoItems: [
    { title: "Client 1.1", image: asset("works/portfolio/works-image97.jpg"), alt: "Beauty products on a pink display" },
    { title: "Client 1.2", image: asset("works/portfolio/works-rect-126.jpg"), alt: "Makeup artist applying lipstick" },
    { title: "Client 2", image: asset("works/portfolio/works-rect-127.jpg"), alt: "Beauty portrait in water" },
    { title: "Client 3.1", image: asset("works/portfolio/works-rect-128.jpg"), alt: "Pressed cosmetic powder close up" },
    { title: "Client 3.2", image: asset("works/portfolio/works-rect-129.jpg"), alt: "Cosmetic bottle with purple backdrop" },
    { title: "Client 4", image: asset("works/portfolio/works-rect-130.jpg"), alt: "Ayumi products arranged around a bowl" },
    { title: "Client 5.1", image: asset("works/portfolio/works-rect-131.jpg"), alt: "Soft beauty portrait" },
    { title: "Client 5.2", image: asset("works/portfolio/works-rect-132.jpg"), alt: "Holy Lama skincare product" },
    { title: "Client 6", image: asset("works/portfolio/works-rect-133.jpg"), alt: "Soap product under water" },
    { title: "Client 7.1", image: asset("works/portfolio/works-rect-134.jpg"), alt: "Beauty portrait with colourful makeup" },
    { title: "Client 7.2", image: asset("works/portfolio/works-rect-135.jpg"), alt: "Beauty model in black lingerie" },
    { title: "Client 8", image: asset("works/portfolio/works-rect-136.jpg"), alt: "Makeup artist applying eye makeup" }
  ]
};

export const pricingHero = {
  eyebrow: "Avoiding the taboo:",
  title: "Pricing for video production and photography",
  copy: [
    "Price is important to everybody, and we know this is a major factor in deciding who you'll want to work with. We like to think that clients work with us for a range of reasons, from our quality of output to our project management, but getting the budget in the right place is something that we spend a lot of time on.",
    "We can either quote from scratch once we understand your brief, or work to your target spend. This flexibility makes us a great fit for both small and large clients alike. You can read a bit more below about how we structure our rates for both video production and photography below, and we're always here for any queries."
  ],
  media: asset("hero-video.png"),
  alt: "Pocket Creatives billboard on a sunny street"
};

export const pricingModel = {
  title: "We use a modular pricing model:",
  checks: [
    "Pay only for what you need",
    "No matter how large or small your project",
    "Oh, and no budget overruns!"
  ],
  media: asset("hero-director-a.png"),
  cards: [
    {
      title: "Everything you need and no hidden costs.",
      copy:
        "There are lots of factors that affect the overall price of video production and photography shoots, such as props, backgrounds, models and locations. This is why there’s no one-size-fits all price, and most creative agencies won’t put any prices on their websites – as they can be misleading without a lot of description."
    },
    {
      title: "We'll get you from brief to quote in a flash!",
      copy:
        "We will work with you to understand your brief and the full photography and video production requirements of your project, before delivering a budget breakdown to you at the beginning of the process. This gives you a fully honest and transparent view of the resources that make up your project. There’s always room for conversation and tweaks, and we’re also happy to start with your ideal spend and work backwards."
    }
  ]
};

export const pricingExplainers = [
  {
    title: "Cheap or Expensive?",
    copy: [
      "To give you some context, we aim to be in the middle band in terms of our pricing structure, which means that our typical daily rates for photography and video production will sit in between those agencies who work at the very upper end of our industry, with individual freelancers at the lower end of the pricing range.",
      "It’s important to note that we’re not talking about quality here, just price. We’re often chosen ahead of the largest of our competitors as we can deliver great quality photography and video production services for a lower price. This is because we run an efficient setup, with less overheads and no bloat."
    ]
  },
  {
    title: "So how does it work?",
    copy: [
      "Our setup also makes us attractive to start-ups, those who are crowdfunding, and businesses who still need great photography and video production, but are working within tighter budgets.",
      "We do this by using modular pricing – knowing that each photography and video production project is different, you pay for just what you need.",
      "While some clients may need just an hour of photography to capture some simple pack shots for a new addition to their range, others may need a multiple camera setup for a TV advert to showcase their brand to the world. We have the ability to quote easily for both ends of that spectrum.",
      "If you already have a total budget available, share that with us and we can work out how to deliver as much as possible for what you have to spend."
    ]
  }
];

export const pricingServiceSlides = [
  {
    title: "Video Production...",
    cta: "Photography",
    media: asset("works/works-camera-shoot.png"),
    alt: "A camera monitor on a video shoot",
    copy: [
      <>
        <span className="underline font-bold underline-offset-4">
          Video production{" "}
        </span>
         is a more complex process compared with photography, both in planning, production and the fact that the edit time will span days rather than hours, as it does it photography.
      </>,
      "Similarly to a photo shoot, you'll need to think about the location: from studio spaces to Airbnbs for lifestyle work, and the consideration for sound as well.",
      "We may need a bigger team, if lighting, sound, or set requirements are needed. Additional equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion may also be considered for more creative briefs.",
      "Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists, food stylists may required too.",
      "Editing often needs multiple days to complete, and we'll best estimate this for you, allowing for time to feed back and make changes. We can also include music, sound effects and voiceover.",
      <>
        The{" "}
        <span className="underline font-bold underline-offset-4">
          Pocket Creatives{" "}
        </span>
         team will always provide a full breakdown when we quote for you, which then makes it easier to see what resources your project needs to get made.
      </>,
      <>
        To give you a general idea, a full day of filming with us starts at{" "}
        <span className="font-bold">
          £940+VAT.
        </span>
      </>
    ]
  },
  {
    title: "Photography...",
    cta: "Video Production",
    media: asset("photo-service.png"),
    alt: "Product photography set",
    copy: [
      <>
        <span className="underline font-bold underline-offset-4">
          Photography{" "}
        </span>
         is usually a more compact process compared with video production, but the planning still matters if the images need to work hard.
      </>,
      "Similarly to a video shoot, you'll need to think about the location: from studio spaces to Airbnbs for lifestyle work, and the styling needed to make the image feel right.",
      "We may need a bigger team if models, hair and makeup, food styling, set building or prop sourcing are needed. Additional equipment such as specialist lighting and tethered capture may also be considered for more creative briefs.",
      "Products, people, locations, set elements, props and materials all shape the final quote, so we plan the shoot around what the images need to achieve.",
      "Editing often happens quicker than video, but we'll still estimate retouching time clearly so you can feed back and make changes.",
      <>
        The{" "}
        <span className="underline font-bold underline-offset-4">
          Pocket Creatives{" "}
        </span>
         team will always provide a full breakdown when we quote for you, which then makes it easier to see what resources your project needs to get made.
      </>,
      "To give you a general idea, photography rates are built around the shoot time, edit time and the production support you need."
    ]
  }
];

export const clientLogos = Array.from({ length: 18 }, (_, index) => ({
  src: asset(`client-${String(index + 1).padStart(2, "0")}.png`),
  alt: clientNames[index] || `Client logo ${index + 1}`
}));

export const contactPage = {
  hero: {
    title: "Grab a latte and let's have a chat",
    copy: [
      "Want to talk about your new project with our video and photography agency team?",
      "We aim to reply within 1 hour during normal working hours, so we can get you that quote and any more information as quickly as possible.",
      "We'd love to hear from you!"
    ],
    formMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
  },
  details: [
    {
      label: "Call Pocket Creatives",
      value: "020 3633 8494",
      href: "tel:+442036338494",
      icon: asset("contact/icon-phone.svg")
    },
    {
      label: "Visit Pocket Creatives",
      value: "Wow Workspaces Battersea\nUnit 3, 7-9 Ingate Place\nBattersea, London SW8 3NS",
      href:
        "https://maps.google.com/maps?z=16&q=wow%2Bworkspaces%2Bbattersea%2Bunit%2B3%2C%2B7-9%2Bingate%2Bplace%2Bbattersea%2C%2Blondon%2Bsw8%2B3ns",
      icon: asset("contact/icon-location.svg")
    },
    {
      label: "Email Pocket Creatives",
      value: "team@pocketcreatives.co.uk",
      href: "mailto:team@pocketcreatives.co.uk",
      icon: asset("contact/icon-email.svg")
    }
  ],
  map: {
    media: asset("contact/map.png"),
    alt: "Map showing Pocket Creatives at Wow Workspaces Battersea"
  },
  opportunities: {
    vacancies: {
      title: "Vacancies",
      copy:
        "At our video and photography agency we always want to hear from great people and create regular opportunities. Feel free to send us your information to the address below:",
      email: "jobs@pocketcreatives.co.uk",
      media: asset("contact/vacancies.png"),
      alt: "A production team working together in a bright office"
    },
    partners: {
      title: "Partners",
      copy:
        "Our video and photography agency also has links to some excellent partners who work in other creative industries. If you think you'd make a good Pocket Partner, mail us below:",
      email: "partners@pocketcreatives.co.uk",
      media: asset("contact/partners.png"),
      alt: "A creative partner working with camera equipment"
    },
    seeWorksCircle: asset("contact/see-works.svg")
  }
};

export const logoGroups = [
  clientLogos.slice(0, 9),
  clientLogos.slice(9, 18)
];

export const videoSlides = [
  { title: "Beauty", image: asset("video/beauty-slider-video.mp4"), desktopImage: asset("video/beauty-slider-video.mp4") },
  { title: "Food&Drink", image: asset("video/food-slider-video.mp4") },
  { title: "Product", image: asset("video/product-video-slider.mp4") },
  { title: "Events", image: asset("video/events-slider-video.mp4") },
  { title: "Crowdfunding", image: asset("video/crowdfunding-video-slider.mp4") },
  { title: "Tv Ads", image: asset("video/tv-video-slider.mp4") },
  { title: "HR", image: asset("video-sample-1.png") },
  { title: "Education", image: asset("hero-video.png") },
  { title: "Explainers", image: asset("photo-service.png") },
  { title: "Social First", image: asset("bts-video.png") }
];

export const photoCategories = [
  "Beauty",
  "Food&Drink",
  "Product",
  "Events",
  "Crowdfunding",
  "Fashion",
  "People",
  "Jewellery"
];

export const features = [
  {
    title: "Proactive",
    copy:
      "We pride ourselves on our quality of service above everything else. We have taken the time to build a cracking little team at Pocket, and we make sure that you feel the benefits of working with a dedicated video production company who are there for you, and dedicated to the success of your project."
  },
  {
    title: "Nerds for Visuals",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Fermentum ut laoreet nunc at amet. Pretium sed tristique eu erat dui elementum eu duis. Sem posuere congue pellentesque duis in. Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis. Id at."
  },
  {
    title: "Valuable",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Varius tempor id nulla aliquet gravida. Quis at auctor quis lectus velit id parturient bibendum. Amet a erat faucibus enim orci. Praesent magna facilisi erat eget dictumst nulla nunc. Scelerisque cras viverra ipsum at accumsan a. Sed sollicitudin lacinia amet arcu volutpat. Id."
  },
  {
    title: "Flexible",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin nibh sed nullam commodo volutpat urna mus. Tristique arcu non sed erat amet facilisi aliquet massa feugiat. Ipsum placerat accumsan sagittis egestas sagittis id volutpat. Mauris est lectus libero at sem. Amet magna euismod tristique interdum pretium. Massa venenatis."
  },
  {
    title: "Normal People",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Quis eu aliquam molestie arcu maecenas. Integer volutpat quisque orci facilisis. Et volutpat mauris lacus feugiat tempor. Facilisi risus id egestas eget sit adipiscing nec lectus. Consequat pretium sit in id phasellus vitae mi. Libero tempus ut leo egestas elit. Ut consectetur lacus amet porta."
  },
  {
    title: "Conscious",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Gravida eget sem non feugiat iaculis faucibus. Ut enim semper in commodo neque tortor leo eu. Convallis est in leo porttitor tempor vitae etiam urna. Aliquet fusce dolor aliquet sed dictum. Dolor auctor vitae ultricies nisi ridiculus. Est elementum massa ullamcorper et malesuada et tristique."
  }
];

const serviceIntroCopy =
  "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.";

const serviceProcessCopy =
  "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.";

export const serviceIntroPanels = [
  {
    id: "video-production",
    label: "Video Production",
    variant: "yellow",
    size: "hero",
    title: ["Aaaand Action:", "Video Production"],
    mobileTitle: ["Aaaand", "Action: Video", "Production"],
    copy: serviceIntroCopy,
    links: [
      { label: "Photography", href: "#photography" },
      { label: "The Rest", href: "#the-rest" }
    ]
  },
  {
    id: "photography",
    label: "Photography",
    variant: "blue",
    size: "feature",
    title: ["Pixel perfection:", "Photography"],
    mobileTitle: ["Pixel", "perfection:", "Photography"],
    copy: serviceIntroCopy,
    links: [
      { label: "Video Production", href: "#video-production" },
      { label: "The Rest", href: "#the-rest" }
    ]
  },
  {
    id: "the-rest",
    label: "The Rest",
    variant: "yellow",
    size: "rest",
    title: ["We've got it covered:", "The Whole Package"],
    mobileTitle: ["We've got it", "covered: The", "Whole", "Package"],
    copy: serviceIntroCopy,
    links: [
      { label: "Video Production", href: "#video-production" },
      { label: "Photography", href: "#photography" }
    ]
  }
];

export const serviceProcessSections = [
  {
    id: "video-process",
    border: "yellow",
    headingPrefix: "The process:",
    headingSuffix: "making it easy for you",
    prefixColor: "blue",
    suffixColor: "yellow",
    items: [
      {
        title: "Pre-production",
        subtitle: "Meeting & Planning",
        copy: serviceProcessCopy,
        media: asset("works/works-footer-form-bg.png"),
        alt: "People planning a video project together"
      },
      {
        title: "Production",
        subtitle: "Lights, Camera, Action",
        copy: serviceProcessCopy,
        media: asset("works/works-meeting.png"),
        alt: "A cinema camera ready for a production shoot"
      },
      {
        title: "Post-production",
        subtitle: "Review & Edit",
        copy: serviceProcessCopy,
        media: asset("works/works-camera-shoot.png"),
        alt: "A camera operator reviewing production footage"
      }
    ]
  },
  {
    id: "photography-process",
    border: "blue",
    headingPrefix: "The process:",
    headingSuffix: "making it easy for you",
    prefixColor: "yellow",
    suffixColor: "blue",
    items: [
      {
        title: "Pre-production",
        subtitle: "Meeting & Planning",
        copy: serviceProcessCopy,
        media: asset("works/works-footer-form-bg.png"),
        alt: "A creative planning meeting before photography"
      },
      {
        title: "Production",
        subtitle: "Lights, Camera, Action",
        copy: serviceProcessCopy,
        media: asset("photo-service.png"),
        alt: "Beauty product photography on a pink backdrop"
      },
      {
        title: "Post-production",
        subtitle: "Review & Edit",
        copy: serviceProcessCopy,
        media: asset("works/works-camera-shoot.png"),
        alt: "Reviewing a photography edit"
      }
    ]
  }
];

export const serviceSnippetItems = [
  {
    title: "Planning",
    bullets: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"],
    copy: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
    media: asset("works/works-footer-form-bg.png"),
    alt: "A producer planning a project from a notebook"
  },
  {
    title: "Talent & Location",
    bullets: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"],
    copy: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
    media: asset("hero-director-a.png"),
    alt: "A director scouting a visual location"
  },
  {
    title: "Editing",
    bullets: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"],
    copy: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
    media: asset("works/works-camera-shoot.png"),
    alt: "A production team editing visual work"
  },
  {
    title: "Delivery",
    bullets: ["Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit"],
    copy: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
    media: asset("bts-video.png"),
    alt: "Finished product visuals prepared for delivery"
  }
];

export const aboutWorkCards = [
  {
    title: "Soap And Glory",
    category: "People & Portrait Photography",
    copy:
      "Expertly delivered product photography and product videos. From simple pack shots to creative product-led campaigns, our high quality imagery is designed to entice the viewer and convert to a customer.",
    media: asset("photo-service.png")
  },
  {
    title: "HairO Brand Advert",
    category: "Beauty Video Production",
    copy:
      "Expertly crafted cosmetics, personal care and beauty video and beauty photography. Creating both usage and creative product content, high quality photography shows your beauty brand in its best light.",
    media: asset("video/beauty-slider-video.mp4")
  },
  {
    title: "Smiles Alliance",
    category: "People & Portrait Photography",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida metus eget orci iaculis, eu ornare augue auctor. Donec at sagittis magna.",
    media: asset("video-sample-3.png")
  },
  {
    title: "Studio Set",
    category: "Video Production",
    copy:
      "Behind the scenes, lighting, direction and production support for brand films, campaign shoots and social-first content.",
    media: asset("bts-blonde-thumb.png")
  }
];

export const aboutReasons = [
  {
    title: "We care about how it feels",
    copy:
      "Good content matters-but so does the experience. From first chat to final edit, we keep things easy, honest, and collaborative. We listen, we guide, and we make sure the process feels smooth from start to finish."
  },
  {
    title: "We work around you",
    copy:
      "Every client is different, so we don't approach projects the same way. We're flexible with pricing, clear about costs, and always happy to find smart ways to make your budget go further."
  },
  {
    title: "We make visuals that speak",
    copy:
      "We don't just shoot pretty pictures. We tell stories. We use styling, locations, and talent to help your brand stand out and feel real. We want to help you surpass expectations and achieve more than simply keeping up with your competition."
  },
  {
    title: "Values You Can Feel",
    copy:
      "We treat every client like a partner and stay flexible across industries. We work fast when needed, stay kind always, and commit to working transparently. We believe in being kind, honest, and easy to work with because that's how great work gets made."
  }
];

export const aboutReasonsResponsive = [
  {
    title: "We're consultative",
    copy:
      "The consultation process is arguably the most important stage of any project. Within a few questions we can understand more about what you're looking for and how we can best provide our video and photography services. Our aim is to understand what you need, provide our recommendations, and then present you with some options."
  },
  {
    title: "It's all about service",
    copy:
      "This is a hard industry to develop USPs in - established video and photography companies deliver content to a professional standard these days, and in all shapes and sizes. We take the above as a given and know that we have to deliver quality that goes beyond your budget, but more importantly, we know that you're more likely to come back if we provide a great service and if you've enjoyed the experience."
  },
  {
    title: "At the right price",
    copy:
      "Every client has different spending power. Every business has a need for video and photography, and living in an increasingly visual world there's a greater reliance than ever on communicating through visual media. We'll give you a budget breakdown and will work with you to manage your budget in an honest and transparent way. Very often we can make a modest pot go further than you'd think!"
  },
  {
    title: "For everybody",
    copy:
      "We're privileged to have built this company through providing video and photography for both small businesses and startups through to some of the largest companies in the UK, it's our goal to stay competitive and offer a service that's tailored to fit YOU. Quality content creation shouldn't just be for those with the greatest spending power - and our modular pricing model means that we can cater for everybody."
  },
  {
    title: "We're flexible, adaptable and versatile People",
    copy:
      "We're multi-sector experienced and unashamedly diverse. We've chosen to remain flexible so that we can respond and rise to different challenges with great video and photography content. While our main areas of expertise are in food & drink, beauty & cosmetics, products, health & wellbeing and products, our skills allow us to work across wider sectors. Experience in one area helps to cross-pollinate new skills that are relevant to other markets."
  },
  {
    title: "We understand urgency!",
    copy:
      "We know how important it is for you to have it done yesterday and capitalise on the now. Getting your content in front of your audience at the right time is so important, particularly in today's trend and time-driven world. Good planning, organisation and communication is the key."
  },
  {
    title: "We want to help you stand out",
    copy:
      "Our video and photography content says more, shouts louder, and travels further. We want to stay true to the quote that an image is worth a thousand words... and counting! There's a time and a place for simple product images isolated against white backgrounds, and we offer those as well. But to get the best from us, we want to make use of locations, props, styling, and models as they all help to tell your story for a greater visual impact."
  },
  {
    title: "We always put our clients first",
    copy:
      "You're more important to us than anything. We wouldn't exist without you, we know that, so we'll do our very best to make sure that you're always happy with our video and photography content, and you want to work with us time and again. We've built long-standing and trustworthy relationships with our clients since we started, so that we can partner each other as we grow."
  },
  {
    title: "We champion young talent",
    copy:
      "Fresh ideas, energy and drive, and a sense of ownership and responsibility, guided by experience... at your disposal. So whether you're looking for content creation for social media, event filming in London, or just a video editor, we can deliver the talent. This year, we have also been a part of the government's Kickstart scheme to help a new entrant into the industry."
  }
];

export const aboutCodeItems = [
  {
    number: "1",
    title: "Quality of Product",
    why: "Why is this important to us?",
    whyCopy:
      "You should expect a professional level of visual quality and craft from the video and photography work that we deliver. The quality of what we create is as important to us as it is to you, and we want to be continually proud of the end results.",
    how: "How are we going to achieve it?",
    howCopy:
      "We will achieve this by being aware of how technology and techniques in our industry can directly shape individual video and photography projects; by choosing the right equipment and approach to fit the brief; and monitoring accuracy through internal quality control procedures and retrospective project reviews."
  },
  {
    number: "2",
    title: "Kind, Mindful and Ethical Conduct",
    why: "Why is this important to us?",
    whyCopy:
      "Creating great working relationships makes projects more enjoyable, but helps us all to do our best work too. We measure the success of a project by the result and the way we conduct ourselves throughout it.",
    how: "How are we going to achieve it?",
    howCopy:
      "We aspire to create an environment where people know they can have open and honest conversations. From video and photography projects to suppliers and clients, we aim to treat everyone with respect."
  },
  {
    number: "3",
    title: "Clear Communication",
    why: "Why is this important to us?",
    whyCopy:
      "Good production work depends on shared expectations. Clear communication keeps decisions visible, gives each project a better rhythm, and helps everyone feel confident from start to finish.",
    how: "How are we going to achieve it?",
    howCopy:
      "We set out the shape of the project early, keep notes and feedback simple, and make sure every major decision has a clear owner before moving forward."
  },
  {
    number: "4",
    title: "Enjoyable Collaboration",
    why: "Why is this important to us?",
    whyCopy:
      "The best shoots are collaborative. We want people to feel relaxed, listened to, and able to contribute ideas that make the final images and films stronger.",
    how: "How are we going to achieve it?",
    howCopy:
      "We plan carefully, stay flexible on set, and keep the process human so everyone involved can focus on making the work better."
  }
];

export const aboutStoryItems = [
  {
    year: "2017",
    copy:
      "Pocket Creatives launched in the winter of 2017, formed as a limited company following the team working under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution."
  },
  {
    year: "2015",
    copy:
      "Steven's professional history started in broadcasting, supporting mainstream television programmes such as BBC's Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen."
  },
  {
    year: "2010",
    copy:
      "But photography and video production have long been our passion, and the team cut their teeth around small, innovative corporate video projects alongside called Screensaver while working with clients such as Tower Bridge and the National Portrait Gallery."
  }
];

export const howWeWorkProcessItems = [
  {
    title: "It starts by understanding",
    copy: [
      "You'll have to forgive us, but we ask a lot of questions at the start. There's a good reason for this, stay with me...",
      "Our initial consultation is designed to get what's in your head into ours. The more that we understand your brand and the context around your project, the better we can offer our expertise and tailor it to your needs. There are no templates here or off the shelf packages that 396 clients have bought before you, we're responding to your individual requirements."
    ]
  },
  {
    title: "It's not all about the money",
    copy: [
      "Budgets matter, but the right fit matters more. We help shape the scope around the outcome you need and keep the approach honest from the first conversation."
    ]
  },
  {
    title: "Planning is the most important stage",
    copy: [
      "Every shoot, edit and delivery has a better chance when the thinking is clear upfront. We map out what needs to happen so the creative work has room to breathe."
    ]
  }
];

export const directors = [
  {
    name: "Steven",
    surname: "Mayatt",
    roles: ["Managing Director", "Creative Director", "Photographer", "Entrepreneur", "Marketeer", "Coffee Drinker"],
    image: asset("team-steven-figma.png"),
    linkedin: "https://www.linkedin.com/in/stevenmayatt/?originalSubdomain=uk",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
  },
  {
    name: "Haider",
    surname: "Romero Perez",
    roles: ["Technical Director", "Cinematographer", "Cameraman", "Editor", "Colourist", "Intrepid Cyclist"],
    image: asset("team-haider-figma.png"),
    linkedin: "#",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
  },
  {
    name: "Lauren",
    surname: "Hodge",
    roles: ["Production Director", "Organiser", "Planner", "Emergency Hand model", "Prop Shopper", "Recipe Wrangler"],
    image: asset("team-lauren-figma.png"),
    linkedin: "#",
    copy:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
  }
];

export const reviews = [
  {
    quote:
      "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)",
    name: "Winnie Asawakanjanakit"
  },
  {
    quote:
      "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating...",
    name: "Crime And Comedy Theatre Co.."
  },
  {
    quote:
      "Very professional company to deal with and delighted with the product videos received. Always a pleasure to dela with Steven and his team.",
    name: "John Bond"
  },
  {
    quote:
      "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with...",
    name: "Marcus Ramtohul"
  },
  {
    quote:
      "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!",
    name: "Klara Niklewicz"
  },
  {
    quote:
      "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great...",
    name: "Michelle Vellacott"
  }
];

export const socials = [
  { label: "YouTube", icon: asset("social-youtube.svg"), href: "#", width: 34.063 },
  { label: "Vimeo", icon: asset("social-vimeo.svg"), href: "#", width: 27.574 },
  { label: "Instagram", icon: asset("social-instagram.svg"), href: "#", width: 24 },
  { label: "Pinterest", icon: asset("social-pinterest.svg"), href: "#", width: 19.212 },
  { label: "LinkedIn", icon: asset("social-linkedin.svg"), href: "#", width: 24.238 },
  { label: "Facebook", icon: asset("social-facebook.svg"), href: "#", width: 12.451 },
  { label: "X", icon: asset("social-x.svg"), href: "#", width: 26.552 },
  { label: "Tumblr", icon: asset("social-tumblr.svg"), href: "#", width: 13.586 }
];
