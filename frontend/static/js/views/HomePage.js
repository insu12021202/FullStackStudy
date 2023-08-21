import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
    constructor($main) {
        this.$main = $main;
    }

    async render() {
        const title = new ContentTitle(this.$main, "Great People");
        title.render();

        const cardView = new CardView(this.$main);
        cardView.render();
    }
}
export default HomePage;
