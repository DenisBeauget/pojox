<template>
  <section
    class="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p class="max-w-[700px] text-gray-600 md:text-xl">
          Have questions about Pojox? Our team is here to help you with any
          inquiries or feedback.
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold tracking-tighter mb-6">
            Get in <span class="text-emerald-300">Touch</span>
          </h2>
          <p class="text-gray-600 mb-8">
            We value your feedback and questions. Feel free to reach out to us
            using the contact form.
          </p>
        </div>

        <div class="bg-emerald-50 p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form ref="form" class="space-y-6" @submit.prevent="sendEmail">
            <div
              v-if="formStatus.success"
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
              role="alert"
            >
              <p>
                Your message has been sent successfully! We'll get back to you
                soon.
              </p>
            </div>
            <div
              v-if="formStatus.error"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
              role="alert"
            >
              <p>{{ formStatus.errorMessage }}</p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >First Name <span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.firstName"
                  type="text"
                  id="first-name"
                  name="first-name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Last Name <span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.lastName"
                  type="text"
                  id="last-name"
                  name="last-name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                v-model="formData.email"
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Subject <span class="text-red-500">*</span></label
              >
              <select
                v-model="formData.subject"
                id="subject"
                name="subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                <option value="" disabled selected>Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Message <span class="text-red-500">*</span></label
              >
              <textarea
                v-model="formData.message"
                id="message"
                name="message"
                rows="6"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <div class="flex items-center">
              <input
                v-model="formData.acceptedPolicy"
                type="checkbox"
                id="privacy-policy"
                name="privacy-policy"
                class="rounded border-gray-300 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50"
                required
              />
              <label
                for="privacy-policy"
                class="ml-2 block text-sm text-gray-700"
              >
                I agree to the

                <router-link
                  to="/privacy"
                  class="text-emerald-600 hover:underline"
                >
                  Privacy Policy
                </router-link>
              </label>
            </div>

            <button
              type="submit"
              class="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed"
              :disabled="formStatus.submitting"
            >
              <span v-if="!formStatus.submitting" class="flex items-center">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2 h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </span>
              <span v-else class="flex items-center">
                Sending
                <svg
                  class="animate-spin ml-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section
    class="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Start with Pojox?
        </h2>
        <p class="max-w-[600px] text-emerald-50 md:text-xl">
          Join thousands of developers who are already using Pojox to streamline
          their workflow.
        </p>
        <router-link
          to="/convert"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-emerald-600 hover:bg-gray-100 h-11 px-8 mt-6"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Try Pojox for Free
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const YOUR_EMAIL = import.meta.env.VITE_EMAIL;

console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

const form = ref<HTMLElement>();

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
  acceptedPolicy: false,
});

const formStatus = reactive({
  submitting: false,
  success: false,
  error: false,
  errorMessage: "",
});

const sendEmail = async () => {
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.subject ||
    !formData.message ||
    !formData.acceptedPolicy
  ) {
    formStatus.error = true;
    formStatus.errorMessage =
      "Please fill in all required fields and accept the privacy policy.";
    return;
  }

  formStatus.submitting = true;
  formStatus.error = false;
  formStatus.success = false;

  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      to_email: YOUR_EMAIL,
      subject: formData.subject,
      message: formData.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    formData.firstName = "";
    formData.lastName = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
    formData.acceptedPolicy = false;

    formStatus.success = true;

    setTimeout(() => {
      if (form.value) {
        window.scrollTo({
          top: form.value.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }, 100);
  } catch (error) {
    console.error("Error sending email:", error);
    formStatus.error = true;
    formStatus.errorMessage = "Failed to send email. Please try again later.";
  } finally {
    formStatus.submitting = false;
  }
};
</script>
