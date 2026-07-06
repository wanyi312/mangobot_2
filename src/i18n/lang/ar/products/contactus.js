// ar/products/contact.js
export default {
    contact: {
      title: "اتصل بنا",
      description: "اكتشف ما يمكن أن تقدمه لك Mangobot. تواصل معنا عبر النموذج أو مباشرة عبر واتساب، ونحن سعداء دائمًا بالدردشة.",
      whatsappBtn: "تحدث عبر واتساب",
      form: {
        firstName: "الاسم الأول",
        lastName: "الاسم الأخير",
        company: "الشركة / العلامة التجارية",
        email: "البريد الإلكتروني",
        interest: "اهتمامك",
        interestPlaceholder: "اختر اهتماماً...",
        message: "أخبرنا عن عملك وفعالياتك",
        messagePlaceholder: "أخبرنا المزيد عن اهتمامك",
        submitBtn: "إرسال استفسار الشراكة ←",
        submitBtnPartnership: "إرسال استفسار",
        submitting: "جاري الإرسال...",
        firstNamePlaceholder: "جون",
        lastNamePlaceholder: "سميث",
        companyPlaceholder: "اسم شركتك",
        emailPlaceholder: "you@company.com"
      },
      validation: {
        firstNameRequired: "الرجاء إدخال الاسم الأول",
        lastNameRequired: "الرجاء إدخال الاسم الأخير",
        companyRequired: "الرجاء إدخال اسم الشركة",
        emailRequired: "الرجاء إدخال البريد الإلكتروني",
        emailInvalid: "الرجاء إدخال بريد إلكتروني صحيح",
        interestRequired: "الرجاء اختيار اهتمامك",
        messageRequired: "الرجاء إدخال رسالتك"
      },
      messages: {
        success: "تم إرسال استفسار الشراكة بنجاح!",
        error: "فشل إرسال الاستفسار. الرجاء المحاولة مرة أخرى."
      },
      interestOptions: [
        { value: "50/50 Profit Sharing", label: "تقاسم الأرباح ٥٠/٥٠" },
        { value: "Monthly Rental", label: "الإيجار الشهري" },
        { value: "Direct Asset Ownership", label: "ملكية الأصول المباشرة" }
      ]
    }
  };