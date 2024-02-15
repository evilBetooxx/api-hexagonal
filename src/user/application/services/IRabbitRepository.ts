export interface IRabbitRepository {
    sendMessage(message: string): Promise<void>;
}