import { BaseSabotage } from "./baseSabotage";

/**
 * A basic test sabotage that has no game effect and fixes itself in 10 seconds.
 */
export class BasicSabotage extends BaseSabotage {

    beginSabotage() {
        super.beginSabotage();
        setTimeout(() => {
            this.endSabotage();
        }, 10000);
    }

    isCritical(): boolean {
        return false;
    }

}