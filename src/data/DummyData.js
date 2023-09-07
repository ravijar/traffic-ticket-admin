// reports page

export const searchValue = (data, attribute, value) =>
  data.filter((datum) => datum[attribute] === value);

export const policeOfficersRows = [
  {
    officerId: "SLP-75834",
    name: "A.S. Jayathunga",
    nic: "729658743V",
    policeStation: "Moratumulla",
    telephone: "0776895427",
  },
  {
    officerId: "SLP-12345",
    name: "John Smith",
    nic: "123456789X",
    policeStation: "Central",
    telephone: "0776123456",
  },
  {
    officerId: "SLP-98765",
    name: "Maria Rodriguez",
    nic: "987654321Y",
    policeStation: "Eastside",
    telephone: "0776987654",
  },
  {
    officerId: "SLP-55555",
    name: "Robert Johnson",
    nic: "555555555Z",
    policeStation: "West End",
    telephone: "0776555555",
  },
  {
    officerId: "SLP-24680",
    name: "Emily Davis",
    nic: "246801357W",
    policeStation: "Northside",
    telephone: "0776246801",
  },
  {
    officerId: "SLP-98721",
    name: "Michael Chang",
    nic: "987212345A",
    policeStation: "Southside",
    telephone: "0776987213",
  },
  {
    officerId: "SLP-11111",
    name: "Sarah Johnson",
    nic: "111111111B",
    policeStation: "Downtown",
    telephone: "0776111111",
  },
  {
    officerId: "SLP-44444",
    name: "Alex Brown",
    nic: "444444444C",
    policeStation: "Uptown",
    telephone: "0776444444",
  },
  {
    officerId: "SLP-88888",
    name: "Jennifer Lee",
    nic: "888888888D",
    policeStation: "Suburbia",
    telephone: "0776888888",
  },
  {
    officerId: "SLP-77777",
    name: "Daniel Baker",
    nic: "777777777E",
    policeStation: "Riverside",
    telephone: "0776777777",
  },
  {
    officerId: "SLP-66666",
    name: "Olivia White",
    nic: "666666666F",
    policeStation: "Hilltop",
    telephone: "0776666666",
  },
  {
    officerId: "SLP-33333",
    name: "William Turner",
    nic: "333333333G",
    policeStation: "Beachside",
    telephone: "0776333333",
  },
  {
    officerId: "SLP-22222",
    name: "Mia Martinez",
    nic: "222222222H",
    policeStation: "Downtown",
    telephone: "0776222222",
  },
  {
    officerId: "SLP-99999",
    name: "Ethan Clark",
    nic: "999999999I",
    policeStation: "Central",
    telephone: "0776999999",
  },
  {
    officerId: "SLP-55555",
    name: "Sophia Taylor",
    nic: "555555555J",
    policeStation: "Eastside",
    telephone: "0776555555",
  },
  {
    officerId: "SLP-88888",
    name: "Liam Lewis",
    nic: "888888888K",
    policeStation: "West End",
    telephone: "0776888888",
  },
  {
    officerId: "SLP-11111",
    name: "Ava Anderson",
    nic: "111111111L",
    policeStation: "Northside",
    telephone: "0776111111",
  },
  {
    officerId: "SLP-66666",
    name: "James Scott",
    nic: "666666666M",
    policeStation: "Southside",
    telephone: "0776666666",
  },
  {
    officerId: "SLP-44444",
    name: "Charlotte Turner",
    nic: "444444444N",
    policeStation: "Downtown",
    telephone: "0776444444",
  },
];

