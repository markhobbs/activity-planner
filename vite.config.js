
import react from "@vitejs/plugin-react";

// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      provider: playwright({
        // ...custom playwright options
      }),
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})