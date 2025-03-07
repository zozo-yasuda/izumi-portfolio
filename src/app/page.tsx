"use client";
import Gallery from "./components/gallery";
import HomeNav from "./components/homenav";

export default function Page() {
  return (
    <div className="bg-white grid grid-cols-3">
      <HomeNav />
      <Gallery />
    </div>
  );
}
