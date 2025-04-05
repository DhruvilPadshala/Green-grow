import AuthLayout from "@/layout/AuthLayout";
import Login from "./login";

export default function Home() {
  return <Login />;
}
Home.layout = AuthLayout;
