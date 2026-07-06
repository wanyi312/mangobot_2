<template>
  <div class="app-container">
    <div v-if="toastVisible" class="custom-toast" :class="toastType">
      {{ toastMessage }}
    </div>
    <div class="contacts">
      <div class="divcontact-in">
        <div class="div">
          <div class="h2contact-ttl">
            <div class="contact-us">
              {{ t("product.contact.contact.title") }}
            </div>
          </div>
          <div class="pcontact-desc">
            <div class="discover-what-mangobot" v-html="t('product.contact.contact.description')">
            </div>
          </div>
          <a target="_blank" @click="handleWhatsApp('+971 56 199 1063')" class="component-8">
            <div class="component-7">
              <svg class="vector-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <b class="text">{{ t("product.contact.contact.whatsappBtn") }}</b>
          </a>
        </div>
        <div class="div26">
          <div class="divsection-lbl3">
            <div class="before" />
            <div class="partnership-models">
              {{ t("product.partnerships.become_partner") }}
            </div>
          </div>
          <div class="h2contact-ttl">
            <div class="this-isnt-a-container">
              <span class="impact-results">{{
                t("product.partnerships.contact_title")
              }}
              </span>
              <i class="grow-with-us">{{
                t("product.partnerships.contact_title_1")
              }}</i>
            </div>
          </div>
          <div class="pcontact-desc">
            <div class="mangobot-offers-partnership">
              {{ t("product.partnerships.contact_desc") }}
              <br />
              <br />
              {{ t("product.partnerships.contact_desc_1") }}
            </div>
          </div>
          <button type="button" class="whatsapp-btn" @click="openWhatsApp">
            <div class="component-7">
              <svg class="vector-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <b class="text">{{ t("product.partnerships.btn_whatsapp") }}</b>
          </button>
        </div>
        <div class="divform-card">
          <form class="contact-form" @submit.prevent="handleSubmit" ref="formRef">
            <div class="form-row" :style="{ display: 'flex', gap: '13px' }">
              <div class="form-col" :style="{ flex: 1 }">
                <div class="divform-gmargin">
                  <div class="divform-g">
                    <div class="h2contact-ttl">
                      <label class="form-label">{{
                        t("product.contact.contact.form.firstName")
                      }}</label>
                    </div>
                    <div class="form-item">
                      <input v-model="formState.firstName" :placeholder="t('product.contact.contact.form.firstNamePlaceholder')
                          " class="custom-input" :class="{ 'input-error': errors.firstName }" />
                      <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-col" :style="{ flex: 1 }">
                <div class="divform-gmargin">
                  <div class="divform-g">
                    <div class="h2contact-ttl">
                      <label class="form-label">{{
                        t("product.contact.contact.form.lastName")
                      }}</label>
                    </div>
                    <div class="form-item">
                      <input v-model="formState.lastName" :placeholder="t('product.contact.contact.form.lastNamePlaceholder')
                          " class="custom-input" :class="{ 'input-error': errors.lastName }" />
                      <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="divform-g3">
              <div class="h2contact-ttl">
                <label class="form-label">{{
                  t("product.contact.contact.form.company")
                }}</label>
              </div>
              <div class="form-item">
                <input v-model="formState.company" :placeholder="t('product.contact.contact.form.companyPlaceholder')
                    " class="custom-input" :class="{ 'input-error': errors.company }" />
                <div v-if="errors.company" class="error-message">{{ errors.company }}</div>
              </div>
            </div>

            <div class="divform-g3">
              <div class="h2contact-ttl">
                <label class="form-label">{{
                  t("product.contact.contact.form.email")
                }}</label>
              </div>
              <div class="form-item">
                <input v-model="formState.email" placeholder="you@company.com" class="custom-input"
                  :class="{ 'input-error': errors.email }" />
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>
            </div>

            <div class="divform-g3">
              <div class="h2contact-ttl">
                <label class="form-label">{{
                  t("product.contact.contact.form.interest")
                }}</label>
              </div>
              <div class="form-item">
                <!-- 替换原来的 select 部分 -->
                <div class="custom-select-wrapper" :class="{ 'open': isDropdownOpen, 'input-error': errors.interest }">
                  <div class="custom-select-trigger" @click="toggleDropdown">
                    <span :class="{ 'placeholder': !formState.interest }">
                      {{ selectedInterestLabel || t('product.contact.contact.form.interestPlaceholder') }}
                    </span>
                    <svg class="dropdown-arrow" :class="{ 'open': isDropdownOpen }" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <div class="custom-select-dropdown" v-show="isDropdownOpen">
                    <div v-for="item in interestOptionsData" :key="item.value" class="custom-select-option"
                      :class="{ 'selected': formState.interest === item.value }" @click="selectOption(item.value)">
                      {{ item.label }}
                    </div>
                  </div>
                </div>
                <div v-if="errors.interest" class="error-message">{{ errors.interest }}</div>
              </div>
            </div>

            <div class="divform-g3">
              <div class="h2contact-ttl">
                <label class="form-label">{{
                  t("product.contact.contact.form.message")
                }}</label>
              </div>
              <div class="form-item">
                <textarea v-model="formState.message" :placeholder="t('product.contact.contact.form.messagePlaceholder')
                  " class="custom-textarea" :class="{ 'input-error': errors.message }" rows="3"></textarea>
                <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
              </div>
            </div>

            <div class="form-item">
              <button type="submit" class="submit-btn" :disabled="submitting" :style="{ width: '100%' }">
                {{
                  submitting
                  ? t("product.contact.contact.form.submitBtnPartnership")
                  : nameFromQuery === "Partnerships"
                    ? t("product.contact.contact.form.submitBtn")
                    : t("product.contact.contact.form.submitBtnPartnership")
                }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
import { reactive, ref, onMounted, computed, nextTick, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const toastVisible = ref(false);
const toastMessage = ref('');
const toastType = ref('success');
let toastTimer = null;
const route = useRoute();
const { t } = useI18n();

const formState = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  interest: "",
  message: "",
});
const formRef = ref(null);
const submitting = ref(false);
const errors = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  interest: "",
  message: "",
});

