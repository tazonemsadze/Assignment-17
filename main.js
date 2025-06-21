// 1. დაწერეთ for ციკლი, 10 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 10; i < 25; i++) {
  console.log(`For Loop index: ${i}, Count: ${i + 1}`);
}

// 2. დაწერეთ while ციკლი 0 დან 10 - მდე console.log ში დაბეჭდეთ ინდექსი i
let whileLoopIndex = 0;
while (whileLoopIndex < 10) {
  console.log(
    `While Loop index: ${whileLoopIndex}, Count: ${whileLoopIndex + 1}`
  );
  whileLoopIndex++;
}

// 3. დაწერეთ do while ციკლი 0 დან 15 - მდე console.log ში დაბეჭდეთ ინდექსი i
let doWhileLoop = 0;

do {
  console.log(`Do While Loop: ${doWhileLoop}, Count: ${doWhileLoop + 1}`);
  doWhileLoop++;
} while (doWhileLoop < 15);

// 4. მოცემული გვაქვს მასივი const numbers = [23, 44, 123, 234, 765, 1023, 2368]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ კენტი რიცხვები.

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// numbers.filter((num) => num % 2 !== 0).forEach((num) => console.log(num));
const oddNums = numbers.filter((num) => num % 2 !== 0);

console.log(oddNums);

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}

// 6. ლექციაზე დაწერილ კოდში გვაქვს data.js ფაილი, გამოიყენეთ აქ აღწერილი items, for ლუპის დახმარებით კონსოლში გამოიტანეთ ის პროდუქტები, რომელთა storageQuantity ფროფერთის მნიშვნელობაც 10-ზე მეტია

const data = {
  cartId: 642901,
  totalPrice: 18310,
  totalCount: 10,
  totalPreviousPrice: 4397,
  bundles: [],
  items: [
    {
      quantity: 1,
      productId: 45858,
      priceFromBooking: false,
      price: 1949,
      imageUrl:
        "https://s3.zoommer.ge/site/cbe83ca0-7d6d-4382-a995-da701521f090_Thumb.jpeg",
      productName: "Samsung S931B/DS Galaxy S25 12/128GB Silver Shadow",
      storageQuantity: 38,
      totalStorageQuantity: 38,
      previousPrice: 2049,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 47435,
      priceFromBooking: false,
      price: 899,
      imageUrl:
        "https://s3.zoommer.ge/site/7e4a87e3-6fdf-4e5d-be7f-f04cd02836b3_Thumb.jpeg",
      productName: "Xiaomi Poco X7 Pro 5G 8/256GB Yellow",
      storageQuantity: 21,
      totalStorageQuantity: 21,
      previousPrice: 969,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 37544,
      priceFromBooking: false,
      price: 639,
      imageUrl:
        "https://s3.zoommer.ge/zoommer-images/thumbs/0198933_apple-airpods-pro-2-with-usb-c-charging-case-mtjv3-2023_550.jpeg",
      productName:
        "Apple AirPods Pro 2 With USB-C Charging Case (MTJV3) (2023) White",
      storageQuantity: 243,
      totalStorageQuantity: 243,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 43584,
      priceFromBooking: false,
      price: 1249,
      imageUrl:
        "https://s3.zoommer.ge/site/141fe298-a857-497a-8844-f83c8be990ca_Thumb.jpeg",
      productName: "Xiaomi Robot Vacuum X20+ White",
      storageQuantity: 210,
      totalStorageQuantity: 210,
      previousPrice: 1379,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 44441,
      priceFromBooking: false,
      price: 2799,
      imageUrl:
        "https://s3.zoommer.ge/site/c10923b2-2f25-4167-b926-e7f52126b8ff_Thumb.jpeg",
      productName: "Apple iPhone 16 Pro  e-SIM Only | 128GB Desert titanium",
      storageQuantity: 39,
      totalStorageQuantity: 39,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 43827,
      priceFromBooking: false,
      price: 799,
      imageUrl:
        "https://s3.zoommer.ge/site/29212844-accd-4613-866e-3ebeba5c6eeb_Thumb.jpeg",
      productName: "Xiaomi TV A 43 2025 EU",
      storageQuantity: 7,
      totalStorageQuantity: 7,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 38951,
      priceFromBooking: false,
      price: 1849,
      imageUrl:
        "https://s3.zoommer.ge/site/c614df79-ec3a-4a7e-8237-a9a80e1209b4_Thumb.jpeg",
      productName: "Canon EOS R100 RFS18-45 S SEE 6052C034AA",
      storageQuantity: 12,
      totalStorageQuantity: 12,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 42200,
      priceFromBooking: false,
      price: 3379,
      imageUrl:
        "https://s3.zoommer.ge/site/db7c2148-675b-4bcc-a693-9a3cea20974a_Thumb.jpeg",
      productName:
        "HP Victus 16 A1WE4EA, Intel Core i5-14450HX, Nvidia GeForce RTX 4050 6GB, 16GB RAM SSD 512GB, Free Dos, ლეპტოპი",
      storageQuantity: 8,
      totalStorageQuantity: 8,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 44739,
      priceFromBooking: false,
      price: 1249,
      imageUrl:
        "https://s3.zoommer.ge/site/e51b1e0b-1089-4896-8fff-497d55047c91_Thumb.png",
      productName:
        "Apple Watch Series 10 GPS 42mm Jet Black Aluminum Case With Black Sport Band MWWE3 S/M",
      storageQuantity: 17,
      totalStorageQuantity: 17,
      previousPrice: null,
      gifts: [],
    },
    {
      quantity: 1,
      productId: 36609,
      priceFromBooking: false,
      price: 3499,
      imageUrl:
        "https://s3.zoommer.ge/zoommer-images/thumbs/0195269_canon-eos-r8-body-5803c019aa-black_550.jpeg",
      productName: "Canon EOS R8 body 5803C019AA Black",
      storageQuantity: 10,
      totalStorageQuantity: 10,
      previousPrice: null,
      gifts: [],
    },
  ],
  httpStatusCode: 200,
  userMessage: null,
  developerMessage: null,
  success: true,
  errors: [],
};

for (let i = 0; i < data.items.length; i++) {
  data.items[i].storageQuantity > 10 ? console.log(data.items[i]) : "";
}

const minStorageProductName = data.items
  .filter((item) => item.storageQuantity > 10)
  .map((item) => item.productName);

console.log(minStorageProductName);
