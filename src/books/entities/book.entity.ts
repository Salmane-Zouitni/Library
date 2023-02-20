import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  publisher: string;
  @Prop()
  genre: string;

  @Prop()
  synopsis: string;

  @Prop()
  bookImg: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