export const driversRows = [
  {
    nic: "728648743V",
    name: "P.S Wimaladasa",
    vehicleNo: "PQD8745",
    telephone: "0718957642",
  },
  {
    nic: "987654321Y",
    name: "J.R. Smith",
    vehicleNo: "ABC1234",
    telephone: "0776123456",
  },
  {
    nic: "555555555Z",
    name: "M.J. Johnson",
    vehicleNo: "XYZ5678",
    telephone: "0776555555",
  },
  {
    nic: "246801357W",
    name: "E.D. Davis",
    vehicleNo: "LMN9876",
    telephone: "0776246801",
  },
  {
    nic: "987212345A",
    name: "M.C. Chang",
    vehicleNo: "PLQ4567",
    telephone: "0776987213",
  },
  {
    nic: "111111111B",
    name: "S.M. Johnson",
    vehicleNo: "DEF9876",
    telephone: "0776111111",
  },
  {
    nic: "444444444C",
    name: "A.B. Brown",
    vehicleNo: "KLP5432",
    telephone: "0776444444",
  },
  {
    nic: "888888888D",
    name: "J.L. Lee",
    vehicleNo: "MNO7890",
    telephone: "0776888888",
  },
  {
    nic: "777777777E",
    name: "D.B. Baker",
    vehicleNo: "RST1234",
    telephone: "0776777777",
  },
  {
    nic: "666666666F",
    name: "O.W. White",
    vehicleNo: "UVW5678",
    telephone: "0776666666",
  },
  {
    nic: "333333333G",
    name: "W.T. Turner",
    vehicleNo: "QRS4321",
    telephone: "0776333333",
  },
  {
    nic: "222222222H",
    name: "M.M. Martinez",
    vehicleNo: "JKL8765",
    telephone: "0776222222",
  },
  {
    nic: "999999999I",
    name: "E.C. Clark",
    vehicleNo: "GHI3456",
    telephone: "0776999999",
  },
  {
    nic: "555555555J",
    name: "S.T. Taylor",
    vehicleNo: "NOP6789",
    telephone: "0776555555",
  },
  {
    nic: "888888888K",
    name: "L.L. Lewis",
    vehicleNo: "VWX9012",
    telephone: "0776888888",
  },
  {
    nic: "111111111L",
    name: "A.A. Anderson",
    vehicleNo: "TUV2345",
    telephone: "0776111111",
  },
  {
    nic: "666666666M",
    name: "J.S. Scott",
    vehicleNo: "IJK7890",
    telephone: "0776666666",
  },
  {
    nic: "444444444N",
    name: "C.T. Turner",
    vehicleNo: "EFG5678",
    telephone: "0776444444",
  },
];

export const accidentsRows = [
  {
    location: "Katubedda",
    date: "2023/09/06",
    time: "04:30 PM",
    vehicleNos: "ISL8734",
  },
  {
    location: "Downtown",
    date: "2023/09/07",
    time: "11:15 AM",
    vehicleNos: "ABC1234",
  },
  {
    location: "Eastside",
    date: "2023/09/08",
    time: "08:45 AM",
    vehicleNos: "XYZ5678",
  },
  {
    location: "Northside",
    date: "2023/09/09",
    time: "02:00 PM",
    vehicleNos: "LMN9876",
  },
  {
    location: "Southside",
    date: "2023/09/10",
    time: "09:30 AM",
    vehicleNos: "PLQ4567",
  },
  {
    location: "Central",
    date: "2023/09/11",
    time: "05:30 PM",
    vehicleNos: "DEF9876",
  },
  {
    location: "Uptown",
    date: "2023/09/12",
    time: "07:00 AM",
    vehicleNos: "KLP5432",
  },
  {
    location: "Suburbia",
    date: "2023/09/13",
    time: "12:45 PM",
    vehicleNos: "MNO7890",
  },
  {
    location: "Riverside",
    date: "2023/09/14",
    time: "03:20 PM",
    vehicleNos: "RST1234",
  },
  {
    location: "Hilltop",
    date: "2023/09/15",
    time: "10:10 AM",
    vehicleNos: "UVW5678",
  },
  {
    location: "Beachside",
    date: "2023/09/16",
    time: "01:50 PM",
    vehicleNos: "QRS4321",
  },
  {
    location: "Downtown",
    date: "2023/09/17",
    time: "06:40 PM",
    vehicleNos: "JKL8765",
  },
  {
    location: "Central",
    date: "2023/09/18",
    time: "11:55 AM",
    vehicleNos: "GHI3456",
  },
  {
    location: "Eastside",
    date: "2023/09/19",
    time: "07:30 AM",
    vehicleNos: "NOP6789",
  },
  {
    location: "West End",
    date: "2023/09/20",
    time: "03:15 PM",
    vehicleNos: "VWX9012",
  },
  {
    location: "Northside",
    date: "2023/09/21",
    time: "09:25 AM",
    vehicleNos: "TUV2345",
  },
  {
    location: "Southside",
    date: "2023/09/22",
    time: "02:40 PM",
    vehicleNos: "IJK7890",
  },
  {
    location: "Downtown",
    date: "2023/09/23",
    time: "05:05 PM",
    vehicleNos: "EFG5678",
  },
];

