import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/libs/dbConnect";
import user from "@/model/user";

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()

    const existingUser = await user.findOne({
        email: body.email
    })

    if (existingUser) {
        return NextResponse.json({ error: "Email Already Exist" });
    }
    let savedInfo
    try {
        savedInfo = await user.create({
            password: body.password,
            email: body.email,
            role: body.role,
            country: body.country,
            fullname: body.fullname,
            phoneNumber: body.phoneNumber
        })
    } catch (err) {
        throw new Error(`big error : ${err}`)
    }
    return NextResponse.json(savedInfo);
}