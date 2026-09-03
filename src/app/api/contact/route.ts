import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      formType = "contact",
      firstName,
      lastName,
      email,
      company,
      phone,
      message,
      developerType,
      engagementModel,
      contactMethod,
      projectLink,
    } = body;

    // Validate required fields: First Name, Message, Email, Phone
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (First Name, Email, and Message/Requirements)." },
        { status: 400 }
      );
    }

    // WordPress API URL
    const wpBase =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace("/wp/v2", "") ||
      "https://techbeeps.co.in/wp-json";
    const endpoint = `${wpBase}/techbeeps/v1/contact`;

    // Forward to WordPress custom REST API endpoint
    try {
      const wpResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          formType,
          firstName,
          lastName,
          email,
          company,
          phone,
          message,
          developerType,
          engagementModel,
          contactMethod,
          projectLink,
        }),
      });

      if (wpResponse.ok) {
        const data = await wpResponse.json();
        return NextResponse.json({
          success: true,
          message: data.message || "Message sent successfully!",
        });
      } else {
        const errorData = await wpResponse.json().catch(() => ({}));
        console.error("WordPress contact endpoint error:", errorData);
        return NextResponse.json(
          {
            success: false,
            message:
              errorData.message ||
              "Failed to send message through WordPress. Please ensure the endpoint is configured in functions.php.",
          },
          { status: wpResponse.status || 500 }
        );
      }
    } catch (fetchError) {
      console.error("Failed to connect to WordPress API endpoint:", fetchError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not reach WordPress server. Please verify your WordPress functions.php API code is active.",
        },
        { status: 502 }
      );
    }
  } catch (err: any) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
