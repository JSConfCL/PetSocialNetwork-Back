import { Module } from '@nestjs/common';

import { PostsService }			from '@posts/posts.service';
import { PostsController }	from '@posts/posts.controller';

@Module({
	controllers	: [PostsController],
  providers		: [PostsService],
})
export class PostsModule {}
