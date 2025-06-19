import React, { useState } from 'react';
import { Heart, Camera, Star, Sparkles } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images from Pexels - you'll replace these with your actual photos
  const collageImages = [
    'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1024999/pexels-photo-1024999.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2253871/pexels-photo-2253871.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1025000/pexels-photo-1025000.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322186/pexels-photo-1322186.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2253872/pexels-photo-2253872.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1025001/pexels-photo-1025001.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322187/pexels-photo-1322187.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2253873/pexels-photo-2253873.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1025002/pexels-photo-1025002.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322188/pexels-photo-1322188.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2253874/pexels-photo-2253874.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1025003/pexels-photo-1025003.jpg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2379009/pexels-photo-2379009.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1322189/pexels-photo-1322189.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2253875/pexels-photo-2253875.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1025004/pexels-photo-1025004.jpg?auto=compress&cs=tinysrgb&w=400',
  ];

  // Kissing photos section - 2 photos
  const kissingPhotos = [
    'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpg?auto=compress&cs=tinysrgb&w=600'
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
          Una colección de momentos que capturan nuestro amor
        </p>
      </header>

      {/* Photo Collage */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nuestros Recuerdos
          </h2>
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

      {/* Nuestros Besos Section */}
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

      {/* Niño Feliz Section */}
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
                  onClick={() => setSelectedImage('https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600')}
                >
                  <img
                    src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Niño Feliz"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  Gracias por devolverme la sonrisa
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

      {/* Primera Foto Juntos Section */}
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
                  onClick={() => setSelectedImage('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600')}
                >
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Primera Foto Juntos"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                  Me muero de ansias por llenar miles de colecciones juntos
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
            >
              ✕
            </button>
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