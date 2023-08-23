// import { setPersonalInfo } from '../components/Storage.js';

class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    // fetch UserList
    setPersonalInfo();
    console.log('홈페이지');
  }
}
export default HomePage;
