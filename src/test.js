export function parseJson(json) {
  try {
    JSON.parse(json);
  } catch(e) {
    throw ParseError('Invalid JSON string');
  }
  return JSON.parse(json);
}
