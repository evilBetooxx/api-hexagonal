import { INotificationNewUser } from "../../../domain/services/INotificationNewUser";
import { User } from "../../../domain/User";
import * as amqp from "amqplib";

export class NotificationNewUser implements INotificationNewUser {
  async sendNotification(user: User): Promise<void> {
    try {
      const sendMessage = `Usuario creado: ${user.name}`;
      const connection = await amqp.connect(
        process.env.RABBIT ||
          "amqps://ijyzhlic:FSafBk3XsXUOm12yQN_puZzM73YVgtKr@crow.rmq.cloudamqp.com/ijyzhlic"
      );
      const channel = await connection.createChannel();
      const ex = "amq.direct";

      channel.publish(ex, "", Buffer.from(sendMessage));

      await channel.close();
      await connection.close();
      console.log(sendMessage);
    } catch (error) {
      console.log("Ocurrió un error:", error);
    }
  }
}
