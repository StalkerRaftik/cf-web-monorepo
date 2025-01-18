export class ErrorStatusCode extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = 'ErrorStatusCode - ' + statusCode;
        this.statusCode = statusCode;
    }
}

export type RequestType = 'get' | 'post' | 'put' | 'delete' | 'patch';
export type ClientOptions = Omit<RequestInit, 'method'>;

export class ApiClient {
    private _authToken: string | null | undefined = undefined;

    constructor({ authToken = undefined }: { authToken?: string | null }) {
        if (authToken !== undefined) {
            this._authToken = authToken;
        }
    }

    public async fetch<T>(url: string, options: ClientOptions = {}, requestType: RequestType = 'get'): Promise<T> {
        let headers = options.headers || {};
        if (this._authToken !== undefined) {
            if (this._authToken === null) {
                throw new Error('Auth token is null, check if account is logged in');
            }
            headers = { ...headers, Authorization: `Bearer ${this._authToken}` };
        }

        const fetchOptions: RequestInit = { ...options, headers, method: requestType };
        const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, fetchOptions);
        if (!response.ok) {
            throw new ErrorStatusCode(response.statusText, response.status);
        }
        return await response.json();
    }

    public async get<T>(url: string, options: ClientOptions = {}): Promise<T> {
        return await this.fetch(url, options, 'get');
    }

    public async post<T>(url: string, options: ClientOptions = {}): Promise<T> {
        return await this.fetch(url, options, 'post');
    }

    public async put<T>(url: string, options: ClientOptions = {}): Promise<T> {
        return await this.fetch(url, options, 'put');
    }

    public async delete<T>(url: string, options: ClientOptions = {}): Promise<T> {
        return await this.fetch(url, options, 'delete');
    }

    public async patch<T>(url: string, options: ClientOptions = {}): Promise<T> {
        return await this.fetch(url, options, 'patch');
    }
}

export default ApiClient;
