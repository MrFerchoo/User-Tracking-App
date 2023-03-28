import basicSsl from '@vitejs/plugin-basic-ssl'
export default {
  build: {
    sourcemap: true,
  },
  plugins: [
    basicSsl()
  ]
}