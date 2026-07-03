import { ProviderRegistry } from "./ProviderRegistry.js";
import { NotificationProvider } from "../providers/NotificationProvider.js";


export class Pulse {
    private providerRegistry: ProviderRegistry;

    constructor() {
        this.providerRegistry = new ProviderRegistry();
    }

    use(provider: NotificationProvider) {
        this.providerRegistry.register(provider)
    }

}