import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsUUID } from 'class-validator';
import mongoose, { Document, Types } from 'mongoose';


export type InvestorDDocument = InvestorD & Document;

@Schema()
export class InvestorD {
    @Prop()
    daddtionalbeneficiaries: string;
    @Prop()
    dadditionaltrustee: string;
    @Prop()
    dbeneficiary1: string;
    @Prop()
    dbeneficiary2: string;
    @Prop()
    dbeneficiary3: string;
    @Prop()
    dcountry: string;
    @Prop()
    dexemption: string;
    @Prop()
    dfullname: string;
    @Prop()
    dname1: string;
    @Prop()
    dnature: string;
    @Prop()
    dpostCode: string;
    @Prop()
    dpostaladdr: string;
    @Prop()
    dstate: string;
    @Prop()
    dsuburb: string;
    @Prop()
    dtrustname: string;
    @Prop()
    dtypepftrust: string;
    @Prop()
    terms: string;
    @Prop({
        unique: true,
        type: Types.ObjectId,
        ref: 'User',
    })
    userId: Types.ObjectId;
};

export const InvestorDSchema = SchemaFactory.createForClass(InvestorD);
