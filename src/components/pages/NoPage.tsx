import Header from '../Header';
import Footer from '../Footer';

function NoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-10 max-w-7xl px-6 py-2 sm:mt-14 lg:px-4 2xl:px-0">
        <h2>ERROR 404 | NOT FOUND</h2>
      </main>
      <Footer />
    </>
  );
}

export default NoPage;
