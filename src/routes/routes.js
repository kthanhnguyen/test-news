import HomePage from "../pages/HomePage";
import DetailNewsPage from "../pages/DetailNewsPage";
import DetailTopHeadlinePage from "../pages/DetailTopHeadlinePage";
import SelectionPage from "../pages/SelectionPage";
import DetailSelectionPage from "../pages/DetailSelectionPage";

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
  },
  {
    path: "/selection/:name",
    exact: true,
    component: SelectionPage
  },
  {
    path: "/detail-selection/:id&:name",
    exact: true,
    component: DetailSelectionPage
  }
];

export { routesHome };
