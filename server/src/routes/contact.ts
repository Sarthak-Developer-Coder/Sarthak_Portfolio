import { Router } from 'express';
import { z } from 'zod';

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(5000),
});

router.post('/', (req, res) => {
  const result = ContactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input', details: result.error.flatten() });
  }

  // Here you could send an email, store to DB, etc. We'll just echo & simulate success.
  const { name, email, subject, message } = result.data;
  res.json({ ok: true, received: { name, email, subject, message } });
});

export default router;
