
export interface RecipeOutput {
    Name: string;
    CurrentProd: number;
    MaxProd: number;
    ProdPercent: number;
}

export interface BuildingProperties {
    building: string;
    Recipe: string;
    production: RecipeOutput[];
    IsProducing: boolean;
}

export interface BuildingFeature extends GeoJSON.Feature<GeoJSON.Point> {
    properties: BuildingProperties
}