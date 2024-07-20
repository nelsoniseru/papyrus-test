import { z } from 'zod';

export const UserDto = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserDto = z.infer<typeof UserDto>;