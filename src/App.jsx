import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import ResturantMenu from "./components/ResturantMenu";
import Cart from "./components/Cart";
import Error from './components/Error'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
