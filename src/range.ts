import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export function rangeFilter(): void {
    range(1, 5)
        .pipe(
            filter(x => x % 2 === 1),
            map(x => x + x),
        )
        .subscribe(x => console.log(x));
}
