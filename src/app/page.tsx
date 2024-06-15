import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-red-500" >
      User Session Data:
      </h1> 
      {session?(
        <div>
          <pre>
            {JSON.stringify(session,null,2)}
          </pre>
          <form action={async()=>{
          'use server';
          await signOut();            
          }}>
            <Button 
      type="submit"
      color="primary" 
      variant="solid" 
      startContent={<FaRegSmile size={25}/>}
      >Sign out
      </Button>
          </form>
        </div>
      ):(
        <div>
          Not Signed In
        </div>
      )}

      
    </div>
  );
}
