import { cardDiv, cardPlane } from "./Card.js";
import { setPersonalInfo } from "./Storage.js";

class CardView {
    constructor($main) {
        this.$main = $main;
    }

    infiniteScroll(containerDiv) {
        let target = containerDiv;
        let page = 1;
        const io = new IntersectionObserver(
            async (entry, observer) => {
                if (entry[0].isIntersecting) {
                    console.log("관찰");
                    io.unobserve(target);

                    const personalInfo = await setPersonalInfo(page);
                    page++;

                    personalInfo.map((item, idx) => {
                        const card = cardDiv(idx);
                        card.appendChild(cardPlane("front", item.nickname)); // 카드 앞면의 요소
                        card.appendChild(cardPlane("back", item.name)); // 카드 뒷면의 요소
                        containerDiv.appendChild(card);
                    });
                }
            },
            {
                threshold: 0.7,
            }
        );

        io.observe(target);
    }

    async render() {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "cards_container");
        this.$main.appendChild(containerDiv);

        this.infiniteScroll(containerDiv);
    }
}
export default CardView;
