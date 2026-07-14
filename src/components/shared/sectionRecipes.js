export const serviceIntroVariantStyles = {
  yellow: {
    section: "bg-pocket-yellow",
    title: "text-white",
    copy: "text-black",
    link: "text-white hover:text-pocket-blue"
  },
  blue: {
    section: "bg-pocket-blue",
    title: "text-white",
    copy: "text-black",
    link: "text-white hover:text-pocket-yellow"
  }
};

const sharedIntroDesktop = {
  featureTitle: "desktop:left-[120px] desktop:top-[272px] wide:left-[344px] wide:top-[235px]",
  featureTitleText: "desktop:text-[96px] desktop:tracking-[-4.8px] wide:text-[128px] wide:tracking-[-6.4px]",
  featureBody: "desktop:left-[120px] desktop:top-[568px] desktop:w-[650px] wide:left-[344px] wide:top-[620px] wide:max-w-none wide:w-[760px] wide:text-[22px] wide:leading-[1.7] wide:tracking-[-1.1px]",
  featureLinks: "desktop:left-[905px] desktop:top-[568px] wide:left-[1245px] wide:top-[620px] wide:w-[320px] wide:text-[32px]"
};

export const serviceIntroSizeStyles = {
  hero: {
    section: "h-[1081px] desktop:h-[960px] wide:h-[995px]",
    title: "desktop:left-[120px] desktop:top-[272px] wide:left-[344px] wide:top-[252px]",
    titleText: "desktop:text-[104px] desktop:tracking-[-5.2px] wide:text-[128px] wide:tracking-[-7px]",
    body: "desktop:left-[120px] desktop:top-[570px] desktop:w-[650px] wide:left-[344px] wide:top-[555px]",
    links: "desktop:left-[905px] desktop:top-[570px] wide:left-[1126px] wide:top-[555px]"
  },
  feature: {
    section: "min-h-[1160px] pb-[96px] desktop:h-[960px] desktop:min-h-0 desktop:pb-0 wide:h-[735px]",
    title: sharedIntroDesktop.featureTitle,
    titleText: sharedIntroDesktop.featureTitleText,
    body: sharedIntroDesktop.featureBody,
    links: sharedIntroDesktop.featureLinks
  },
  rest: {
    section: "min-h-[1240px] pb-[96px] desktop:h-[960px] desktop:min-h-0 desktop:pb-0 wide:h-[735px]",
    title: sharedIntroDesktop.featureTitle,
    titleText: "desktop:text-[96px] desktop:tracking-[-4.8px] wide:max-w-[1500px] wide:text-[128px] wide:tracking-[-6.4px]",
    body: sharedIntroDesktop.featureBody,
    links: sharedIntroDesktop.featureLinks
  }
};

export const serviceIntroMobileStyles = {
  "video-production": {
    inner: "pt-[183px]",
    title: "",
    copy: "mt-[40px]",
    links: "mt-[40px]"
  },
  photography: {
    inner: "pt-[176px]",
    title: "",
    copy: "mt-[40px]",
    links: "mt-[40px]"
  },
  "the-rest": {
    inner: "pt-[141px]",
    title: "",
    copy: "mt-[40px]",
    links: "mt-[40px]"
  }
};

export const serviceProcessColorClasses = {
  blue: "text-pocket-blue",
  yellow: "text-pocket-yellow"
};

export const serviceProcessBorderClasses = {
  blue: "border-pocket-blue",
  yellow: "border-pocket-yellow"
};

export const serviceProcessMobileHeights = {
  "video-process": "h-[1078px]",
  "photography-process": "h-[1126px]"
};

export const serviceProcessRowPlacements = [
  {
    text: "desktop:left-[35px] desktop:top-[350px] wide:left-[264px] wide:top-[382px]",
    media: "desktop:left-[532px] desktop:top-[282px] desktop:h-[532px] desktop:w-[908px] wide:left-[730px] wide:top-[322px] wide:h-[532px] wide:w-[1085px]"
  },
  {
    text: "desktop:left-[1056px] desktop:top-[940px] wide:left-[1226px] wide:top-[1000px]",
    media: "desktop:left-0 desktop:top-[872px] desktop:h-[532px] desktop:w-[908px] wide:left-0 wide:top-[928px] wide:h-[532px] wide:w-[1085px]"
  },
  {
    text: "desktop:left-[35px] desktop:top-[1528px] wide:left-[264px] wide:top-[1600px]",
    media: "desktop:left-[532px] desktop:top-[1463px] desktop:h-[532px] desktop:w-[908px] wide:left-auto wide:right-0 wide:top-[1540px] wide:h-[532px] wide:w-[1085px]"
  }
];
