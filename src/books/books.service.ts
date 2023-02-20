import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  findAll() {
    return this.bookModel.find().exec();
  }

  createOne(bookDto: CreateBookDto) {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
  }

  async findOne(id: string) {
    const book = await this.bookModel.findOne({ _id: id }).exec();
    if (book) {
      return book;
    } else {
      throw new NotFoundException(`Book id ${id} Not Found!`);
    }
  }

  async deleteOne(id: string) {
    const bookToRemove = await this.findOne(id);
    return bookToRemove.remove();
  }

  async updateOne(id: string, updateBookDto: UpdateBookDto) {
    const existingBook = await this.bookModel
      .findOneAndUpdate({ _id: id }, { $set: updateBookDto }, { new: true })
      .exec();
    if (!existingBook) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return existingBook;
  }
}
