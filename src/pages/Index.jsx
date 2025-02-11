import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to TodoApp</h1>
      <p>Manage your tasks efficiently and effectively.</p>
      <Button className="mt-4" onClick={() => navigate("/all-tasks")}>
        Get Started
      </Button>
    </div>
  );
};

export default Index;