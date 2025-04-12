'use client'

import { checkScoreSchema, CheckScoreSchema } from "@/app/API/exam/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";



export default function FormCheckScore() {

    const {
		register,
		handleSubmit,
	

		formState: { errors },
	} = useForm({
		resolver: zodResolver(checkScoreSchema),
    });

    const router = useRouter()
    const searchParams = useSearchParams()
    
    const onSubmit = (data: CheckScoreSchema) => {
    
        router.replace(`?sbd=${data.sbd}`)
    }

    return (
        <section className = ' bg-white dark:bg-gray-800 border rounded-lg shadow-md  px-4 py-8'>
            <h5 className="text-2xl font-bold mb-3">User Registration</h5>

            <p className="mb-1" >Registration Number:</p>

            <form  className="inline-flex gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <Input 
                    {...register('sbd')} 
                    defaultValue={searchParams.get('sbd') || ''} 
                    className = ' md:min-w-[300px] rounded-sm' 
                    name="sbd" 
                    placeholder="Enter registration number"
                   
                />
                </div>
                <Button className = 'rounded-sm' type="submit">Submit</Button>
            </form>
             {errors.sbd && <p className="text-red-500">{errors.sbd.message}</p>}
        </section>
    )
}
