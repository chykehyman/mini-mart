import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import axios from "axios";
import "./App.scss";
import LoaderComponent from "./components/loader/loader.component";
import NavBar from "./components/navbar/navbar.component";

const App: FC<{}> = () => {
  const { isLoading, error, data } = useQuery(
    ["products"],
    async () => {
      const data = await axios.get("/marketplace/blocks", {
        headers: { "Content-Type": "application/json" },
      });
      return data;
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoaderComponent message="Loading products" />;
  console.log({ data });

  // if (error) return "An error has occurred: " + (error as {message: string}).message;

  return (
    <div className="App">
      <NavBar numberOfCartItems={2} totalCredits={10000} />
    </div>
  );
};

export default App;
