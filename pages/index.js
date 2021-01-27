import Layout from '../components/Layout';
import Image from 'next/image';

const Index = () => (
  <>
    <Layout title='Home'>
      <p>Welcome to the Home page!</p>
      <Image src='/test.png' alt='me' width='3840' height='2154' />
    </Layout>
  </>
);

export default Index;
