-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FlightName` VARCHAR(191) NOT NULL,
    `PassengerID` INTEGER NOT NULL,
    `FlightNumber` INTEGER NOT NULL,
    `Cost` INTEGER NOT NULL,
    `isChildern` BOOLEAN NOT NULL,
    `TypeOfFlight` VARCHAR(191) NOT NULL,
    `From` VARCHAR(191) NOT NULL,
    `ToCountrt` VARCHAR(191) NOT NULL,
    `DatePuarcshed` DATETIME(3) NOT NULL,
    `FlightDate` DATETIME(3) NOT NULL,
    `TripType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_PassengerID_fkey` FOREIGN KEY (`PassengerID`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
