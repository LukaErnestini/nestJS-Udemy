import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // Common convention to call this function bootstrap
  const app = await NestFactory.create(AppModule);
  // Creates instance of out application

  await app.listen(3000);
}
bootstrap();
