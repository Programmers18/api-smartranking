import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from '../categorias/categorias.module';
import { JogadoresModule } from '../jogadores/jogadores.module';
import { DesafiosController } from './desafios.controller';
import { DesafiosService } from './desafios.service';
import { DesafioSchema } from './interfaces/desafio.schema';
import { PartidaSchema } from './interfaces/partida.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Desafios', schema: DesafioSchema },
      { name: 'Partida', schema: PartidaSchema },
    ]),
    JogadoresModule,
    CategoriasModule,
  ],
  controllers: [DesafiosController],
  providers: [DesafiosService],
  exports: [DesafiosService],
})
export class DesafiosModule {}
