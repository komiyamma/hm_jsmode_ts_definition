class TempFile implements Disposable {
    #path: string;
    #handle: number;
    constructor(path: string) {
        this.#path = path;
    }
    [Symbol.d.dispose]() {
    }
}