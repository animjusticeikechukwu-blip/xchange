export interface Medicine {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  batchNumber: string;
  price: number;
  originalPrice: number;
  facilityName: string;
  facilityType: "pharmacy" | "hospital" | "clinic";
  location: string;
  daysToExpiry: number;
  listedDate: string;
  status: "active" | "sold" | "expired";
  verified: boolean;
}

export interface Transaction {
  id: string;
  medicineId: string;
  medicineName: string;
  quantity: number;
  totalPrice: number;
  buyerFacility: string;
  sellerFacility: string;
  date: string;
  status: "completed" | "pending" | "cancelled";
  type: "purchase" | "sale";
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "expiry" | "buyer" | "transaction" | "system";
  read: boolean;
  date: string;
}

export const sampleMedicines: Medicine[] = [
  { id: "1", name: "Amoxicillin", brand: "Beecham", quantity: 200, unit: "capsules", expiryDate: "2026-04-20", batchNumber: "BX-2024-0891", price: 8500, originalPrice: 15000, facilityName: "MedPlus Pharmacy", facilityType: "pharmacy", location: "Lekki, Lagos", daysToExpiry: 37, listedDate: "2026-03-10", status: "active", verified: true },
  { id: "2", name: "Metformin 500mg", brand: "Glucophage", quantity: 100, unit: "tablets", expiryDate: "2026-05-15", batchNumber: "GF-2024-1123", price: 4200, originalPrice: 7800, facilityName: "LifeCare Hospital", facilityType: "hospital", location: "Ikeja, Lagos", daysToExpiry: 62, listedDate: "2026-03-08", status: "active", verified: true },
  { id: "3", name: "Ciprofloxacin 500mg", brand: "Cipro", quantity: 50, unit: "tablets", expiryDate: "2026-04-01", batchNumber: "CP-2023-7742", price: 3200, originalPrice: 6500, facilityName: "PharmaCare Plus", facilityType: "pharmacy", location: "Victoria Island, Lagos", daysToExpiry: 18, listedDate: "2026-03-05", status: "active", verified: true },
  { id: "4", name: "Omeprazole 20mg", brand: "Losec", quantity: 150, unit: "capsules", expiryDate: "2026-06-30", batchNumber: "LS-2024-3345", price: 6000, originalPrice: 9200, facilityName: "Unity Hospital", facilityType: "hospital", location: "Surulere, Lagos", daysToExpiry: 108, listedDate: "2026-03-12", status: "active", verified: false },
  { id: "5", name: "Artemether/Lumefantrine", brand: "Coartem", quantity: 80, unit: "packs", expiryDate: "2026-03-28", batchNumber: "CT-2024-5567", price: 12000, originalPrice: 22000, facilityName: "Greenfield Clinic", facilityType: "clinic", location: "Yaba, Lagos", daysToExpiry: 14, listedDate: "2026-03-01", status: "active", verified: true },
  { id: "6", name: "Paracetamol 500mg", brand: "Emzor", quantity: 500, unit: "tablets", expiryDate: "2026-08-20", batchNumber: "EM-2024-9912", price: 3500, originalPrice: 5000, facilityName: "MedPlus Pharmacy", facilityType: "pharmacy", location: "Lekki, Lagos", daysToExpiry: 159, listedDate: "2026-03-13", status: "active", verified: true },
];

export const sampleTransactions: Transaction[] = [
  { id: "t1", medicineId: "1", medicineName: "Amoxicillin (Beecham)", quantity: 50, totalPrice: 2125, buyerFacility: "CareFirst Pharmacy", sellerFacility: "MedPlus Pharmacy", date: "2026-03-12", status: "completed", type: "sale" },
  { id: "t2", medicineId: "2", medicineName: "Metformin 500mg", quantity: 30, totalPrice: 1260, buyerFacility: "MedPlus Pharmacy", sellerFacility: "LifeCare Hospital", date: "2026-03-11", status: "completed", type: "purchase" },
  { id: "t3", medicineId: "3", medicineName: "Ciprofloxacin 500mg", quantity: 20, totalPrice: 1280, buyerFacility: "Unity Hospital", sellerFacility: "PharmaCare Plus", date: "2026-03-13", status: "pending", type: "purchase" },
];

export const sampleNotifications: Notification[] = [
  { id: "n1", title: "Expiry Alert", message: "Coartem (80 packs) expires in 14 days. List for sale to recover value.", type: "expiry", read: false, date: "2026-03-14" },
  { id: "n2", title: "New Buyer Interest", message: "CareFirst Pharmacy is interested in your Amoxicillin listing.", type: "buyer", read: false, date: "2026-03-13" },
  { id: "n3", title: "Transaction Complete", message: "Sale of 50x Amoxicillin to CareFirst Pharmacy completed. ₦2,125 received.", type: "transaction", read: true, date: "2026-03-12" },
  { id: "n4", title: "Expiry Alert", message: "Ciprofloxacin 500mg (50 tablets) expires in 18 days.", type: "expiry", read: true, date: "2026-03-11" },
  { id: "n5", title: "Listing Verified", message: "Your Metformin 500mg listing has been verified.", type: "system", read: true, date: "2026-03-10" },
];

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

export function getExpiryStatus(days: number): "safe" | "warning" | "danger" {
  if (days <= 30) return "danger";
  if (days <= 90) return "warning";
  return "safe";
}
