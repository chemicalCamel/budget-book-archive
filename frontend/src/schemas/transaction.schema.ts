import { z } from 'zod';

import { dateSchema } from '$schemas/date.schema';

export const tagSchema = z.object({
    name: z.string().min(1),
    type: z.string().min(1).optional(),
    auto: z.boolean().optional(),
});

export const metaSchema = z.object({
    addedOn: dateSchema,
    addedBy: z.string().min(1),
    lastModifiedOn: dateSchema.optional(),
    lastModifiedBy: z.string().min(1).optional(),
});

export const transactionSchema = z.object({
    name: z.string().min(1),
    type: z.enum(['income', 'expense', 'transfer']),
    amount: z.number().positive(),
    date: dateSchema,
    meta: metaSchema,
    notes: z.array(z.string().min(1)).optional(),
    tags: z.array(tagSchema).optional(),
});

export type Meta = z.infer<typeof metaSchema>;
export type Tag = z.infer<typeof tagSchema>;
export type Transaction = z.infer<typeof transactionSchema>;
