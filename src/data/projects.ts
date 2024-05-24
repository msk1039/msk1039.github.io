export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Rock paper scissor game ",
    techs: ["html", "css", "js"],
    link: "https://github.com/msk1039/rock-paper-scissor",
  },
  {
    title: "Restaurant page",
    techs: ["js ", " webpacks"," html"," css"],
    link: "https://github.com/msk1039/restaurant-page1",
  },
  {
    title: "calculator app",
    techs: [" js"," html"," css"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
