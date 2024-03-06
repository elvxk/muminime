-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_mal_id_key" ON "Collection"("user_email", "mal_id");
