-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FRESH_IDEA', 'ONGOING_WIP', 'BUILT');

-- AlterTable
ALTER TABLE "Idea" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'FRESH_IDEA';
