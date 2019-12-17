class Utils {
    static range* range(start, stop, step = 1) {
        if (stop === undefined) [start, stop] = [0, start];
        if (step > 0) while (start < stop) yield start, start += step;
        else if (step < 0) while (start > stop) yield start, start += step;
        else throw new RangeError('range() step argument invalid');
    }
}
