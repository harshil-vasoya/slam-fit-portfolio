# Email Setup for Contact Forms

## Setup Instructions

To enable email functionality for the contact forms, you need to configure your email settings:

### 1. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail App Password Setup

For Gmail, you need to use an App Password, not your regular password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use that password in the `EMAIL_PASS` environment variable

### 3. Alternative Email Services

You can also use other email services by modifying the transporter configuration in `app/api/contact/route.ts`:

#### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Custom SMTP:

```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Testing

After setup, test the contact forms:

1. Fill out the contact form on the main page
2. Fill out the contact form on the contact page
3. Check your email (harshilvasoya2812@gmail.com) for the submissions

### 5. Security Notes

- Never commit your `.env.local` file to version control
- Use strong, unique passwords for your email accounts
- Consider using environment-specific email addresses for testing vs production

## Features

- ✅ Both contact forms (main page and contact page) are integrated
- ✅ All form submissions are sent to harshilvasoya2812@gmail.com
- ✅ Professional HTML email templates
- ✅ Form validation and error handling
- ✅ Loading states and success/error messages
- ✅ Form reset after successful submission
