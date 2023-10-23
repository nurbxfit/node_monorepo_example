import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

export class HttpClient {
	client: AxiosInstance;

	constructor(protected baseURL?: string) {
		this.client = axios.create({
			baseURL: this.baseURL ?? "http://localhost:3000",
		});

		this.client.interceptors.response.use(
			(response) => this.responseHandler(response),
			(error) => this.errorHandler(error)
		);
	}

	errorHandler(error: any) {
		// Custom error handling logic
		return Promise.reject(error);
	}

	responseHandler(response: any) {
		// Custom response handling logic
		return Promise.resolve(response.data);
	}

	setHeaders(headers: { [key: string]: string }) {
		this.client.defaults.headers.common = headers;
	}

	setBaseURL(baseURL: string) {
		this.client.defaults.baseURL = baseURL;
	}

	setRequestInterceptor(callback: (config: AxiosRequestConfig) => any) {
		this.client.interceptors.request.use(callback);
	}

	clearRequestInterceptor() {
		this.client.interceptors.request.clear();
	}

	get<T = any>(endpoint: string, config?: AxiosRequestConfig) {
		return this.client.get<T>(endpoint, config);
	}

	post<T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig) {
		return this.client.post<T>(endpoint, data, config);
	}

	put<T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig) {
		return this.client.put<T>(endpoint, data, config);
	}

	patch<T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig) {
		return this.client.patch<T>(endpoint, data, config);
	}

	delete<T = any>(endpoint: string, config?: AxiosRequestConfig) {
		return this.client.delete<T>(endpoint, config);
	}
}
