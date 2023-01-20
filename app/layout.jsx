import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
        <body className='bg-[#202020] scrollbar overflow-x-hidden'>
            <Navbar />
            <div className='w-screen h-full mb-16 lg:mb-0 lg:mt-20'>
                {children}
            </div>
        </body>
    </html>
  )
}
