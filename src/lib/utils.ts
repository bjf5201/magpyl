/* eslint-disable unicorn/prefer-ternary */
export const utils = {
  merge: merge,
  isJSON: isJSON,
  debounce: 'debounce',
};

function merge(
  defaultParams: Record<string, string>,
  params: Record<string, string>
): Record<string, string | undefined> {
  const mergedOptions: Record<string, string | undefined> = {};
  // Recursively merge defaultParams and params
  for (const key in defaultParams) {
    if (key in params) {
      mergedOptions[key] = params[key];
    } else {
      mergedOptions[key] = defaultParams[key];
    }
  }
  return mergedOptions;
}

function isJSON(obj: unknown): boolean {
  if (typeof obj === 'string') {
    try {
      JSON.parse(obj);
      return true;
    } catch (error) {
      console.error('Invalid JSON string:', error);
      return false;
    }
  }
  return typeof obj === 'object' && obj !== null;
}
