import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  controllers: [AppController],
  // Nest will create instances of all the controllers
  // listed when the application starts.
})
export class AppModule {}
