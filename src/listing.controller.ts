import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListingsService } from './listing.service';
import { ReceiveListingDTO } from './DTO/ReceiveListing.dto';

@Controller()
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {};


@Post('receiveListing')
receiveListing(@Body() receiveListingDTO:ReceiveListingDTO){
  this.listingsService.create(receiveListingDTO);
 console.log(receiveListingDTO);
}

@Get('getListings')
async findAll() {
  return this.listingsService.findAll();
}


}

