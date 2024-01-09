import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'back':'#a39ea4',
      'inputs':'#f5f5f5',
      'red':'#db4444',
      'red-800':'#991b1b',
      'black':'#000000',
      'white':'#FFFF',
      'white-300':'#cbd5e1',
      'gray':'#f5f5f5',
      'gray-800':'#111827',
      'gray-600':'#cbd5e1',
      'gray-200':'#e2e8f0',
      'gray-400':'#9ca3af',
      'gray-300':'#334155',
      'slate':'#4b5563'
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
