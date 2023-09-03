class Header {
  constructor($body) {
    this.$body = $body;
  }

  createButton(buttonClass, btnText, imgSrc) {
    const button = document.createElement('button');
    button.setAttribute('class', buttonClass);

    if (imgSrc) {
      const img = document.createElement('img');
      img.src = imgSrc;
      button.appendChild(img);
    }

    button.appendChild(document.createTextNode(btnText));
    return button;
  }

  createListButton(btnText) {
    const list = document.createElement('li');
    const button = document.createElement('button');
    list.appendChild(button);
    button.appendChild(document.createTextNode(btnText));
    button.setAttribute('class', btnText);
    return list;
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
    let boardList = [
      { title: '자유게시판', url: 'free' },
      { title: '비밀게시판', url: 'secret' },
      { title: '정보게시판', url: 'information' },
      { title: '홍보게시판', url: 'promotion' },
      { title: 'SW게시판', url: 'software' },
    ];
    // hamburgerBtn click 슬라이드
    const hamburger_click = document.createElement('section');
    hamburger_click.setAttribute('class', 'hamburger-click');
    const unorderdList = document.createElement('ul');

    const hamburger_btn_boardlist = boardList.map((board) =>
      this.createListButton(board.title)
    );
    //header 요소들 연결
    header.appendChild(hearder_left);
    header.appendChild(header_main);
    header.appendChild(header_right);
    this.$body.appendChild(header);

    //hamburgerBtn 요소들 연결
    this.$body.appendChild(hamburger_click);
    hamburger_click.appendChild(unorderdList);
    hamburger_btn_boardlist.forEach((boardlist_name) =>
      unorderdList.appendChild(boardlist_name)
    );

    // hamburgerBtn 클릭 이벤트
    hearder_left.addEventListener('click', () => {
      hamburger_click.classList.toggle('blind');
    });

    // HOME 메뉴 클릭 이벤트
    header_main.addEventListener('click', () => {
      window.history.pushState('', '', '/');
      const urlChange = new CustomEvent('urlchange', {
        detail: { href: '/' },
      });
      document.dispatchEvent(urlChange);
    });

    // Log In 메뉴 클릭 이벤트
    header_right.addEventListener('click', () => {
      window.history.pushState('', '', '/login');
      const urlChange = new CustomEvent('urlchange', {
        detail: { href: '/login' },
      });
      document.dispatchEvent(urlChange);
    });
  }
}
export default Header;
