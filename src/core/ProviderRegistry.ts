import { NotificationProvider } from "../providers/NotificationProvider.js";


export class ProviderRegistry {
    private providers = new Map<string, NotificationProvider>();

    register(provider: NotificationProvider) {
        this.providers.set(provider.name, provider);
    };

    get(name: string) {
        return this.providers.get(name);
    };

    getAll() {
        return Array.from(this.providers.values())
    };
}