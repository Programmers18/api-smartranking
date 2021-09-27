import * as mongoose from 'mongoose';

export const DesafioSchema = new mongoose.Schema(
  {
    dataHorarioDesafio: { type: Date, default: Date.now() },
    status: { type: String },
    dataHorarioSolicitacao: { type: Date, default: Date.now() },
    dataHorarioResposta: { type: Date, default: Date.now() },
    solicitante: { type: mongoose.Schema.Types.ObjectId, ref: 'Jogador' },
    categoria: { type: String },
    jogadores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogador',
      },
    ],
    partida: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partida',
    },
  },
  { timestamps: true, collection: 'desafios' },
);
