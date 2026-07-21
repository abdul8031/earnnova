import AdminLoginForm from "@/components/admin/auth/AdminLoginForm";

export const metadata = {
  title: "Admin Login | EarnNova",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <AdminLoginForm />
    </main>
  );
}