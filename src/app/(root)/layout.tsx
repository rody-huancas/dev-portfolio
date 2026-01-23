import Footer from '@/components/Footer';
import Header from '@/components/Header'

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />

      <main className='max-w-4xl mx-auto md:my-24 px-4 xl:px-0'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default AppLayout;
