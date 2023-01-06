import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#f8fbfe]'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
