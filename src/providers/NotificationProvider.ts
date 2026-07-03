export interface NotificationProvider {
    name: string;
    send(payload: unknown): Promise<void>;
}