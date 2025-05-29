import { Link } from "react-router";
import type { OrgConfig } from "./types/config";

interface HeaderProps {
  config?: OrgConfig | null;
  isLoading?: boolean;
}

function App({ config, isLoading }: HeaderProps) {
  const branding = config?.branding;
  const theme = config?.theme;
  const remotes = config?.remoteModules || [];

  return (
    <header
      className="flex gap-4 p-4 text-white items-center"
      style={{ backgroundColor: theme?.colors?.primary || "#3B82F6" }}
    >
      <Link to="/">
        <h1 className="text-white font-bold text-2xl">
          {branding?.appName || "Tractor Header"}
        </h1>
      </Link>
      <nav>
        <div className="flex space-x-4">
          {Object.entries(remotes).map(([key, remote]) => (
            <Link
              key={key}
              to={remote.path}
              className="text-white border-b-2 border-transparent hover:border-white transition-colors"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default App;
