export type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  materials: string[];
  images: string[];
  description: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "თბილი ხის სამზარეულო",
    location: "თბილისი, საბურთალო",
    year: "2026",
    materials: ["MDF", "EGGER", "BLUM"],
    images: ["/project1.jpg", "/project3.jpg", "/project4.jpg", "/project5.jpg", "/project6.jpg"],
    description:
      "თანამედროვე და პრაქტიკული სამზარეულო, რომელიც ინდივიდუალურად მოერგო არსებულ სივრცეს. პროექტში გამოყენებულია თბილი ხის ფაქტურა, ხარისხიანი MDF და BLUM-ის ფურნიტურა.",
  },
  {
    id: "02",
    title: "ნათელი მინიმალისტური სამზარეულო",
    location: "თბილისი, ვაკე",
    year: "2026",
    materials: ["MDF", "აკრილი", "HETTICH"],
    images: ["/project4.jpg", "/project5.jpg", "/project3.jpg"],
    description:
      "ნათელ ფერებში შესრულებული მინიმალისტური სამზარეულო. დიზაინში მთავარი ყურადღება დაეთმო სუფთა ხაზებს, პრაქტიკულ განლაგებასა და სივრცის მაქსიმალურ გამოყენებას.",
  },
  {
    id: "03",
    title: "მუქი ტონების სამზარეულო",
    location: "თბილისი, დიღომი",
    year: "2025",
    materials: ["EGGER", "HPL", "BLUM"],
    images: ["/project7.jpg", "/project11.jpg", "/project12.jpg"],
    description:
      "მუქ ფერებში შესრულებული თანამედროვე სამზარეულო, ხის თბილი დეტალებითა და გამძლე სამუშაო ზედაპირით.",
  },
  {
    id: "04",
    title: "თანამედროვე კუთხის სამზარეულო",
    location: "რუსთავი",
    year: "2025",
    materials: ["MDF", "Kronospan", "HETTICH"],
    images: ["/project8.jpg", "/project9.jpg", "/project10.jpg"],
    description:
      "კუთხის ტიპის სამზარეულო, რომელიც შექმნილია მცირე სივრცის ეფექტურად გამოყენებისთვის.",
  },
  {
    id: "05",
    title: "ხისა და თეთრი ფერის კომბინაცია",
    location: "თბილისი, გლდანი",
    year: "2025",
    materials: ["EGGER", "MDF", "BLUM"],
    images: ["/project9.jpg", "/project11.jpg", "/project12.jpg", "/project13.jpg", "/project10.jpg"],
    description:
      "თეთრი და ბუნებრივი ხის ტონების კომბინაციით შექმნილი ნათელი და მყუდრო სამზარეულო.",
  },
  {
    id: "06",
    title: "პატარა სივრცის სამზარეულო",
    location: "თბილისი, ისანი",
    year: "2025",
    materials: ["MDF", "ლამინატი", "HETTICH"],
    images: ["/project6.jpg", "/project2.jpg", "/project3.jpg"],
    description:
      "კომპაქტური სამზარეულო, სადაც თითოეული კარადა და სამუშაო სივრცე მაქსიმალურად პრაქტიკულად არის დაგეგმილი.",
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}