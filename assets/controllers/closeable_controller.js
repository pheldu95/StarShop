import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    async close() {
        this.element.style.width = '0';

        await this.#waitForAnimation();
        this.element.remove();
    }

    #waitForAnimation() { //asks the element to tell use when it's css animations are finished
        return Promise.all(
            this.element.getAnimations().map((animation) => animation.finished),
        );
    }
}
