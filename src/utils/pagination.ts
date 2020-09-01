const PAGE_LIMIT = 10

export interface PaginationRequest {
    from: number
    to: number
    limit: number
    calculateLimit: () => number
}

export interface PaginatedResponse {
    totalItems: number,
    items: any[]
}

export class Pagination implements PaginationRequest {
    public from: number = 0
    public to: number = 0
    public limit: number = PAGE_LIMIT

    constructor(from?: number, to?: number, limit?: number) {
        this.from = from >= 1 ? from : null
        this.to = to >= 1 ? to : null
        this.limit = limit >= 1 && limit <= PAGE_LIMIT ? limit : PAGE_LIMIT
    }

    public calculateLimit = () => {

        const calculatedLimit: number = this.to > this.from ? this.to - this.from : this.limit

        return calculatedLimit <= this.limit ? calculatedLimit : this.limit
    }
}