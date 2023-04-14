export default function Contact() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/2 bg-gray-400">
        <div className="text-left px-4 py-2">
          <p className="text-blue-900 font-medium">CONTACTO</p>
        </div>
        <div className="text-left px-4 py-2">
          <h2 className="text-blue-900 font-bold">Queremos ayudarte</h2>
        </div>
        <div className="text-left px-4 py-2">
          <h3>Haznos saber tus necesidades financieras</h3>
        </div>
        <div className="px-4 py-2">
          <form>
            <div className="mb-4">
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                placeholder="tel"
              />
            </div>
            <div className="mb-4">
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                placeholder="How we can help?"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">
                  Accept Terms and conditions
                </span>
              </label>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-auto py-2">
          <p>Prefer email? help@example.com</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 bg-blue-900">
        <h1 className="text-white text-center">mapa</h1>
      </div>
    </div>
  );
}