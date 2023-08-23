class Header {
  constructor($body) {
    this.$body = $body;
  }

  createButton(buttonClass, btnText, imgSrc) {
    const button = document.createElement('button');
    button.setAttribute('class', buttonClass);

    const img = document.createElement('img');

    if (imgSrc) {
      img.src = imgSrc;
      button.appendChild(img);
    }

    button.appendChild(document.createTextNode(btnText));
    return button;
  }
  render() {
    const header = document.createElement('header');
    const hearder_left = this.createButton(
      'header-hamburgerBtn',
      '',
      '../P-1/img/Icon.png'
    );
    const header_main = this.createButton('header-main', '준형 메모');
    const header_right = this.createButton('header-login', 'Log In');
    header.appendChild(hearder_left);
    header.appendChild(header_main);
    header.appendChild(header_right);
    this.$body.appendChild(header);
  }

  // render() {

  //   // HOME 메뉴 클릭 이벤트
  //   home_menu.addEventListener('click', () => {
  //     window.history.pushState('', '', '/');
  //     const urlChange = new CustomEvent('urlchange', {
  //       detail: { href: '/' },
  //     });
  //     document.dispatchEvent(urlChange);
  //   });

  //   // SIGNUP 메뉴 클릭 이벤트
  //   signup_menu.addEventListener('click', () => {
  //     window.history.pushState('', '', '/signup');
  //     const urlChange = new CustomEvent('urlchange', {
  //       detail: { href: '/signup' },
  //     });
  //     document.dispatchEvent(urlChange);
  //   });
  // }
}
export default Header;
