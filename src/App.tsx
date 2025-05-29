import { Link } from "react-router";
import type { OrgConfig } from "./types/config";

interface HeaderProps {
  config?: OrgConfig | null;
  isLoading?: boolean;
}

function App({ config, isLoading }: HeaderProps) {
  const branding = config?.branding;
  const theme = config?.theme;

  return (
    <header
      className="flex gap-4 p-4"
      style={{ backgroundColor: theme?.colors?.primary || "#3B82F6" }}
    >
      <Link to="/">
        <h1 className="text-white font-bold">
          {branding?.appName || "Tractor Header"}
        </h1>
      </Link>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/remote" className="text-white hover:underline">
          Remote
        </Link>
        <Link to="/remote" className="text-white hover:underline">
          Another One
        </Link>
      </nav>
    </header>
  );
}

export default App;
