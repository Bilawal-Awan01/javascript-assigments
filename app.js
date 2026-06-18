// 100 users ka array
const users = [];

const names = [
  "Ahmed Ali", "Muhammad Usman", "Bilal Khan", "Hamza Sheikh", "Umar Farooq",
  "Zain Abbas", "Faisal Malik", "Hassan Raza", "Tariq Mehmood", "Saad Hussain",
  "Ayesha Siddiqi", "Fatima Noor", "Zainab Qureshi", "Hira Baig", "Sana Iqbal",
  "Maham Butt", "Nimra Javed", "Rabia Tahir", "Amna Shahid", "Khadija Mirza"
];

const countries = ["Pakistan", "UAE", "Saudi Arabia", "UK", "Canada"];

for (let i = 0; i < 100; i++) {
  users.push({
    fullName: names[i % names.length],
    age: Math.floor(Math.random() * 70) + 5,
    country: countries[i % countries.length]
  });
}

// Adults filter karo loop se
const adults = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adults.push(users[i]);
  }
}

console.log("Total users:", users.length);
console.log("Adults:", adults.length);
console.log("Minors:", users.length - adults.length);
console.log("\nFirst 5 adults:", adults.slice(0, 5));