import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

import LoginPage from "../features/auth/pages/LoginPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import CategoriesPage from "../features/categories/pages/CategoriesPage";
import InventoryPage from "../features/inventory/pages/InventoryPage";
import SuppliersPage from "../features/suppliers/pages/SuppliersPage";
import PurchasesPage from "../features/purchases/pages/PurchasesPage";
import SalesPage from "../features/sales/pages/SalesPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import NotFoundPage from "../pages/NotFoundPage";
import CustomersPage from "../features/customers/pages/CustomersPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

const protectedLayout = (
    <ProtectedRoute>
        <MainLayout />
    </ProtectedRoute>
);

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: protectedLayout,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: "/dashboard",
                element: <DashboardPage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
            {
                path: "categories",
                element: <CategoriesPage />
            },
            {
                path: "/inventory",
                element: <InventoryPage />
            },
            {
                path: "/suppliers",
                element: <SuppliersPage />
            },
            {
                path: "/customers",
                element: <CustomersPage />
            },
            {
                path: "/purchases",
                element: <PurchasesPage />
            },
            {
                path: "/sales",
                element: <SalesPage />
            },
            {
                path: "/reports",
                element: <ReportsPage />
            },
            {
    path: "/settings",
    element: <SettingsPage />
},
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export default router;