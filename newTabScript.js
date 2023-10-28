const quotes = [
  {
    quote: "The best employees are all very, very curious.",
    author: "Julian Shapiro",
  },
  {
    quote: "Your most talented workers want freedom with responsibility.",
    author: "Marc Randolph",
  },
  { quote: "Good talent speaks in specifics.", author: "David Perell" },
  {
    quote: "Great culture is built where people help each other to progress.",
    author: "Pravin Jadhav",
  },
  {
    quote:
      "The damage of bad hire is twice &mdash; bad performance and slow culture.",
    author: "Paras Chopra",
  },
  {
    quote:
      "The really good people are doing something else. Seek them out rather than expecting that they're going to seek you out.",
    author: "Mike McGuiness",
  },
  {
    quote:
      "Better teams probably don't make more mistakes, but are more able to discuss mistakes.",
    author: "Melissa Blair",
  },
  {
    quote: "Betting your company's success on a future hire is a fool's bet.",
    author: "Peep Laja",
  },
  {
    quote:
      "Great teams are mutual admiration societies that get to work together.",
    author: "Jason Fried",
  },
  {
    quote: "Creating culture doesn't require big budgets.",
    author: "Amanda Goetz",
  },
  {
    quote:
      "Culture means treating your employees as humans not robots. And that doesn't require a budget.",
    author: "Amanda Goetz",
  },
  {
    quote:
      "You treat employees like they are children, they will eventually learn to treat you like a parent.",
    author: "Ranjan Sakalley",
  },

  {
    quote:
      "Fear in a workplace kills all the creativity, agency and above all, independent decision-making.",
    author: "Hardik Pandya",
  },
  {
    quote:
      "When hiring experienced folks test for willingness to accept low status.",
    author: "Kuldeep",
  },
  {
    quote: "The emotional arcs of recruiting and dating are identical.",
    author: "David Hoang",
  },
  {
    quote:
      "Taste (ability to know what is great) matters as much as Talent (ability to do the work) in the startups.",
    author: "Vijay Rayapati",
  },
  {
    quote: "Job interviews should be conversations, not interrogations.",
    author: "Adam Karpiak",
  },
  {
    quote: "Bad culture gets built when people do things to impress.",
    author: "Pravin Jadhav",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Get the quote element
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  // Fetch a new quote or generate one, for example:
  const newQuote = quotes[Math.floor(Math.random() * quotes.length - 1)]; // Replace this with your dynamic content generation
  // const newQuote = quotes[5];

  // Set the new content
  quoteElement.innerHTML = (newQuote || quotes[1])?.quote;
  authorElement.innerHTML = (newQuote || quotes[1])?.author;
});
