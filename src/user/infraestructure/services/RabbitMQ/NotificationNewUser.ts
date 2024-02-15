import { INotificationNewUser } from "../../../domain/services/INotificationNewUser";
import { User } from "../../../domain/User";
import * as amqp from "amqplib";

export class NotificationNewUser implements INotificationNewUser {
    async sendNotification(user: User): Promise<void> {
        
    }
}