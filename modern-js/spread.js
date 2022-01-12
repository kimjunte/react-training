// the spread opertor is used to unpack an array/object into its constituent parts

const nums = [1, 2, 3];
const numsCopy = [...nums]; // unpack the contents of nums into a new array; copy num's ref into the new array

// NB: copies made using spread are SHALLOW (we're copying regs, not data)

const extendedNums = [...nums, 4, 5, 6]

const book = {title: "The Gruffalo", author: "Julia Donaldson"};
const bookCopy = {...book}; // is this safe copy? YES; because title & author ref are IMMUTABLE objectsconst

const books = [
    {title: "The Gruffalo", author: "Julia Donaldson"},
    {title: "The Bippolo Seed", author: "Dr. Seuss"},
    {title: "The Twits", author: "Roald Dahl"},
];

const booksCopy = [...books]; // is this a safe copy? NO; becuase objects are MUTABLE;

booksCopy[0].title = "Detective Dog"; // is book affected?

// can you uspread to make a deep copy of the books array?

// each array has a map method
// it is used to create a new array
// the call back specifies how each array element is process/what goes into the new array
// this would not work if any one of book's props ref'd a mutuable object
const booksDeepCopy = books.map(book => ({...book}));

