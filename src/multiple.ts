import { range } from 'rxjs';

export function multipleSubscriptionInSequence(): void {
    const $ = range(1, 5);
    $.subscribe(x => console.log(`Subscriber 1: ${x}`));
    $.subscribe(x => console.log(`Subscriber 2: ${x}`));
}

export function multipleSubscriptionParalell(): void {
    const $ = range(1, 5);
    $.subscribe(x => console.log(`Subscriber 1: ${x}`));
    $.subscribe(x => console.log(`Subscriber 2: ${x}`));
}
