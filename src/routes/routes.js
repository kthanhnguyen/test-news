import HomePage from "../pages/HomePage";
import DetailNewsPage from "../pages/DetailNewsPage";
import DetailTopHeadlinePage from "../pages/DetailTopHeadlinePage";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/detail/:name",
    exact: true,
    component: DetailNewsPage
  },
  {
    path: "/top-heading/:name",
    exact: true,
    component: DetailTopHeadlinePage
  }
];

export { routesHome };
