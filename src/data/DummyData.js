// review page

function createData(id, vehicleNo, violation, location, date, time) {
  return {
    id,
    vehicleNo,
    violation,
    location,
    date,
    time,
  };
}

export const rows = [
  createData(
    1,
    "CAR8769",
    "High Speed",
    "Rawathawatta Rd",
    "2023/09/03",
    "06:30 AM"
  ),
  createData(2, "BGA5969", "High Speed", "Molpe Rd", "2023/09/04", "07:45 AM"),
  createData(3, "KO6216", "High Speed", "Seevali Rd", "2023/09/05", "08:15 AM"),
  createData(4, "AAN3508", "High Speed", "Katubedda", "2023/09/06", "09:30 AM"),
];

export const reviewDetails = [
  {
    id: 1,
    vehicleNo: "CAR8769",
    originalImage: "/dummy_data/originals/1.jpg",
    vehicleImage: "/dummy_data/vehicles/1.jpg",
    licensePlateImage: "/dummy_data/licenses/1.jpg",
  },
  {
    id: 1,
    vehicleNo: "BGA5969",
    originalImage: "/dummy_data/originals/2.jpg",
    vehicleImage: "/dummy_data/vehicles/2.jpg",
    licensePlateImage: "/dummy_data/licenses/2.jpg",
  },
  {
    id: 1,
    vehicleNo: "KO6216",
    originalImage: "/dummy_data/originals/3.jpg",
    vehicleImage: "/dummy_data/vehicles/3.jpg",
    licensePlateImage: "/dummy_data/licenses/3.jpg",
  },
  {
    id: 1,
    vehicleNo: "AAN3508",
    originalImage: "/dummy_data/originals/4.jpg",
    vehicleImage: "/dummy_data/vehicles/4.jpg",
    licensePlateImage: "/dummy_data/licenses/4.jpg",
  },
];

// dashboard

export const vehicleCount = [
  { label: "Molpe Rd", value: 105 },
  { label: "Mendis Ln", value: 55 },
  { label: "Seevali Rd", value: 127 },
  { label: "Katubedda", value: 178 },
  { label: "Rawathawatta", value: 75 },
  { label: "Ariyawansa Rd", value: 38 },
];

export const detectedViolations = 5;

