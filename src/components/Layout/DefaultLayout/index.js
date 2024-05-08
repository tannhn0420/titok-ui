import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div class="container">
        <Sidebar />
        <div class="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
