import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const LoginPage = () => {
    return (
        <>
            <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
                <section className="flex flex-col items-center">
                    <Image 
                        src="/assets/logo4_2.png"
                        width={200}
                        height={200}
                        alt="logo"
                    />
                    <h1
                    className="text-lg font-extrabold lg:text-2xl text-[#254c67]"
                    >Fast. Fluid. Face-to-Face</h1>
                </section>
                <div className="mt-3">
                    <SignIn 
                        appearance={
                            {
                                baseTheme : neobrutalism
                            }
                        }

                    />
                </div>
            </main>
        </>
    )
}

export default LoginPage;