-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "userProfilePicture" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "badge" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "badge" TEXT,
    "content" TEXT,
    "templateId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Templates" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages" ADD FOREIGN KEY ("templateId") REFERENCES "Templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;
