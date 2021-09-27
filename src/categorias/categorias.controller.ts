import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDTO } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDTO } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categorias.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriaService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDTO,
  ): Promise<Categoria> {
    return await this.categoriaService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias(): Promise<Categoria[]> {
    return await this.categoriaService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async constarlCategoriaPeloId(
    @Param('categoria') categoria: string,
  ): Promise<Categoria> {
    return await this.categoriaService.consultarCategoriaPeloId(categoria);
  }

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Body() atualizarCategoriaDTO: AtualizarCategoriaDTO,
    @Param('categoria') categoria: string,
  ): Promise<void> {
    await this.categoriaService.atualizarCategoria(
      categoria,
      atualizarCategoriaDTO,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: string[]): Promise<void> {
    return await this.categoriaService.atribuirCategoriaJogador(params);
  }
}