export const finesRows = [
  {
    fineId: "87452864",
    driverNic: "658439756V",
    vehicleNo: "WFS7645",
    location: "Moratumulla",
    date: "2023/08/04",
    time: "08:30 AM",
    violation: "high speed",
    paymentStatus: "paid",
  },
  {
    fineId: "98765432",
    driverNic: "123456789X",
    vehicleNo: "ABC1234",
    location: "Central",
    date: "2023/08/05",
    time: "10:15 AM",
    violation: "parking",
    paymentStatus: "unpaid",
  },
  {
    fineId: "55555555",
    driverNic: "555555555Z",
    vehicleNo: "XYZ5678",
    location: "Eastside",
    date: "2023/08/06",
    time: "03:45 PM",
    violation: "running red light",
    paymentStatus: "paid",
  },
  {
    fineId: "24680135",
    driverNic: "246801357W",
    vehicleNo: "LMN9876",
    location: "Northside",
    date: "2023/08/07",
    time: "11:20 AM",
    violation: "seatbelt",
    paymentStatus: "unpaid",
  },
  {
    fineId: "98721234",
    driverNic: "987212345A",
    vehicleNo: "PLQ4567",
    location: "Southside",
    date: "2023/08/08",
    time: "09:10 AM",
    violation: "reckless driving",
    paymentStatus: "paid",
  },
  {
    fineId: "11111111",
    driverNic: "111111111B",
    vehicleNo: "DEF9876",
    location: "Downtown",
    date: "2023/08/09",
    time: "05:50 PM",
    violation: "illegal U-turn",
    paymentStatus: "unpaid",
  },
  {
    fineId: "44444444",
    driverNic: "444444444C",
    vehicleNo: "KLP5432",
    location: "Uptown",
    date: "2023/08/10",
    time: "12:30 PM",
    violation: "running stop sign",
    paymentStatus: "paid",
  },
  {
    fineId: "88888888",
    driverNic: "888888888D",
    vehicleNo: "MNO7890",
    location: "Suburbia",
    date: "2023/08/11",
    time: "04:20 PM",
    violation: "drunk driving",
    paymentStatus: "unpaid",
  },
  {
    fineId: "77777777",
    driverNic: "777777777E",
    vehicleNo: "RST1234",
    location: "Riverside",
    date: "2023/08/12",
    time: "08:40 AM",
    violation: "speeding",
    paymentStatus: "paid",
  },
  {
    fineId: "66666666",
    driverNic: "666666666F",
    vehicleNo: "UVW5678",
    location: "Hilltop",
    date: "2023/08/13",
    time: "02:15 PM",
    violation: "seatbelt",
    paymentStatus: "unpaid",
  },
  {
    fineId: "22222222",
    driverNic: "222222222G",
    vehicleNo: "QRS4321",
    location: "Beachside",
    date: "2023/08/14",
    time: "06:30 PM",
    violation: "running red light",
    paymentStatus: "paid",
  },
  {
    fineId: "99999999",
    driverNic: "999999999H",
    vehicleNo: "JKL8765",
    location: "Downtown",
    date: "2023/08/15",
    time: "09:45 AM",
    violation: "speeding",
    paymentStatus: "unpaid",
  },
  {
    fineId: "33333333",
    driverNic: "333333333I",
    vehicleNo: "GHI3456",
    location: "Central",
    date: "2023/08/16",
    time: "01:20 PM",
    violation: "illegal U-turn",
    paymentStatus: "paid",
  },
  {
    fineId: "55555555",
    driverNic: "555555555J",
    vehicleNo: "NOP6789",
    location: "Eastside",
    date: "2023/08/17",
    time: "10:00 AM",
    violation: "reckless driving",
    paymentStatus: "unpaid",
  },
  {
    fineId: "88888888",
    driverNic: "888888888K",
    vehicleNo: "VWX9012",
    location: "West End",
    date: "2023/08/18",
    time: "03:55 PM",
    violation: "running stop sign",
    paymentStatus: "paid",
  },
  {
    fineId: "11111111",
    driverNic: "111111111L",
    vehicleNo: "TUV2345",
    location: "Northside",
    date: "2023/08/19",
    time: "07:15 AM",
    violation: "drunk driving",
    paymentStatus: "unpaid",
  },
  {
    fineId: "66666666",
    driverNic: "666666666M",
    vehicleNo: "IJK7890",
    location: "Southside",
    date: "2023/08/20",
    time: "12:05 PM",
    violation: "speeding",
    paymentStatus: "paid",
  },
  {
    fineId: "44444444",
    driverNic: "444444444N",
    vehicleNo: "EFG5678",
    location: "Downtown",
    date: "2023/08/21",
    time: "04:40 PM",
    violation: "seatbelt",
    paymentStatus: "unpaid",
  },
  {
    fineId: "22222222",
    driverNic: "222222222O",
    vehicleNo: "LMN4321",
    location: "Beachside",
    date: "2023/08/22",
    time: "11:10 AM",
    violation: "reckless driving",
    paymentStatus: "paid",
  },
  {
    fineId: "99999999",
    driverNic: "999999999P",
    vehicleNo: "QRS8765",
    location: "West End",
    date: "2023/08/23",
    time: "03:25 PM",
    violation: "illegal U-turn",
    paymentStatus: "unpaid",
  },
];

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
// schedule page

