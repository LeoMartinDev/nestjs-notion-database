import { Inject, Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { NOTION_CLIENT } from './notion/notion.constants';

@Injectable()
export class UserService {
  constructor(@Inject(NOTION_CLIENT) private readonly notionClient: Client) {}
}
