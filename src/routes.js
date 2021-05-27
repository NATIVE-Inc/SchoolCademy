
import Index from "views/Index.js";
import Study from "views/Study.js";
import Sections from "views/Sections.js";
import Topics from "views/Topics.js";
import Subjects from "views/Subjects";
import Classes from "views/Classes";
import About from "views/About";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/topics",
    name: "Topics",
    icon: "ni ni-planet text-blue",
    component: Topics,
    layout: "/admin",
  },
  {
    path: "/sections",
    name: "Sections",
    icon: "ni ni-pin-3 text-orange",
    component: Sections,
    layout: "/admin",
  },
  {
    path: "/study",
    name: "Study",
    icon: "ni ni-single-02 text-yellow",
    component: Study,
    layout: "/admin",
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-single-02 text-yellow",
    component: Subjects,
    layout: "/admin",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-single-02 text-yellow",
    component: Classes,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "ni ni-single-02 text-yellow",
    component: About,
    layout: "/admin",
  },
];
export default routes;
