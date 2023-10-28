const quotes = [
  "Great talent speaks in specifics.",
  "The damage of bad hire is twice &mdash; bad performance and slow culture.",
  "The best employees are all very, very curious.",
  "Culture is built when people help each other progress.",
  "Great teams are built one person at a time.",
  "You pay 2x for cheap talent. <br /><br />1x payment in money.<br /> 1x payment in time.",
  "If you aren't offended by your employees enough, you have too many yes men.",
  "Your gross margin is your culture.",
  "Culture is built in behaviour and magnified in moments of consequence.",
  "The emotional arcs of recruiting and dating are identical.",
  "Job interviews should be conversations, not interrogations.",
  "Bad culture gets built when people do things to impress.",
  "When hiring experienced folks, test for willingness to accept low status.",
  "Creating culture doesn't require big budgets.",
  "Great teams are mutual admiration societies that get to work together.",
  "Better teams don't make more mistakes, but are more able to discuss mistakes.",
  "Fear at work kills creativity, agency and, independent decision-making.",
  "Treat employees like they are children, they will treat you like a parent.",
  "Culture means treating your employees as humans not robots.",
  "Betting your company's success on a future hire is a fool's bet.",
  "The most talented workers want freedom with responsibility.",
  "Evaluate a person's skills without being biased by their previous employer's success.",
  "The most underrated skill a People Success leader can possess is impeccable and evocative writing.",
  "Taste (know what is great) matters as much as Talent (ability to do the work).",
  "The best talent are doing something else. Seek them out rather than expecting that they're going to seek you out.",
];

document.addEventListener("DOMContentLoaded", function () {
  // Get the quote element
  const quoteElement = document.getElementById("quote");

  // Fetch a new quote or generate one, for example:
  const newQuote = quotes[Math.floor(Math.random() * quotes.length - 1)]; // Replace this with your dynamic content generation
  // const newQuote = quotes[5];

  // Set the new content
  quoteElement.innerHTML = newQuote || quotes[1];
});
