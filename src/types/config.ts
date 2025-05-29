export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    background: string;
    foreground: string;
    error: string;
    warning: string;
    success: string;
  };
  fonts: {
    sans: string;
    serif: string;
    mono: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    base: string;
  };
}

export interface RemoteModuleConfig {
  path: string;
  url: string;
  module: string;
}

export interface OrgConfig {
  id: string;
  orgId: string;
  theme: ThemeConfig;
  remoteModules: Record<string, RemoteModuleConfig>;
  features: {
    enableAnalytics: boolean;
    enableReporting: boolean;
    enableAdvancedSearch: boolean;
  };
  branding: {
    appName: string;
    logo: string;
    favicon: string;
  };
}