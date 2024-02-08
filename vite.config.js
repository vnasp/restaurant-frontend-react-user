import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()]
});