import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
        <body className='bg-[#525252] w-screen'>
            <Navbar />
            <div className='w-full h-full mt-20'>
                {children}
            </div>
        </body>
    </html>
  )
}
