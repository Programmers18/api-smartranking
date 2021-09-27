import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(
      'mongodb+srv://raondup:elxXCZQnQhYCzFHn@cluster0.3vglm.mongodb.net/smartranking?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    ),
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
