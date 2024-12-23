"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import HomePageCards from "./components/HomePageCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomePageCards></HomePageCards>
      <Footer></Footer>
    </div>
  );
}
