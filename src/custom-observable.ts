import { Observable, Subscriber, Observer } from 'rxjs';

export default function createObservable(initialAmount: number, oneSecAmount: number): Observable<number> {
    return Observable.create(($: Observer<number>) => {
        let current = 0;
        for (let i = 0; i < initialAmount; i++) {
            $.next(current);
            current++;
        }
        setTimeout(() => {
            for (let i = 0; i < oneSecAmount; i++) {
                $.next(current);
                current++;
            }
        });
    });
}
