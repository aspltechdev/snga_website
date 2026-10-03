-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('INSTAGRAM', 'YOUTUBE', 'FACEBOOK');

-- CreateTable
CREATE TABLE "SocialPost" (
    "id" SERIAL NOT NULL,
    "platform" "SocialPlatform" NOT NULL,
    "url" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SocialPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SocialPost_platform_idx" ON "SocialPost"("platform");

-- CreateIndex
CREATE INDEX "SocialPost_isPublished_idx" ON "SocialPost"("isPublished");

-- CreateIndex
CREATE INDEX "SocialPost_sortOrder_idx" ON "SocialPost"("sortOrder");

-- AddForeignKey
ALTER TABLE "SocialPost" ADD CONSTRAINT "SocialPost_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
