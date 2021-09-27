import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';
import { Evento } from '../interfaces/categorias.interface';

export class AtualizarCategoriaDTO {
  @IsOptional()
  @IsString()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}
