import { IRabbitRepository } from "../../application/services/IRabbitRepository";
import * as amqp from "amqplib";

export class RabbitUtility implements IRabbitRepository {
  async sendMessage(message: string): Promise<void> {
    try {
      const sendMessage = `Usuario creado: ${message}`;
      const connection = await amqp.connect(
        process.env.RABBIT || "amqps://ijyzhlic:FSafBk3XsXUOm12yQN_puZzM73YVgtKr@crow.rmq.cloudamqp.com/ijyzhlic"
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
