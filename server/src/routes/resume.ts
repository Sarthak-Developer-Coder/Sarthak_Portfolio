import { Router } from 'express';

const router = Router();

// Redirect or respond with the resume URL
router.get('/', (_req, res) => {
  const url = process.env.RESUME_URL || 'https://drive.google.com/file/d/173JXXSyB3kcxtwQLfAlsXEpybuVxVuqv/view?usp=sharing';
  // Send as JSON to let client decide to open in new tab
  res.json({ url });
});

export default router;
