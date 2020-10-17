import { BooleanLiteral } from "typescript";

export interface IStoreItem {
    id: number;
    name: string;
    isActive: boolean;
    price: number;
    recommendedPlaceToBuy: string;
};
    