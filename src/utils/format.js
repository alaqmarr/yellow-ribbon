/**
 * Format a number as INR currency
 * @param {number|string} amount - The amount to format
 * @returns {string} - Formatted currency string (e.g. ₹ 1,234)
 */
export const formatPrice = (amount) => {
  const numericAmount = Number(amount);
  if (isNaN(numericAmount)) return "₹ 0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(numericAmount);
};

/**
 * Parse raw bulleted text from DB into an array.
 * @param {string|Array} input - The raw string or array.
 * @returns {Array} - Cleaned array of items.
 */
export const parseRawBullets = (input) => {
  if (Array.isArray(input)) return input;
  if (typeof input !== "string") return [];

  // Split by common bullet characters (DOT, HOLLOW DOT, HYPHEN, BULLET)
  // \u2022 = • (Bullet)
  // \u25E6 = ◦ (White Bullet)
  // \uf0b7 =  (Symbol used in user text)
  // o = letter o (used as bullet in user text)
  // We need to be careful with 'o' to not split words starting with o.
  // Using a regex that looks for newline OR specific bullet markers at start of string or after delimiters.

  // Simple approach: Replace known bullet chars with a common delimiter '|', then split.
  let cleaned = input
    .replace(/\uF0B7/g, "|") // The weird dot from Word/PDF
    .replace(/[•●◦]/g, "|") // Standard bullets
    .replace(/(^|\s)-+\s+/g, "|") // Hyphen surrounded by spaces (e.g. " - ", " -")
    .replace(/(^|\s)-(?=[A-Z])/g, "|") // Hyphen before a capital letter (e.g. " -Visit")
    .replace(/^\s*o\s+/gm, "|") // 'o' at start of line
    .replace(/\|\s*o\s+/g, "|") // 'o' after a delimiter
    .split("|")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return cleaned;
};
