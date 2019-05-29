/**
 * Find most frequent value in array
 * @param {Array} array
 */
export const getMostFrequentValue = (array) => {
    let result = [...array];

    return result.sort((a, b) =>
        result.filter(v => v === a).length - result.filter(v => v === b).length
    ).pop();
};

/**
 * Shuffle an array (original array will be modified)
 * @param {Array} a
 */
export const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }

    return a
};

/**
 * Convert nodelist to array
 * @param {NodeList} nodeList
 */
export const toArray = (nodeList) => {
    return Array.prototype.slice.call(nodeList);
};
