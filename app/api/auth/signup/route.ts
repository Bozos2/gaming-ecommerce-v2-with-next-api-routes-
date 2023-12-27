import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcryptjs";
import { connectToMongoDB } from "@/lib/mongooseConnect";
import { RUser } from "../../../types/UserTypes";
import mongoose, { StringSchemaDefinition } from "mongoose";
import User from "@/lib/mongooseModel";
import crypto from "crypto";
import { VerifyEmail } from "@/app/actions/_actions";

interface BodyResponseProp {
  email: string;
  firstName: string;
  lastName: String;
  password: string;
  date_of_birth: string;
  gender: string;
  country: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  connectToMongoDB().catch((err) =>
    NextResponse.json({ err }, { status: 500 })
  );
  const data: BodyResponseProp = await req.json();

  if (req.method === "POST") {
    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    console.log(data);

    const {
      email,
      firstName,
      lastName,
      password,
      gender,
      date_of_birth,
      country,
    } = data;

    if (gender !== "Male" && gender !== "Female" && gender !== "Other") {
      return NextResponse.json(
        { error: "Invalid gender value" },
        { status: 400 }
      );
    }

    if (!country || !date_of_birth) {
      return NextResponse.json(
        { error: "Country and date_of_birth cannot be empty" },
        { status: 400 }
      );
    }

    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return NextResponse.json(
          { error: "User Already exists" },
          { status: 409 }
        );
      } else {
        if (password.length < 6)
          return NextResponse.json(
            { error: "Password should be 5 characters long" },
            { status: 409 }
          );

        const hashedPassword = await hash(password, 12);

        try {
          const data: RUser = await User.create({
            email,
            firstName,
            lastName,
            password: hashedPassword,
            gender,
            date_of_birth,
            country,
            emailVerified: false,
          });

          const user = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            date_of_birth: data.date_of_birth,
            country: data.country,
            _id: data._id,
            emailVerified: data.emailVerified,
          };

          const emailVerificationToken = crypto
            .randomBytes(32)
            .toString("base64url");

          await User.findByIdAndUpdate(
            { _id: user._id },
            {
              emailVerificationToken: emailVerificationToken,
            }
          );
          await VerifyEmail(email, emailVerificationToken);

          return NextResponse.json(
            {
              success: true,
              user,
            },
            { status: 201 }
          );
        } catch (error) {
          if (error instanceof mongoose.Error.ValidationError) {
            const errors = Object.values(error.errors).map(
              (err) => err.message
            );
            return NextResponse.json(
              { errors },
              {
                status: 403,
              }
            );
          }

          return NextResponse.json(
            { error: "Problem with user create" },
            { status: 400 }
          );
        }
      }
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 });
    }
  } else {
    return console.log("method not allowed");
  }
}
