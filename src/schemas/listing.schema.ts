import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';

export type ListingDocument = HydratedDocument<Listing>;

@Schema()
export class Listing{

    @Prop()
    title: string;

    @Prop()
    price: string;

    @Prop()
    category: string;

    @Prop()
    condition: string;

    @Prop()
    shippingOption: string;
}

export const ListingSchema = SchemaFactory.createForClass(Listing);