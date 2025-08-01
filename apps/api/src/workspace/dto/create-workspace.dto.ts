import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateWorkspaceDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  logoUrl?: string;

  @IsNumber()
  @IsOptional()
  ownerId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  slug: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  color?: string;
}
