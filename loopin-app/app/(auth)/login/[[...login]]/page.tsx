import { SignIn } from "@clerk/nextjs";
import Image from "next/image";



const LoginPage = () => {
    return (
        <>
            <main className="flex flex-col items-center p-3 gap-5 animate-fade-in">
                <section className="flex flex-col items-center">
                    <Image 
                        src="/assets/logo4_2.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                    <h1
                    className="text-lg font-extrabold lg:text-2xl text-[#254c67]"
                    >Fast. Fluid. Face-to-Face</h1>
                </section>
                <div>
                    <SignIn 
                        appearance={{
                        elements: {
                        formButtonPrimary: "bg-[#1b3c58] !bg-[#1b3c58] hover:!bg-[#152c3a] text-white rounded-md",  
                        },
                    }}

                    />
                </div>
            </main>
        </>
    )
}

export default LoginPage;