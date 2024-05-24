type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "mayankkadam1039@gmail.com",
  title: "Hi, I’m Mayank 👋",
  // profile: "/profile.webp",
  description:
    "I am a hobbyist programmer, currently a freshmen in a bachelors of informtation technology degree, who likes to write & build his mind out",
  socials: [
    {
      label: "X",
      link: "https://x.com/MayankK51049579",
    },
    {
      label: "Linkden",
      link: "https://www.linkedin.com/in/mayank-kadam-82a60227a/",
    },
    {
      label: "Github",
      link: "https://github.com/msk1039",
    },
  ],
};

export default presentation;
