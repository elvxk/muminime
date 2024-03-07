import prisma from "@/libs/prisma";

export async function POST(req: any) {
  const { mal_id, user_email, cat, title, image } = await req.json();
  const data = { mal_id, user_email, cat, title, image };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection)
    return Response.json({
      status: 500,
      isCreated: false,
      message: "Failed to create collection",
    });
  else
    return Response.json({
      status: 200,
      isCreated: true,
      message: "Success to create collection",
    });
}
