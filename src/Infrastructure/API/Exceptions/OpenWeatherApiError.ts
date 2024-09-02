export class OpenWeatherAPIError extends Error {
    public readonly statusCode: number;
    public readonly details: string;

    constructor(message: string, statusCode: number, details: string) {
        super(message);
        this.name = "OpenWeatherAPIError";
        this.statusCode = statusCode;
        this.details = details;
    }
}