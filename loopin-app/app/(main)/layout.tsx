import { currentUser } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
const MainLayout = async (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
    const user = await currentUser();
    // console.log(user);
    // if(user){
    //     users.deleteUser(user.id);
    // }
    if(!user) return (
           
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
                            routing="hash"
                            appearance={{
                            elements: {
                            formButtonPrimary: "bg-[#1b3c58] !bg-[#1b3c58] hover:!bg-[#152c3a] text-white rounded-md",  
                            },
                        }}
    
                        />
                    </div>
                </main>
           
        )
        
    return (
        <main className="animate-fade-in">
            {children}
        </main>
    )
}

export default MainLayout;
