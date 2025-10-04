import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

export default async function ThankYou() {
  return (
    <>
      <div
        className="grid place-items-center h-screen"
        style={{ backgroundColor: "#f8f1e7" }}
      >
        <div className="flex flex-col items-center justify-center px-2">
          <div className="mx-auto mb-10 mt-32 w-full max-w-xl text-center">
            <p className="mb-8 text-green-900 dark:text-green-300">
              Correo enviado exitosamente
            </p>

            <h1 className="mb-4 sm:mb-8 text-5xl font-extrabold ">
              Gracias! tu formulario ha sido enviado correctamente
            </h1>
            <p>Pronto recibiras informacion sobre el producto que deseas.</p>
          </div>
        </div>
      </div>
    </>
  );
}
