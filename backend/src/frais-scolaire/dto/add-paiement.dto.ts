import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddPaiementDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 50000, description: 'Montant du paiement' })
  montant: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'mobile_money', description: 'Méthode de paiement', enum: ['especes', 'virement', 'mobile_money', 'cheque'] })
  methode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'REF-001', description: 'Référence du paiement', required: false })
  reference?: string;
}
