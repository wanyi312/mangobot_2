// en/products/contact.js
export default {
    contact: {
      title: "Contact Us",
      description: "Discover what Mangobot can do for you. Reach out via the form or directly on <br />WhatsApp and we're always happy to chat.",
      whatsappBtn: "Chat on WhatsApp",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        company: "Company / Brand",
        email: "Email Address",
        interest: "Partnership Interest",
        interestPlaceholder: "Select a model...",
        message: "Tell us about your business & events",
        messagePlaceholder: "Tell us more about partnership Interest",
        submitBtn: "Submit Partnership Enquiry →",
        submitBtnPartnership: "Submit Enquiry",
        submitting: "Submitting...",
        firstNamePlaceholder: "John",
        lastNamePlaceholder: "Smith",
        companyPlaceholder: "Your company name",
        emailPlaceholder: "you@company.com"
      },
      validation: {
        firstNameRequired: "Please enter your first name",
        lastNameRequired: "Please enter your last name",
        companyRequired: "Please enter your company name",
        emailRequired: "Please enter your email",
        emailInvalid: "Please enter a valid email",
        interestRequired: "Please select your model",
        messageRequired: "Please enter message"
      },
      messages: {
        success: "Partnership enquiry submitted successfully!",
        error: "Failed to submit enquiry. Please try again."
      },
      interestOptions: [
        { value: "50/50 Profit Sharing", label: "50/50 Profit Sharing" },
        { value: "Monthly Rental", label: "Monthly Rental" },
        { value: "Direct Asset Ownership", label: "Direct Asset Ownership" }
      ]
    }
  };