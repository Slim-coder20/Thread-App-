import Link from "next/link";

export default function Login() {
    return (
        <div>
            {/* Title */}
            <h1 className="text-center font-bold text-white text-xl">
                Comment souhaitez-vous utiliser Threads ?
            </h1>

            <div className="mt-5 w-[500px] mx-auto flex flex-col gap-4">
                {/* Signup and signin */}
                <Link href="/login/signup">
                    <div className=" border border-gray-600 p-5 rounded hover:bg-gray-900 duration-150">
                        <h2 className="font-bold text-white">
                            S'inscrire ou se connecter avec une adresse email
                        </h2>
                        <div className="text-gray-600 mt-4">
                            Connectez-vous ou créez un profil Threads avec une
                            adresse email. Cela vous permettra de publier du
                            contenu et d'interagir sur Threads.
                        </div>
                    </div>
                </Link>

                {/* Invited */}
                <Link href="/login/pass">
                    <div className="border border-gray-600 p-5 rounded hover:bg-gray-900 duration-150">
                        <h2 className="font-bold text-white">
                            Utiliser sans profil
                        </h2>
                        <div className="text-gray-600 mt-4">
                            Vous pouvez naviguer dans Threads sans profil, mais
                            vous ne pourrez pas interagir avec du contenu ni en
                            publier.
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
