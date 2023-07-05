export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public balance: number = 800
    ) { }

    setId?(id: string = ''): void {
        // Implement your own set Id
        this._id = id
    }
}

export interface ContactFilter {
    term: string
}

export class User {
    constructor(
        public _id: string ='lol',
        public name: string,
        public balance: number = 100,
        public moves:any[]
    ) { }
} 