export const data = [
  {
    location: "Rawathawatta",
    dayShift: 2,
    nightShift: 1,
    officers: [
      {
        officerId: "SLP-12345",
        name: "Gunapala",
        dayShift: true,
        telephone: "0716843954",
      },
      {
        officerId: "SLP-29673",
        name: "Siripala",
        dayShift: true,
        telephone: "0746849521",
      },
      {
        officerId: "SLP-78621",
        name: "Amal",
        dayShift: false,
        telephone: "0729846751",
      },
    ],
  },
  {
    location: "Molpe Rd",
    dayShift: 3,
    nightShift: 2,
    officers: [
      {
        officerId: "SLP-12345",
        name: "Gunapala",
        dayShift: false,
        telephone: "0716843954",
      },
      {
        officerId: "SLP-29673",
        name: "Siripala",
        dayShift: false,
        telephone: "0746849521",
      },
      {
        officerId: "SLP-78621",
        name: "Amal",
        dayShift: true,
        telephone: "0729846751",
      },
      {
        officerId: "SLP-75126",
        name: "Kamal",
        dayShift: true,
        telephone: "0789645214",
      },
      {
        officerId: "SLP-45621",
        name: "Silva",
        dayShift: true,
        telephone: "0718956423",
      },
    ],
  },
  {
    location: "Mendis Ln",
    dayShift: 1,
    nightShift: 1,
    officers: [
      {
        officerId: "SLP-75126",
        name: "Kamal",
        dayShift: true,
        telephone: "0789645214",
      },
      {
        officerId: "SLP-45621",
        name: "Silva",
        dayShift: false,
        telephone: "0718956423",
      },
    ],
  },
  {
    location: "Seevali Rd",
    dayShift: 1,
    nightShift: 0,
    officers: [
      {
        officerId: "SLP-45621",
        name: "Silva",
        dayShift: true,
        telephone: "0718956423",
      },
    ],
  },
  {
    location: "Ariyawansa Rd",
    dayShift: 0,
    nightShift: 1,
    officers: [
      {
        officerId: "SLP-75126",
        name: "Kamal",
        dayShift: false,
        telephone: "0789645214",
      },
    ],
  },
  {
    location: "Katubedda",
    dayShift: 0,
    nightShift: 0,
    officers: [],
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

export const weeklyCount = [1, 5, 2, 0, 3, 2, 4];
export const monthlyCount = [10, 13, 24, 6, 12, 2, 20, 11, 14, 17, 4, 9];

export const detectedViolations = 5;
export const reportedAccidents = 3;

export const policeStation = "Moratumulla";

export const recentAccidents = [
  {
    id: 1,
    location: "Rawathawatta",
    date: "04/09/2023",
    time: "04:11 PM",
  },
  {
    id: 2,
    location: "Molpe Rd",
    date: "04/09/2023",
    time: "08:30 AM",
  },
  { id: 3, location: "Seevali Rd", date: "03/09/2023", time: "10:20 PM" },
  { id: 4, location: "Ariyawansa Rd", date: "02/09/2023", time: "11:45 AM" },
  { id: 5, location: "Mendis Ln", date: "02/09/2023", time: "07:15 AM" },
  { id: 6, location: "Molpe Rd", date: "02/09/2023", time: "04:20 AM" },
];
