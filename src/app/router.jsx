import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import PublicRoute from "../features/auth/components/PublicRoute";

import LoginPage from "../features/auth/pages/LoginPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import CategoriesPage from "../features/categories/pages/CategoriesPage";
import InventoryPage from "../features/inventory/pages/InventoryPage";
import SuppliersPage from "../features/suppliers/pages/SuppliersPage";
import CustomersPage from "../features/customers/pages/CustomersPage";
import PurchasesPage from "../features/purchases/pages/PurchasesPage";
import SalesPage from "../features/sales/pages/SalesPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  // Public Route
  {
  path: "/login",
  element: (
    <PublicRoute>
      <LoginPage />
    </PublicRoute>
  )
},

  // Protected Routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/dashboard"
            replace
          />
        )
      },

      {
        path: "dashboard",
        element: <DashboardPage />
      },

      {
        path: "products",
        element: <ProductsPage />
      },

      {
        path: "categories",
        element: <CategoriesPage />
      },

      {
        path: "inventory",
        element: <InventoryPage />
      },

      {
        path: "suppliers",
        element: <SuppliersPage />
      },

      {
        path: "customers",
        element: <CustomersPage />
      },

      {
        path: "purchases",
        element: <PurchasesPage />
      },

      {
        path: "sales",
        element: <SalesPage />
      },

      {
        path: "reports",
        element: <ReportsPage />
      },

      {
        path: "settings",
        element: <SettingsPage />
      }
    ]
  },

  // 404
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default router;