import Layout from '../components/Layout';
import Image from 'next/image';

const Index = () => (
  <>
    <Layout title='Home'>
      <p>Welcome to the Home page!</p>
      <Image src='/test.png' alt='me' width='1080' height='720' />
    </Layout>
  </>
);

export default Index;
