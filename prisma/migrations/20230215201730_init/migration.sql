-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(191) NOT NULL,
    `Password` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FlightName` VARCHAR(191) NOT NULL,
    `PassengerID` INTEGER NOT NULL,
    `DatePuarcshed` DATETIME(3) NOT NULL,
    `FlightDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_PassengerID_fkey` FOREIGN KEY (`PassengerID`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
