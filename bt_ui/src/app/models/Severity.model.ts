export class Severity {
    private id: number;
    private createdAt: any;
    private updatedAt: any;
    constructor(public code: string, public name: string, public rank: number) { }
}