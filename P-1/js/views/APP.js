// import { setPersonalInfo } from '../components/Storage.js';
import Header from './Header.js';
// import HomePage from './HomePage.js';
// import SignupPage from './SignupPage.js';
// import NotFoundPage from './NotFound.js';

class App {
  constructor($body) {
    this.$body = $body;
    this.$body.setAttribute('class', 'bodycon');
    this.render();
  }
  render() {
    // header
    const header = new Header(this.$body);
    header.render();

    // main
    const main = document.createElement('main');
    main.setAttribute('id', 'page_content');
    this.$body.appendChild(main);

    // render page
    const homePage = new HomePage(main);
    const signupPage = new SignupPage(main);
    const notFoundPage = new NotFoundPage(main);
    const renderPage = (pathname) => {
      //   // init main
      //   main.firstChild?.remove();
      // switch page rendering
      switch (pathname) {
        case '/':
          homePage.render();
          break;
        case '/signup':
          signupPage.render();
          break;
        default:
          notFoundPage.render();
      }
    };

    // init rendering
    renderPage(location.pathname);

    // handling header menu click event
    document.addEventListener('urlchange', (e) => {
      let pathname = e.detail.href;
      renderPage(pathname);
    });

    // handling browser popstate event
    window.addEventListener('popstate', (e) => {
      renderPage(location.pathname);
    });
  }
}
export default App;
