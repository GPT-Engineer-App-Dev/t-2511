import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <Routes>
                <Route path="/all-tasks" element={<AllTasks />} />
                <Route path="/completed-tasks" element={<CompletedTasks />} />
                <Route path="/pending-tasks" element={<PendingTasks />} />
              </Routes>
            </div>
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;