import AdminLoginComponent from "@/components/adminLogin";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const responce = await getServerSession(authOptions)
    if (responce) {
        redirect('/main/assetpage')
    }

    return <>
        <AdminLoginComponent />
    </>
}