import { FindManyOptions, Repository } from "typeorm";
import BaseEntity from "./BaseEntity";

export default class PaginatedList<T extends BaseEntity> {
  pageIndex: number;
  totalPages: number;
  items: T[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;

  constructor(items: T[], count: number, pageIndex: number, pageSize: number) {
    this.items = [];

    this.pageIndex = pageIndex;
    this.totalPages = Math.ceil(count / pageSize);

    this.items = this.items.concat(items);

    this.hasNextPage = this.pageIndex < this.totalPages;
    this.hasPreviousPage = this.pageIndex > 1;
  }

  static async create<TCreate extends BaseEntity>(
    repository: Repository<TCreate>,
    options: FindManyOptions<TCreate>,
    pageIndex: number,
    pageSize: number
  ): Promise<PaginatedList<TCreate>> {
     const [items, count] = await repository.findAndCount(options);

     return new PaginatedList<TCreate>(items, count, pageIndex, pageSize);
  }
}