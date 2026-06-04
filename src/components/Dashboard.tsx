import { FC } from "react";
import Sidebar from "./dashboard ui/sideBar";
import ImageMangaer from "./dashboard ui/imageManager";

const Dashboard: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      </main>
      <ImageMangaer />
    </div>
  );
};

export default Dashboard;