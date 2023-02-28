-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "FlightName" TEXT NOT NULL,
    "PassengerID" INTEGER NOT NULL,
    "FlightNumber" INTEGER NOT NULL,
    "Cost" INTEGER NOT NULL,
    "isChildern" BOOLEAN NOT NULL,
    "TypeOfFlight" TEXT NOT NULL,
    "From" TEXT NOT NULL,
    "ToCountrt" TEXT NOT NULL,
    "DatePuarcshed" TIMESTAMP(3) NOT NULL,
    "FlightDate" TIMESTAMP(3) NOT NULL,
    "TripType" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_PassengerID_fkey" FOREIGN KEY ("PassengerID") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
