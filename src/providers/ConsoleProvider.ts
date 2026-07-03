import type { NotificationProvider } from "./NotificationProvider.js";

export class ConsoleProvider implements NotificationProvider {
    name = "console";

    async send(payload: unknown): Promise<void> {
        console.log("📨 Console Provider")
        console.log(payload)
    }
}



