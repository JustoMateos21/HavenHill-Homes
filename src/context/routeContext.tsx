import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// Define the shape of the context
interface RouteContextType {
  pathname: string;
  setPathname: (pathname: string) => void;
}

// Create the context with initial values
const RouteContext = createContext<RouteContextType>({
  pathname: "",
  setPathname: () => {},
});

// Custom provider to manage the state
export const RouteProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    // Set the initial pathname
    setPathname(router.pathname);

    // Update pathname when route changes
    const handleRouteChange = (url: string) => {
      setPathname(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname]);

  return (
    <RouteContext.Provider value={{ pathname, setPathname }}>
      {children}
    </RouteContext.Provider>
  );
};

// Custom hook to consume the context
export const useRoute = () => useContext(RouteContext);