const isDropdownOpen = ref(false);

const nameFromQuery = computed(() => route.query.name || "");
const showToast = (message, type = 'success') => {
  if (toastTimer) clearTimeout(toastTimer);
  toastMessage.value = message;
  toastType.value = type;
  toastVisible.value = true;
  toastTimer = setTimeout(() => {
    toastVisible.value = false;
  }, 3000);
};
// Interest options - 从 i18n 获取
const interestOptionsData = [
  {
    value: "50/50 Profit Sharing",
    label: t("product.contact.contact.interestOptions.0.label"),
  },
  {
    value: "Monthly Rental",
    label: t("product.contact.contact.interestOptions.1.label"),
  },
  {
    value: "Direct Asset Ownership",
    label: t("product.contact.contact.interestOptions.2.label"),
  },
  {
    value: "Others",
    label: t("product.partnerships.tier_4_name"),
  }
];

onMounted(() => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollTop);
    });
  });
  setTimeout(scrollTop, 320);
  setTimeout(scrollTop, 550);

  const interestFromQuery = route.query.interest;
  if (interestFromQuery) {
    formState.value.interest = interestFromQuery;
  }

  document.addEventListener('click', handleClickOutside);
});

// 验证函数
const validateForm = () => {
  let isValid = true;
  const newErrors = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  };

  if (!formState.value.firstName.trim()) {
    newErrors.firstName = t("product.contact.contact.validation.firstNameRequired");
    isValid = false;
  }

  if (!formState.value.lastName.trim()) {
    newErrors.lastName = t("product.contact.contact.validation.lastNameRequired");
    isValid = false;
  }

  if (!formState.value.company.trim()) {
    newErrors.company = t("product.contact.contact.validation.companyRequired");
    isValid = false;
  }

  if (!formState.value.email.trim()) {
    newErrors.email = t("product.contact.contact.validation.emailRequired");
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(formState.value.email)) {
      newErrors.email = t("product.contact.contact.validation.emailInvalid");
      isValid = false;
    }
  }

  if (!formState.value.interest) {
    newErrors.interest = t("product.contact.contact.validation.interestRequired");
    isValid = false;
  }

  if (!formState.value.message.trim()) {
    newErrors.message = t("product.contact.contact.validation.messageRequired");
    isValid = false;
  }

  errors.value = newErrors;
  return isValid;
};

