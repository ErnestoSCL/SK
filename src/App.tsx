import React, { useState } from 'react';
import { Heart, Camera, Star, Sparkles } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const collageImages = [
    '/images/conejitos.jpg',
    '/images/foto 1.jpg',
    '/images/foto 2.jpg',
    '/images/foto 3.jpg',
    '/images/Kath 1.jpg',
    '/images/kath abuelito.jpg',
    '/images/Kath bonita.jpg', 
    '/images/kath y masha.jpg',
    '/images/kath y ramses 1.jpg',
    '/images/kath y ramses 2.jpg',
    '/images/kath y ramses 3.jpg',
    '/images/kath y ramses 4.jpg',
    '/images/kath y ramses 5.jpg',
    '/images/kath y ramses 6.jpg',
    '/images/kath y ramses.jpg',
    '/images/kath y ramses 7.jpg',
    '/images/kath y saniel 1.jpg',
    '/images/kath y saniel 2.jpg',
    '/images/kath y saniel 3.jpg',
    '/images/kath y saniel 4.jpg',
    '/images/plaza.jpg',
    '/images/manitos.jpg',
    '/images/Kath y saniel.jpg',
    '/images/manos juntas.jpg',
    '/images/saniel abuelito.jpg',
    '/images/cafe.jpg',
    '/images/pizza.jpg',
    '/images/Kath.jpg',
    '/images/Kath nueva 3.jpg',
    '/images/Kath nueva 1.jpg',
    '/images/Kath nueva 2.jpg',
    '/images/kath perrito.jpg',
    '/images/Kath nn 1.jpg',
        '/images/Kath nueva 4.jpg',

    '/images/kath nn 2.jpg',
    '/images/kath nn 3.jpg',
    '/images/kath nn 4.jpg',
  ];

  const kissingPhotos = [
    '/images/besando a kath.jpg',
    '/images/Besando a Saniel.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-orange-50 to-sky-200">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="flex justify-center items-center mb-4">
          <Sparkles className="w-8 h-8 text-orange-500 mr-3 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">
            SaniKath
          </h1>
          <Sparkles className="w-8 h-8 text-sky-500 ml-3 animate-pulse" />
        </div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Para mi persona favorita, Kath. Este es un pequeño homenaje a todos los momentos que hemos compartido juntos. Espero que disfrutes de este viaje por nuestras memorias y que cada imagen te recuerde lo mucho que significas para mí.
        </p>
      </header>

      {/* Photo Collage */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {collageImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${index % 11 === 0 ? 'lg:col-span-2' : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Memoria ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Besos */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 fill-current mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Nuestros Besos</h2>
              <Heart className="w-8 h-8 text-red-500 fill-current ml-3" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {kissingPhotos.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Beso ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niño Feliz */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 to-sky-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <Star className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-4xl font-bold text-gray-800">NIÑO FELIZ</h2>
                <Star className="w-8 h-8 text-orange-500 ml-3" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 group"
                  onClick={() => setSelectedImage('/images/niño feliz.jpg')}
                >
                  <img
                    src="/images/niño feliz.jpg"
                    alt="Niño Feliz"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  Gracias por devolverme una sonrisa a mi rostro
                </p>
                <div className="flex justify-center md:justify-start mt-4">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-orange-500 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primera Foto Juntos */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-sky-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <Camera className="w-8 h-8 text-sky-500 mr-3" />
                <h2 className="text-4xl font-bold text-gray-800">Primera Foto Juntos</h2>
                <Camera className="w-8 h-8 text-sky-500 ml-3" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 group"
                  onClick={() => setSelectedImage('/images/primera foto juntos.jpg')}
                >
                  <img
                    src="/images/primera foto juntos.jpg"
                    alt="Primera Foto Juntos"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  Me muero de ganas por llenar miles de colecciones juntos
                </p>
                <div className="flex justify-center md:justify-start mt-4">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <Camera
                        key={i}
                        className="w-6 h-6 text-sky-500 animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Message */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sky-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-6 h-6 text-red-500 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
              "Te amo Kath, gracias por hacer de mí el niño más feliz de todo el universo"
            </blockquote>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-6 h-6 text-red-500 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-red-500 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 shadow-lg border border-red-300"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>

            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <div className="flex justify-center items-center space-x-2 text-gray-600">
          <Heart className="w-5 h-5 text-red-500 fill-current" />
          <span>Hecho con amor para Kath</span>
          <Heart className="w-5 h-5 text-red-500 fill-current" />
        </div>
      </footer>
    </div>
  );
}

export default App;
