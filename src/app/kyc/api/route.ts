import dbConnect from "@/libs/dbConnect";
import user from "@/model/user";
import { put } from "@vercel/blob";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {

    const contentType = req.headers.get("content-type") || "";

    if (!contentType.includes("multipart/form-data")) {
        return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get("frontImage");
        const id = formData.get("id");
        console.log(file)

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const buffer = Buffer.from(await (file as File).arrayBuffer());
        if (buffer.length > 2 * 1024 * 1024) {
            return NextResponse.json({ error: "File size exceeds 2MB" }, { status: 400 });
        }

        const blob = await put(`kyc/${(file as File).name}`, buffer, {
            access: "public",
            contentType: (file as File).type,
        });
        await dbConnect()
        await user.findByIdAndUpdate({ _id: id }, { kyc: blob.url })

        return NextResponse.json({ url: blob.url }, { status: 200 });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
