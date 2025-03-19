import { Signal } from '@tnesh-stack/signals';

export class LocalStorageSignal<T> extends Signal.State<T | undefined> {
	constructor(public key: string) {
		const item = globalThis.localStorage?.getItem(key);

		super(item ? JSON.parse(item) : undefined);
	}

	public set(value: T) {
		super.set(value);
		if (globalThis.localStorage)
			globalThis.localStorage.setItem(this.key, JSON.stringify(value));
	}
}
