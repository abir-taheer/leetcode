/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(str, banned) {
  const words = str.toLowerCase().split(/[^a-z]+/);

  const freq = {};

  const bSet = new Set(banned.map((a) => a.toLowerCase()));

  let most = null;

  words.forEach((word) => {
    if (bSet.has(word)) {
      return;
    }

    if (!freq[word]) {
      freq[word] = 0;
    }

    freq[word]++;

    if (most === null || freq[word] > freq[most]) {
      most = word;
    }
  });

  return most;
}
