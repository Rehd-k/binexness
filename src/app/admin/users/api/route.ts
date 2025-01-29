import dbConnect from "@/libs/dbConnect";
import user from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    await dbConnect()

    const users = await user.find({
        role: 'user',
    }).exec()

    return NextResponse.json(users);
}

export async function PUT(request: NextRequest) {
    await dbConnect()

    const requestBody = await request.json()

    const updatedUser = await user.findOne({
        email: requestBody.email
    })


    updatedUser.balance[`${requestBody.coin}`] = requestBody.amount;

    await updatedUser.save()

    return NextResponse.json(updatedUser);
}