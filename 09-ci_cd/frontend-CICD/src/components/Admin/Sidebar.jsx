import {
  Home,
  ListCheck,
  MessageCircleMore,
  PlusSquare,
  PanelLeftOpen,
  PanelRightOpen,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <div className="flex flex-col min-h-full relative">
      {/* Header / Title */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!collapsed && (
          <p className="font-bold text-xl text-blue-700 hidden md:block">
            Admin Panel
          </p>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {collapsed ? (
            <PanelRightOpen size={24} className="text-gray-700" />
          ) : (
            <PanelLeftOpen size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col mt-4">
        <SidebarLink
          to="/admin"
          icon={<Home size={24} />}
          label="Dashboard"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/admin/listblog"
          icon={<ListCheck size={24} />}
          label="Blog Lists"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/admin/addblog"
          icon={<PlusSquare size={24} />}
          label="Add Blog"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/admin/comments"
          icon={<MessageCircleMore size={24} />}
          label="Comments"
          collapsed={collapsed}
        />
      </nav>
    </div>
  );
};

/* 🔗 SidebarLink Subcomponent */
const SidebarLink = ({ to, icon, label, collapsed }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 md:px-6 cursor-pointer transition-all duration-150 ${
          isActive
            ? "bg-blue-100 text-blue-600 font-semibold border-r-[4px] border-blue-800"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <div className="min-w-[30px] flex justify-center">{icon}</div>
      {!collapsed && (
        <p className="hidden md:inline-block text-lg font-medium">{label}</p>
      )}
    </NavLink>
  );
};

export default Sidebar;
