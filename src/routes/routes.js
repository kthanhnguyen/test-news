import HomePage from "../pages/HomePage";
import DetailNews from "../pages/DetailNews";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/detail/:id&:name",
    exact: true,
    component: DetailNews
  }
];

export { routesHome };
