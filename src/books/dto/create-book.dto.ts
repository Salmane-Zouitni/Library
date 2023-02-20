export class CreateBookDto {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly publisher: string;
  readonly genre: string;
  readonly synopsis: string;
  readonly bookImg: string;
  readonly price: number;
}
