export default function MahakalWeldingWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-yellow-700 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <img
            src="/mnt/data/owner-photo.jpg"
            alt="Owner"
            className="w-44 h-44 rounded-full mx-auto border-4 border-yellow-500 shadow-2xl object-cover"
          />

          <h1 className="text-5xl font-bold mt-6 text-yellow-400">
            Mahakal Welding Work
          </h1>

          <p className="text-lg mt-4 text-gray-200">
            Steel Fabrication • Gate Design • Grill Work • Railing • Shed Work • Factory Welding
          </p>

          <p className="mt-3 text-gray-300">
            Ramaraa, Akelwa Chauraha
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="tel:7394883506"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-2xl font-bold shadow-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917394883506"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-5">
              About Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Mahakal Welding Work me hum har tarah ka welding aur steel fabrication
              ka kaam professional quality ke sath karte hain. Hum gate design,
              railing, grill work, shed work aur factory fabrication me expert hain.
              Hamara focus strong finishing aur customer satisfaction par hota hai.
            </p>
          </div>

          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Welding Work"
              className="rounded-3xl shadow-2xl border border-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Steel Fabrication Work',
              'Gate Welding',
              'Designer Grill Work',
              'Railing Design',
              'Shed Construction',
              'Factory Welding Work',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl p-8 border border-yellow-500 shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold text-yellow-300">
                  {service}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  High quality welding aur fabrication service reasonable price me.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Work Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img
                key={item}
                src={`https://placehold.co/500x350?text=Welding+Work+${item}`}
                alt="Work"
                className="rounded-3xl shadow-xl border border-yellow-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          Contact Us
        </h2>

        <p className="text-xl text-gray-300 mb-3">
          📍 Ramaraa, Akelwa Chauraha
        </p>

        <p className="text-xl text-gray-300 mb-8">
          📞 7394883506
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:7394883506"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-2xl font-bold shadow-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917394883506"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
          >
            WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  );
}