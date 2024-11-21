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

export async function DELETE(req: any) {
  const { mal_id, user_email } = await req.json();
  const deleteCollection = await prisma.collection.delete({
    where: {
      user_email_mal_id: {
        user_email,
        mal_id,
      },
    },
  });

  if (!deleteCollection)
    return Response.json({
      status: 500,
      isDeleted: false,
      message: "Failed to delete collection",
    });
  else
    return Response.json({
      status: 200,
      isDeleted: true,
      message: "Success to delete collection",
    });
}
