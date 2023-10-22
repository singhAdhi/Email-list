import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmailBody from "./pages/EmailBody";
import EmailList from "./pages/EmailList";
import store from "./utils/store.js";
import { Provider } from "react-redux";
import Favorite from "./pages/Favorite";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <EmailList />,
  },
  {
    path: "/:id",
    element: <EmailBody />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
