<template>
  <footer
    id="footer-section"
    class="font-display border-t border-gray-200 py-6"
    aria-label="Site footer"
  >
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-10 text-gray-700"
    >
      <nav aria-label="Social media links">
        <ul class="flex justify-center items-center gap-6">
          <li>
            <a
              href="https://github.com/DenisBeauget"
              class="w-10 h-10 flex justify-center items-center transition transform hover:scale-110 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my GitHub profile"
            >
              <img src="@/assets/github.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              class="w-8 h-8 flex justify-center items-center transition transform hover:scale-110 cursor-pointer"
              href="https://www.linkedin.com/in/denis-beauget-269ab2190"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my LinkedIn profile"
            >
              <img src="@/assets/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              class="w-8 h-8 flex justify-center items-center transition transform hover:scale-110 cursor-pointer"
              href="https://x.com/denisBeauget?t=dsMfTxYYWpJMD3igPcgoaQ&s=03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my X profile"
            >
              <img src="@/assets/x.svg" alt="X" />
            </a>
          </li>
        </ul>
      </nav>

      <nav aria-label="Useful links">
        <ul
          class="flex flex-col md:flex-row gap-2 pt-3 md:pt-0 justify-center items-center"
        >
          <li>
            <a
              href="https://fr.wikipedia.org/wiki/JavaScript_Object_Notation"
              class="hover:underline hover:text-pojox-green transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is JSON ?
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Plain_old_Java_object"
              class="hover:underline hover:text-pojox-green transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              POJO history
            </a>
          </li>
          <li>
            <a
              href="https://app.quicktype.io/"
              class="hover:underline hover:text-pojox-green transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quicktype
            </a>
          </li>
          <li>
            <a
              href="https://ajv.js.org/"
              class="hover:underline hover:text-pojox-green transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              AJV
            </a>
          </li>
        </ul>
      </nav>

      <p class="flex justify-center items-center">
        Made with ❤️ by
        <a
          class="pl-1 underline hover:text-pojox-green transition"
          href="https://github.com/DenisBeauget"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to my GitHub profile"
          >DNS</a
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
