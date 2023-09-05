class LoginPage {
  constructor($main) {
    this.$main = $main;
  }
  createBtnBox(btnText, btnClass) {
    const box = document.createElement('button');
    box.appendChild(document.createTextNode(btnText));
    box.setAttribute('class', btnClass);
    return box;
  }
  render() {
    //login page main 부분
    const login_main = document.createElement('div');
    login_main.setAttribute('class', 'login__main');
    const login_input = document.createElement('div');
    login_input.setAttribute('class', 'inputBox');
    const id_input = document.createElement('input');
    const password_input = document.createElement('input');
    id_input.placeholder = 'ID를 입력하시오';
    password_input.placeholder = '비밀번호를 입력하시오';
    const buttonBox = document.createElement('div');
    buttonBox.setAttribute('class', 'twoBtnBox');
    const register_box = this.createBtnBox('회원가입', 'register-box');
    const login_box = this.createBtnBox('로그인', 'login-box');

    //login page 연결
    this.$main.appendChild(login_main);
    login_main.appendChild(login_input);
    login_main.appendChild(buttonBox);
    buttonBox.appendChild(register_box);
    buttonBox.appendChild(login_box);
    login_input.appendChild(id_input);
    login_input.appendChild(password_input);

    //회원가입 클릭 이벤트
    register_box.addEventListener('click', () => {
      window.history.pushState('', '', '/signup');
      const urlChange = new CustomEvent('urlchange', {
        detail: { href: '/signup' },
      });
      document.dispatchEvent(urlChange);
    });
  }
}
export default LoginPage;
