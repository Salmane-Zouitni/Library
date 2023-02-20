import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() CreateBookDto: CreateBookDto) {
    return this.booksService.createOne(CreateBookDto);
  }

  @Get(':id')
  getdOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() bodyDto: UpdateBookDto) {
    return this.booksService.updateOne(id, bodyDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bodyDto: UpdateBookDto) {
    return this.booksService.updateOne(id, bodyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.deleteOne(id);
  }
}
