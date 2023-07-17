import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { check_user_details } from "./components/common_functions";
import { useQuery } from "@tanstack/react-query";

const JustAFantasy = () => {
  const [english, setEnglish] = useState(true);
  const [dark, setDark] = useState(true);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["JustAFantasyMain"],
    queryFn: check_user_details,
  });

  if (isLoading) return <div>Loading... please wait</div>;

  if (isError) {
    console.log(error);
    return <div>Sorry there was an error requesting your data</div>;
  }

  if (data)
    return (
      <div>
        <Header
          english={english}
          changeLocale={() => setEnglish((prev) => !prev)}
          dark={dark}
          changeDark={() => setDark((prev) => !prev)}
        />
        <Outlet context={{ dark: dark, english: english, stats: data.stats }} />
        <Footer english={english} dark={dark} />
      </div>
    );
};

export default JustAFantasy;
