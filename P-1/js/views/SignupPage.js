class SignupPage {
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
    //signUp page main 부분
    const signUp_main = document.createElement('div');
    signUp_main.setAttribute('class', 'login__main');
    const signUp_input = document.createElement('div');
    signUp_input.setAttribute('class', 'inputBox');
    const id_input = document.createElement('input');
    const password_input = document.createElement('input');
    const nickname_input = document.createElement('input');
    id_input.placeholder = 'ID를 입력하시오';
    password_input.placeholder = '비밀번호를 입력하시오';
    nickname_input.placeholder = '닉네임을 입력하시오';
    const buttonBox = document.createElement('div');
    buttonBox.setAttribute('class', 'twoBtnBox');
    const exit_box = this.createBtnBox('나가기', 'exit-box');
    const register_box = this.createBtnBox('회원가입', 'signup-register-box');

    //login page 연결
    this.$main.appendChild(signUp_main);
    signUp_main.appendChild(signUp_input);
    signUp_main.appendChild(buttonBox);
    buttonBox.appendChild(exit_box);
    buttonBox.appendChild(register_box);
    signUp_input.appendChild(id_input);
    signUp_input.appendChild(password_input);
    signUp_input.appendChild(nickname_input);

    //회원가입 클릭 이벤트
    exit_box.addEventListener('click', () => {
      window.history.pushState('', '', '/login');
      const urlChange = new CustomEvent('urlchange', {
        detail: { href: '/login' },
      });
      document.dispatchEvent(urlChange);
    });
  }
}
export default SignupPage;
