import { z } from 'zod';

/**
 * Date schema that accepts a date object or string.
 * Returns a date object in both cases.
 */
export const dateSchema = z.preprocess(($) => {
    if (typeof $ === 'string' || $ instanceof Date) {
        return new Date($);
    }
}, z.date());
