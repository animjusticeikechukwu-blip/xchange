import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import MedicineDetail from "./pages/MedicineDetail.tsx";
import NewListing from "./pages/NewListing.tsx";
import ListingsPage from "./pages/ListingsPage.tsx";
import NotificationsPage from "./pages/NotificationsPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import TransactionsPage from "./pages/TransactionsPage.tsx";
import TransactionDetail from "./pages/TransactionDetail.tsx";
import TransactionSummary from "./pages/TransactionSummary.tsx";
import PaymentSuccess from "./pages/PaymentSuccess.tsx";
import Welcome from "./pages/Welcome.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import VerifyPage from "./pages/VerifyPage.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import ChangePassword from "./pages/ChangePassword.tsx";
import FacilityInfo from "./pages/FacilityInfo.tsx";
import PaymentInfoPage from "./pages/PaymentInfoPage.tsx";
import SupportPage from "./pages/SupportPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/medicine/:id" element={<MedicineDetail />} />
          <Route path="/new-listing" element={<NewListing />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transaction-detail/:id" element={<TransactionDetail />} />
          <Route path="/transaction/:id" element={<TransactionSummary />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/facility-info" element={<FacilityInfo />} />
          <Route path="/payment-info" element={<PaymentInfoPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
