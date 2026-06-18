import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // macOS + 한글 경로에서 파일 변경이 감지되지 않는 경우가 있어 폴링 사용
      usePolling: true,
      interval: 300,
    },
  },
})