// 重置表单
const resetFields = () => {
  formState.value = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: undefined,
    message: "",
  };
  errors.value = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  };
};

const handleSubmit = async () => {
  if (submitting.value) return;

  if (!validateForm()) return;

  submitting.value = true;
  try {
    const payload = {
      to: "changekuan@gmail.com",
      subject: `Partnership Enquiry - ${formState.value.company}`,
      text: `
        Name: ${formState.value.firstName} ${formState.value.lastName}
        Company: ${formState.value.company}
        Email: ${formState.value.email}
        Interest: ${formState.value.interest}
        Message: ${formState.value.message}
      `.trim(),
    };

    const response = await fetch("https://email.mangobot.org/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send enquiry");
    }

    // 使用原生 alert 或自定义提示，这里用 alert 代替 message.success
    showToast(t("product.contact.contact.messages.success"), 'success');
    resetFields();
  } catch (error) {
    console.error("Submit error:", error);
    showToast(t("product.contact.contact.messages.error"), 'error');
  } finally {
    submitting.value = false;
  }
};

const normalizePhone = (rawPhone) =>
  rawPhone.replace(/[^\d+]/g, "").replace(/^\+/, "");

const handleWhatsApp = (phoneNumber) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const normalizedPhone = normalizePhone(phoneNumber);
  if (!normalizedPhone) return;

  const appUrl = `whatsapp://send?phone=${normalizedPhone}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${normalizedPhone}`;
  let hasSwitchedApp = false;
  let fallbackTimer = null;

  const cleanup = () => {
    window.removeEventListener("blur", onBlur);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
    }
  };

  const onBlur = () => {
    hasSwitchedApp = true;
    cleanup();
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      hasSwitchedApp = true;
      cleanup();
    }
  };

  window.addEventListener("blur", onBlur);
  document.addEventListener("visibilitychange", onVisibilityChange);

  fallbackTimer = window.setTimeout(() => {
    cleanup();
    if (!hasSwitchedApp) {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  window.location.href = appUrl;
};

// 计算选中的标签
const selectedInterestLabel = computed(() => {
  const selected = interestOptionsData.find(item => item.value === formState.value.interest);
  return selected ? selected.label : '';
});

// 切换下拉框
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// 选择选项
const selectOption = (value) => {
  formState.value.interest = value;
  isDropdownOpen.value = false;
  // 清除错误
  if (errors.value.interest) {
    errors.value.interest = '';
  }
};

// 点击外部关闭下拉框
const handleClickOutside = (event) => {
  const wrapper = document.querySelector('.custom-select-wrapper');
  if (wrapper && !wrapper.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
}

.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 全局 */
.contacts {
  width: 100%;
  flex: 1;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  isolation: isolate;
  gap: 10px;
  text-align: left;
  font-size: 54px;
  color: #0a0a0a;
  font-family: Montserrat;
}

.divcontact-in {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 210px 0px 91px;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  gap: 90px;
  max-width: 1280px;
  z-index: 0;
  flex-shrink: 0;
}

.div26 {
  display: none;
}

.div {
  display: block;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
  font-family: "Cormorant Garamond";
}

.h2contact-ttl {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-us {
  align-self: stretch;
  position: relative;
  letter-spacing: -1px;
  line-height: 58.32px;
  font-weight: 300;
  font-family: "Cormorant Garamond", serif;
}

.pcontact-desc {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18.1px 0px 30.8px;
  margin-top: -0.8px;
  position: relative;
  font-size: 15px;
  color: #6b6b6b;
  font-family: Montserrat;
}

.discover-what-mangobot {
  align-self: stretch;
  position: relative;
  line-height: 26.7px;
}

.component-8 {
  cursor: pointer;
  margin: 0 !important;
  border-radius: 100px;
  background-color: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  gap: 9px;
  z-index: 1;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 38px;
  color: var(--White, var(--color-white-solid, #fff));
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: normal;

  &:hover {
    background-color: #1EBE5A;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.02);
  }
}

.component-7 {
  height: 18px;
  width: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.vector-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}

.text {
  position: relative;
  font-weight: 500;
}

.divform-card {
  flex: 0.8555;
  border-radius: 20px;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 42px;
  gap: 13px;
  z-index: 2;
  font-size: 12px;
  width: 100%;
}

.divform-gmargin {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.divform-g {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 12px;
  font-family: Montserrat;
}

.divform-g3 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

// 原生表单样式
.contact-form {
  width: 100%;
}

.form-item {
  margin-bottom: 13px;
  width: 100%;
}

.error-message {
  font-size: 11px;
  margin-top: 4px;
  color: #ff4d4f;
}

.custom-select-wrapper.input-error .custom-select-trigger {
  border-color: #ff4d4f;
}

.custom-input,
.custom-textarea {
  width: 100%;
  border-radius: 9px;
  background-color: #fff;
  padding: 12px 15px;
  font-size: 14px;
  color: var(--Boulder, var(--color-grey-46, #757575));
  font-family: Montserrat;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.13);
  outline: none;

  &:hover {
    border-color: rgba(0, 0, 0, 0.13);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.13);
    box-shadow: none;
  }

  &::placeholder {
    color: #757575;
  }
}

.custom-input.input-error,
.custom-textarea.input-error,
.custom-select.input-error {
  border-color: #ff4d4f;
}

.custom-textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  border-radius: 11px;
  background-color: #000;
  height: auto;
  padding: 12px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  color: #fff;
  font-family: Montserrat;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff7a1a !important;
    border-color: #ff7a1a !important;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

// Select 特定样式
// .custom-select {
//   width: 100%;
//   border-radius: 9px;
//   background-color: #fff;
//   border: 1px solid rgba(0, 0, 0, 0.13);
//   padding: 12px 15px;
//   font-size: 14px;
//   color: #0a0a0a;
//   font-family: Montserrat;
//   min-height: 48px;
//   outline: none;
//   cursor: pointer;

//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
//   background-repeat: no-repeat;
//   background-position: right 15px center;
//   background-size: 16px;

//   // 限制最大宽度
//   max-width: 100%;

//   &:hover {
//     border-color: rgba(0, 0, 0, 0.13);
//   }

//   &:focus {
//     border-color: rgba(0, 0, 0, 0.13);
//   }
// }

// .custom-select:invalid {
//   color: #0a0a0a;
// }

// .custom-select:valid {
//   color: #0a0a0a;
// }

// .custom-select option {
//   color: #0a0a0a;
// }
// 自定义下拉组件样式
.custom-select-wrapper {
  position: relative;
  width: 100%;
  user-select: none;
}

.custom-select-trigger {
  width: 100%;
  border-radius: 9px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  padding: 12px 15px;
  font-size: 14px;
  color: #0a0a0a;
  font-family: Montserrat;
  min-height: 43px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .placeholder {
    color: #0A0A0A;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: var(--font-weight-400, 400);
    line-height: 17px;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.13);
  }
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;

  &.open {
    transform: rotate(180deg);
  }
}

.custom-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 9px;
  margin-top: 4px;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-select-option {
  padding: 12px 15px;
  font-size: 14px;
  font-family: Montserrat;
  color: #0a0a0a;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    background-color: #f0f0f0;
    font-weight: 500;
  }
}

/* Toast 样式 */
.custom-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Montserrat;
  z-index: 9999;
  animation: slideDown 0.3s ease;
  white-space: nowrap;

  &.success {
    background-color: #52c41a;
    color: white;
  }

  &.error {
    background-color: #ff4d4f;
    color: white;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 767px) {
  .app-container {
    display: flex;
    width: 100vw; // 440/440*100
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contacts {
      width: 100vw; // 440/440*100
      max-width: 100%;
      padding: 0 5vw; // 22/440*100 ≈ 5vw

      .divcontact-in {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        padding: 5.682vw 0 12.355vw; // 25, 0, 54.363
        gap: 9.773vw; // 43/440*100

        .div {
          display: none;
        }

        .div26 {
          padding: 0 5.909vw; // 26/440*100
          display: block;

          .divsection-lbl3 {
            align-self: stretch;
            display: flex;
            align-items: center;
            gap: 1.67vw; // 7.346/440*100

            .before {
              width: 3.673vw; // 16.162/440*100
              height: 0.227vw; // 1/440*100
              background: var(--color-orange-55, #FF7A1A);
            }

            .partnership-models {
              color: var(--Pumpkin, var(--color-orange-55, #FF7A1A));
              font-family: Montserrat;
              font-size: 1.837vw; // 8.081/440*100
              font-style: normal;
              font-weight: var(--font-weight-600, 600);
              line-height: normal;
              letter-spacing: 0.417vw; // 1.837/440*100
              text-transform: uppercase;
            }
          }

          .h2contact-ttl {
            color: #0a0a0a;
            font-family: Cormorant Garamond;
            margin-top: 2.5vw; // 11/440*100
          }

          .impact-results {
            font-size: 7.273vw; // 32/440*100
            font-style: normal;
            font-weight: 300;
            line-height: 9.737vw; // 42.844/440*100
            letter-spacing: -0.167vw; // -0.735/440*100
          }

          .grow-with-us {
            color: var(--Pumpkin, var(--color-orange-55, #FF7A1A));
            font-size: 9.091vw; // 40/440*100
            font-style: italic;
            font-weight: 300;
            line-height: 9.737vw; // 42.844/440*100
            letter-spacing: -0.167vw;
          }

          .mangobot-offers-partnership {
            margin-top: 2.893vw; // 12.73/440*100
            color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
            font-family: Montserrat;
            font-size: 3.182vw; // 14/440*100
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: 4.458vw; // 19.615/440*100
          }

          .pcontact-desc {
            padding: 0px;
          }

          .whatsapp-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 7.273vw !important; // 32/440*100
            margin-left: 27%;
            margin-top: 5vw; // 22/440*100
            padding: 2.17vw 4.341vw; // 9.55, 19.1
            gap: 1.503vw; // 6.612/440*100
            border-radius: 16.696vw; // 73.463/440*100
            background: #25D366;
            text-align: center;
            border: 0.227vw solid #25D366; // 1/440*100

            .component-7,
            .vector-icon {
              width: 3.005vw; // 13.223/440*100
              height: 3.005vw;
              color: #fff;
            }

            .text {
              color: var(--White, var(--color-white-solid, #FFF));
              font-family: Montserrat;
              font-size: 2.17vw; // 9.55/440*100
              font-style: normal;
              font-weight: var(--font-weight-700, 700);
              line-height: normal;
            }
          }
        }

        .divform-card {
          width: 90vw; // 396/440*100
          height: 115.909vw; // 510/440*100
          display: flex;
          padding: 7.012vw; // 30.854/440*100
          flex-direction: column;
          align-items: flex-start;
          gap: 4.545vw !important; // 20/440*100
          align-self: stretch;
          border-radius: 3.339vw; // 14.693/440*100
          border: 0.167vw solid var(--color-black-7, rgba(0, 0, 0, 0.07)); // 0.735
          background: var(--color-grey-98, #FAFAFA);
          flex: auto;

          .divform-g {
            gap: 0.909vw; // 4/440*100
          }

          .divform-g3 {
            gap: 0.909vw;
          }

          .form-item {
            margin-bottom: 4.545vw; // 20/440*100
            width: 100%;
          }

          .form-label {
            color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
            font-family: Montserrat;
            font-size: 2.727vw; // 12/440*100
            font-style: normal;
            font-weight: var(--font-weight-600, 600);
            line-height: normal;
            letter-spacing: 0.083vw; // 0.367/440*100
          }

          .custom-input,
          .custom-textarea {
            height: 7.045vw; // 31/440*100
            border-radius: 1.503vw; // 6.612/440*100
            padding: 2.004vw 2.504vw; // 8.816, 11.019
            color: var(--Boulder, var(--color-grey-46, #757575));
            font-family: Montserrat;
            font-size: 2.273vw; // 10/440*100
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: normal;
          }

          .custom-textarea::placeholder,
          .custom-input::placeholder {
            color: #757575;
            font-size: 2.273vw;
            font-weight: 400;
            line-height: 2.838vw; // 12.489/440*100
          }

          // .custom-select::placeholder {
          //   font-size: 2.273vw;
          //   font-weight: 400;
          //   line-height: 2.838vw;
          //   color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
          // }

          // .custom-select {
          //   font-size: 2.273vw !important;
          //   font-weight: 400;
          //   appearance: none;
          //   -webkit-appearance: none;
          //   -moz-appearance: none;
          //   background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          //   background-repeat: no-repeat;
          //   background-position: right 4.545vw center; // 20/440*100
          //   background-size: 3.636vw; // 16/440*100
          //   cursor: pointer;

          //   appearance: none;
          //   -webkit-appearance: none;
          //   -moz-appearance: none;
          //   max-width: 100%;

          // }
          .custom-select-trigger {
            height: 7.045vw;
            border-radius: 1.503vw;
            padding: 2.004vw 2.504vw;
            font-size: 2.273vw;
            // min-height: 31.589px;
            color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
            font-family: Montserrat;
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: 2.838vw;
          }

          .dropdown-arrow {
            width: 3.636vw;
            height: 3.636vw;
          }

          .custom-select-dropdown {
            border-radius: 1.503vw;
            max-height: 56.818vw;
          }

          .custom-select-option {
            padding: 2vw 2vw;
            font-size: 2.72vw; // 12px ÷ 440 × 100 = 2.273vw
          }


          .placeholder-option {
            font-size: 2.273vw; // 20/440*100
            font-weight: 400;
          }

          .custom-textarea {
            height: 19.318vw; // 85/440*100
            padding: 2.004vw 2.504vw;
          }

          .error-message {
            position: absolute;
            font-size: 2.273vw;
            font-weight: 400;
          }

          .submit-btn {
            border-radius: 1.837vw; // 8.081/440*100
            padding: 2.004vw; // 8.816/440*100
            height: 7.864vw; // 34.6/440*100
            font-size: 3.182vw; // 14/440*100
            font-style: normal;
            font-weight: var(--font-weight-600, 600);
            line-height: normal;
          }
        }
      }
    }
  }

  .custom-toast {
    position: fixed;
    top: 4.545vw; // 20/440*100
    left: 50%;
    transform: translateX(-50%);
    padding: 2.727vw 5.455vw; // 12, 24
    border-radius: 1.818vw; // 8/440*100
    font-size: 2.273vw; // 10/440*100
    font-family: Montserrat;
    z-index: 9999;
    animation: slideDown 0.3s ease;
    white-space: nowrap;
  }

  .custom-toast.success {
    background-color: #52c41a;
    color: white;
  }

  .custom-toast.error {
    background-color: #ff4d4f;
    color: white;
  }
}
</style>