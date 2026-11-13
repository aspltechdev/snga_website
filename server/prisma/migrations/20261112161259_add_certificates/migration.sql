-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "issuer" TEXT,
    "description" TEXT,
    "category" TEXT,
    "issueDate" TIMESTAMP(3),
    "pdfUrl" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Certificate_isPublished_idx" ON "Certificate"("isPublished");

-- CreateIndex
CREATE INDEX "Certificate_category_idx" ON "Certificate"("category");

-- CreateIndex
CREATE INDEX "Certificate_sortOrder_idx" ON "Certificate"("sortOrder");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
