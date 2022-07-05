import { DynamicModule, Module } from '@nestjs/common';
import { Client } from '@notionhq/client';

import { NOTION_CLIENT } from './notion.constants.ts';

export type NotionModuleConfig = {
  notionToken: string;
};

@Module({})
export class NotionModule {
  forRoot(config: NotionModuleConfig): DynamicModule {
    return {
      module: NotionModule,
      providers: [
        {
          provide: NOTION_CLIENT,
          useValue: new Client({ auth: config.notionToken }),
        },
      ],
    };
  }
}
