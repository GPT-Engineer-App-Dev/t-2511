import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { List, CheckCircle, Circle } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <List className="h-6 w-6" />
            <span>TodoApp</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
            <SidebarNavLink to="/all-tasks">
              <List className="h-4 w-4" />
              All Tasks
            </SidebarNavLink>
            <SidebarNavLink to="/completed-tasks">
              <CheckCircle className="h-4 w-4" />
              Completed Tasks
            </SidebarNavLink>
            <SidebarNavLink to="/pending-tasks">
              <Circle className="h-4 w-4" />
              Pending Tasks
            </SidebarNavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Sidebar;