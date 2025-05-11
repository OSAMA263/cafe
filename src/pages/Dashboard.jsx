import { useEffect, useState } from "react";
import Button from "../components/Button";
import DashboardContent from "../components/dashboard/DashboardContent";
import { ChakraProvider } from "@chakra-ui/react";
import { DashboardContext } from "../state/dashboardContext";

export default function Dashboard() {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const adminData = Object.fromEntries(formData.entries());
    setAdmin(adminData);
  };

  useEffect(() => {
    if (admin) {
      fetch("https://cafe-site-backend.vercel.app/auth")
        .then((res) => res.json())
        .then(({ name, password }) => {
          if (name === admin.name && password === admin.password) {
            setError(null);
            localStorage.setItem("TheAmdin", JSON.stringify(admin));
          } else {
            setError("wrong credentials");
          }
        })
        .catch((error) => {
          console.error("Error fetching auth data:", error);
        });
    }
  }, [admin]);

  return (
    <div className="flex h-dvh w-full justify-center">
      {localStorage.getItem("TheAmdin") ? (
        <ChakraProvider>
          <DashboardContext>
            <DashboardContent />
          </DashboardContext>
        </ChakraProvider>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-[30%] mx-auto gap-6"
        >
          <input
            required
            className="border p-2"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            required
            className="border p-2"
            type="password"
            name="password"
            placeholder="password"
          />
          <Button
            as="button"
            type="submit"
            className="w-fit mx-auto"
            variant="dark"
          >
            Log in
          </Button>
          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}
        </form>
      )}
    </div>
  );
}
