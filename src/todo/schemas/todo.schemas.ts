import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Todostatus {
  PENDING = 'PENDING',
  IN_PROGRES = 'IN_PROGRES',
  COMPLETED = 'COMPLETED',
}
@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: Todostatus.PENDING })
  status: Todostatus;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
