// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// IMPORTANT: This is a mock API endpoint for demonstration.
// In a real application, you would integrate an email sending service
// like Nodemailer, SendGrid, Resend, etc.
// You would also implement more robust validation and error handling.

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message, services, budget } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      // Email format validation (simple)
      if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
      }

      // Simulate sending an email or saving to a database
      console.log('Contact Form Submission:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      if(services) console.log('Services:', services);
      if(budget) console.log('Budget:', budget);

      // In a real app, here you would:
      // 1. Configure your email transport (e.g., Nodemailer with SMTP or an API key for SendGrid)
      // 2. Create the email content (HTML or text)
      // 3. Send the email
      // Example (pseudo-code):
      // await sendEmail({
      //   to: 'your-email@example.com', // Replace with your actual email
      //   from: email, // Or a 'no-reply' email from your domain
      //   subject: `New message from ${name} via hueneu.com`,
      //   text: message,
      //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
      // });

      // Respond with success
      return res.status(200).json({ success: true, message: "Your message has been sent successfully! We'll be in touch soon." });

    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
