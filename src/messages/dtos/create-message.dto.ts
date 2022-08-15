/**
 *
 */

import { IsString } from 'class-validator';

export class CreateMessageDto {
  // Validation rule
  @IsString()
  content: string;
}
