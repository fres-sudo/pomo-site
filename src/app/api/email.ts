import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = contactSchema.parse(req.body);

    // Here you would typically send an email or store the contact form data
    // For this example, we'll just log it
    console.log('Contact form submission:', validatedData);

    // Simulate a delay to mimic sending an email
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: 'Invalid form data', errors: error.errors });
    } else {
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  }
}
