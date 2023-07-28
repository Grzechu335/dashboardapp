/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Order` table. All the data in the column will be lost.
  - The required column `Id` was added to the `Order` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `User` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `Order number` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Quantity` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Unit price` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Total` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Order date` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Order month` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Order year` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Order status` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Product` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Client's name` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Country` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Territory` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Order Size` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" TEXT NOT NULL,
ADD COLUMN     "User" TEXT NOT NULL,
ALTER COLUMN "Order number" SET NOT NULL,
ALTER COLUMN "Quantity" SET NOT NULL,
ALTER COLUMN "Unit price" SET NOT NULL,
ALTER COLUMN "Total" SET NOT NULL,
ALTER COLUMN "Order date" SET NOT NULL,
ALTER COLUMN "Order month" SET NOT NULL,
ALTER COLUMN "Order year" SET NOT NULL,
ALTER COLUMN "Order status" SET NOT NULL,
ALTER COLUMN "Product" SET NOT NULL,
ALTER COLUMN "Client's name" SET NOT NULL,
ALTER COLUMN "Country" SET NOT NULL,
ALTER COLUMN "Territory" SET NOT NULL,
ALTER COLUMN "Order Size" SET NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("Id");
