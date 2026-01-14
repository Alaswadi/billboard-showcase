import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GovernmentDashboard from "./pages/dashboard/GovernmentDashboard";
import GovernmentBillboards from "./pages/dashboard/government/Billboards";
import GovernmentRequests from "./pages/dashboard/government/Requests";
import GovernmentLicenses from "./pages/dashboard/government/Licenses";
import GovernmentCompanies from "./pages/dashboard/government/Companies";

import AdCompanyDashboard from "./pages/dashboard/AdCompanyDashboard";
import AdCompanyBillboards from "./pages/dashboard/ad-company/MyBillboards";
import AdCompanyCampaigns from "./pages/dashboard/ad-company/Campaigns";
import AdCompanyBilling from "./pages/dashboard/ad-company/Billing";

import EndUserDashboard from "./pages/dashboard/EndUserDashboard";
import EndUserLocations from "./pages/dashboard/end-user/Locations";
import EndUserAds from "./pages/dashboard/end-user/MyAds";
import EndUserPayments from "./pages/dashboard/end-user/Payments";
import SettingsPage from "./pages/dashboard/Settings";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />

      {/* Mockup Routes */}
      <Route path={"/login"} component={Login} />

      {/* Government Routes */}
      <Route path={"/dashboard/government"} component={GovernmentDashboard} />
      <Route path={"/dashboard/government/billboards"} component={GovernmentBillboards} />
      <Route path={"/dashboard/government/requests"} component={GovernmentRequests} />
      <Route path={"/dashboard/government/licenses"} component={GovernmentLicenses} />
      <Route path={"/dashboard/government/companies"} component={GovernmentCompanies} />
      <Route path={"/dashboard/government/settings"} component={() => <SettingsPage role="government" />} />

      {/* Ad Company Routes */}
      <Route path={"/dashboard/ad-company"} component={AdCompanyDashboard} />
      <Route path={"/dashboard/ad-company/my-billboards"} component={AdCompanyBillboards} />
      <Route path={"/dashboard/ad-company/campaigns"} component={AdCompanyCampaigns} />
      <Route path={"/dashboard/ad-company/billing"} component={AdCompanyBilling} />
      <Route path={"/dashboard/ad-company/settings"} component={() => <SettingsPage role="advertising_company" />} />

      {/* End User Routes */}
      <Route path={"/dashboard/end-user"} component={EndUserDashboard} />
      <Route path={"/dashboard/end-user/locations"} component={EndUserLocations} />
      <Route path={"/dashboard/end-user/ads"} component={EndUserAds} />
      <Route path={"/dashboard/end-user/payments"} component={EndUserPayments} />
      <Route path={"/dashboard/end-user/settings"} component={() => <SettingsPage role="end_user" />} />
      {/* Sub-routes for dashboards can point to the main dashboard for now for the mockup effect if needed, or we just handle top level */}

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
