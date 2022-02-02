/*
  Warnings:

  - Added the required column `password` to the `Pages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pages" DROP CONSTRAINT "Pages_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Templates" DROP CONSTRAINT "Templates_userId_fkey";

-- AlterTable
ALTER TABLE "Pages" ADD COLUMN     "locked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Templates" ADD CONSTRAINT "Templates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages" ADD CONSTRAINT "Pages_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
