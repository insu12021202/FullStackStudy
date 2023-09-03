class Mainpage {
  constructor($main) {
    this.$main = $main;
  }
  createMainList() {
    const mainpage_ul = document.createElement('ul');
    this.mainPost.map((item) => {
      let list = document.createElement('li');
      let date = document.createElement('div');
      let summary = document.createElement('button');
      let writer = document.createElement('div');
      date.appendChild(document.createTextNode(item.date));
      summary.appendChild(document.createTextNode(item.summary));
      writer.appendChild(document.createTextNode(item.writer));
      list.appendChild(date);
      list.appendChild(summary);
      list.appendChild(writer);
      mainpage_ul.appendChild(list);
    });
    return mainpage_ul;
  }
  createMainpage_footer() {
    const mainpage_footer_ul = document.createElement('ul');
    for (var i = 1; i < 10; i++) {
      const list = document.createElement('li');
      const button = document.createElement('button');
      button.appendChild(document.createTextNode(i));
      list.appendChild(button);
      mainpage_footer_ul.appendChild(list);
    }
    return mainpage_footer_ul;
  }

  mainPost = [
    {
      pk: 1,
      date: '12/18',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
    {
      pk: 2,
      date: '12/19',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
    {
      pk: 3,
      date: '12/20',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
    {
      pk: 4,
      date: '12/21',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
    {
      pk: 5,
      date: '12/22',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
    {
      pk: 6,
      date: '12/24',
      summary: '인수 비기너 참여하시는 여러분 환영합니다',
      writer: '익명',
    },
  ];
  render() {
    //mainpage header
    const mainpage_header = document.createElement('div');
    const mainpage_header_name = document.createElement('div'); // 게시판이 바뀌면 자동으로 바뀌게 설정
    const mainpage_header_registerBtn = document.createElement('button');
    mainpage_header.setAttribute('class', 'mainpageHeader');
    mainpage_header_name.appendChild(document.createTextNode('자유게시판'));
    mainpage_header_name.setAttribute('class', 'mainpageHeaderName');
    mainpage_header_registerBtn.appendChild(
      document.createTextNode('등록하기')
    );
    mainpage_header_registerBtn.setAttribute(
      'class',
      'mainpageHeaderRegiserBtn'
    );

    // mainpage header 연결
    mainpage_header.appendChild(mainpage_header_name);
    mainpage_header.appendChild(mainpage_header_registerBtn);
    this.$main.appendChild(mainpage_header);
    // mainpage list
    const mainList = this.createMainList();
    mainList.setAttribute('class', 'mainPage');
    // mainpage list 연결
    const mainpage_listBox = document.createElement('div');
    mainpage_listBox.setAttribute('class', 'mainPageListBox');
    mainpage_listBox.appendChild(mainList);
    this.$main.appendChild(mainpage_listBox);

    // mainpage footer
    const mainpage_footer = this.createMainpage_footer();

    // mainpage footer 연결
    const mainpage_footerBox = document.createElement('div');
    mainpage_footerBox.setAttribute('class', 'mainpage__footer-box');
    this.$main.appendChild(mainpage_footerBox);
    mainpage_footerBox.appendChild(mainpage_footer);
  }
}

export default Mainpage;
