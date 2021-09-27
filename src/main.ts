import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import * as momentTimezone from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());

  /*
    Desafio
    Sobrescrevemos a funçao toJSON do Date passando um objeto moment. Deste modo 
    quando o objeto for serializado, ele utilizará o formato de data definido por nós.
    Todos os objetos Date serao afetados con esta implementaçao
  */
  Date.prototype.toJSON = function (): any {
    return momentTimezone(this)
      .tz('America/Asuncion')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  await app.listen(8080);
}
bootstrap();
