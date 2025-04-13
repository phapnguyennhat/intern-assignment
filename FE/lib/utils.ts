import { SearchParams } from "@/types/searchParams.type";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function fetcher<T>(input: string, init?: RequestInit) {
	try {
		const response = await fetch(
			`${process.env.BACKEND_URL}/${input}`,
			init,
		);
		const json :T = await response.json();

		return json;
	} catch (error: any) {
		console.log({error})
		return {
			statusCode: 500,
			message: 'Server Error',
		};
	}
}

export function isErrorResponse(response: any): response is { statusCode: number, message: string } {
	if(!response){
	  return false
	}
	return 'statusCode' in response;
}
  
export async function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


export const createQueryString = (name: string |undefined, value: string, queryParams: SearchParams) => {
	const params = new URLSearchParams(queryParams as any);
	
  
	if(!name){
	  return params.toString()
	}
  
	if(params.get(name)===value){
	  params.delete(name)
	  
	}else{
	  params.set(name, value);
	}
	
  
	return params.toString();
  };
  