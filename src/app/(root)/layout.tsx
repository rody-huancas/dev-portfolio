import Footer from '@/components/Footer';
import Header from '@/components/Header'

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />

      <main className='max-w-4xl mx-auto my-24 px-5 sm:px-0'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default AppLayout;
