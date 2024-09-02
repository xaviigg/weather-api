import Coordinates from "../../Domain/ValueObject/Coordinates";
import ValidationError from "../../Shared/Exceptions/ValidationError";

export class GetWeatherRequestDTO {
    public readonly lat: number;
    public readonly long: number;

    constructor(lat: any, long: any) {
        const parsedLatitude = Number(lat);
        const parsedLongitude = Number(long);

        if (isNaN(parsedLatitude) || isNaN(parsedLongitude)) {
            throw new ValidationError('Invalid coordinates');
        }

        this.lat = parsedLatitude;
        this.long = parsedLongitude;
    }


    public get toCoordinates(): Coordinates {
        return new Coordinates(this.lat, this.long);
    }
}