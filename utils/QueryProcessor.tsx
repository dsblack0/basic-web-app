export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "sduggira";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "sduggira";
  }

  const largestNumberRegex = /Which of the following numbers is the largest: ([\d, ]+)/i;
  const matchLargestNumberQuery = query.match(largestNumberRegex);
  if (matchLargestNumberQuery) {
    const numbers = matchLargestNumberQuery[1]
      .split(",")
      .map(num => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  // Handle "What is _ plus _?" type queries
  const additionQueryRegex = /What is (\d+)\s*plus\s*(\d+)\?/i;

  // Check for "What is _ plus _?" queries
  const matchAdditionQuery = query.match(additionQueryRegex);
  if (matchAdditionQuery) {
    const num1 = parseInt(matchAdditionQuery[1], 10);
    const num2 = parseInt(matchAdditionQuery[2], 10);
    const result = num1 + num2;
    return result.toString();
  }

  return "";
}
