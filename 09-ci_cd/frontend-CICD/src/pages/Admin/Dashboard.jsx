import React, { useEffect, useState } from "react";
import {
  ListCheckIcon,
  ListFilterPlus,
  MessageSquarePlus,
  PenBoxIcon,
} from "lucide-react";
import { assets } from "../../assets/assets.js";
import BlogTableItems from "../../components/Admin/BlogTableItems.jsx";
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { axios } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard-data");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [dashboardData]);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-4 bg-white p-4 min-w-60 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-15" src={assets.dashboard_icon_1} alt="" />
          <div className="text-xl font-semibold text-gray-600">
            <p>{dashboardData.blogs}</p>
            <p>Blogs</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-60 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-15" src={assets.dashboard_icon_2} alt="" />
          <div className="text-xl font-semibold text-gray-600">
            <p>{dashboardData.comments}</p>
            <p>Comments</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-60 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-15" src={assets.dashboard_icon_3} alt="" />
          <div className="text-xl font-semibold text-gray-600">
            <p>{dashboardData.drafts}</p>
            <p>Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 m-4 mt-8 text-gray-700 font-medium text-lg">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th className="px-2 py-4 xl:px-6" scope="col">
                  #
                </th>
                <th className="px-2 py-4" scope="col">
                  Blog Title
                </th>
                <th className="px-2 py-4 max-sm:hidden" scope="col">
                  Date
                </th>
                <th className="px-2 py-4 max-sm:hidden" scope="col">
                  Status
                </th>
                <th className="px-2 py-4" scope="col">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItems
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
