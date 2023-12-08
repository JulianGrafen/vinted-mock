import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Listing } from './schemas/listing.schema';
import { ReceiveListingDTO } from './DTO/ReceiveListing.dto';

@Injectable()
export class ListingsService {

  constructor(@InjectModel(Listing.name) private listingModel: Model<Listing>) {}

  async create(receiveListingDTO: ReceiveListingDTO): Promise<Listing> {
    console.log("Listing saved")
    const receiveListing = new this.listingModel(receiveListingDTO);
    return receiveListing.save();
  }

  async findAll(): Promise<Listing[]> {
    return this.listingModel.find().exec();
  }
}
