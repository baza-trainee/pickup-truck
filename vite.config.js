import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const personalInfo = [
  "VITE_APP_MONO_API_URL",
  "VITE_APP_MONO_API_KEY",
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  personalInfo.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})