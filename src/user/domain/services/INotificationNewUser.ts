import { User } from "../User";

export interface INotificationNewUser {
    sendNotification(user: User): Promise<void>;
}