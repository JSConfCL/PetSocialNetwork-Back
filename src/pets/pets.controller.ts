import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseUUIDPipe
} from '@nestjs/common';

import { PetsService }	from '@pets/pets.service';
import { CreatePetDto } from '@pets/dto/create-pet.dto';
import { UpdatePetDto } from '@pets/dto/update-pet.dto';


@Controller( 'pets' )
export class PetsController {
	constructor(
		private readonly petsService: PetsService
	) {}

	@Post()
	create(
		@Body() createPetDto: CreatePetDto
	) {
		return this.petsService.create( createPetDto );
	}

	@Get()
	findAll() {
		return this.petsService.findAll();
	}

	@Get(':id')
	findOne(
		@Param( 'id', ParseUUIDPipe ) id: string
	) {
		return this.petsService.findOne( id );
	}

	@Patch(':id')
	update(
		@Param('id', ParseUUIDPipe ) id: string,
		@Body() updatePetDto: UpdatePetDto
	) {
		return this.petsService.update( id, updatePetDto );
	}

	@Delete(':id')
	remove(
		@Param('id', ParseUUIDPipe) id: string
	) {
		return this.petsService.remove( id );
	}
}
