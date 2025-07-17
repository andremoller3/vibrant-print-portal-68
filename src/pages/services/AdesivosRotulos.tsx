import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const AdesivosRotulos = () => {
  useScrollToTop();
  
  const benefits = [
    "Vinil branco, transparente ou colorido",
    "Acabamento brilho ou fosco", 
    "Recorte eletrônico para formas personalizadas",
    "Resistente a água e UV",
    "Aplicação em diversas superfícies",
    "Cores vibrantes e duradouras"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Adesivos e Rótulos Personalizados em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Adesivos em vinil de alta qualidade para identificação, decoração e personalização. 
                Perfeitos para produtos, veículos, vidros e superfícies diversas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5512979790618" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
                >
                  <MessageCircle size={18} />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%204%20de%20jul.%20de%202025,%2018_51_34.png?raw=true"
                alt="Adesivos e rótulos personalizados"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vecinos-blue mb-6">
                Adesivos de Alta Qualidade e Durabilidade
              </h2>
              <p className="text-gray-600 mb-6">
                Produzimos adesivos e rótulos em vinil autocolante de primeira linha, com impressão digital de alta resolução. Ideais para identificação de produtos, decoração de ambientes, sinalização e personalização de veículos em todo o Litoral Norte.
              </p>
              <p className="text-gray-600 mb-8">
                Utilizamos plotters de recorte de precisão para criar formas personalizadas e detalhes únicos. Nossos adesivos são resistentes à água, UV e possuem excelente aderência em diversas superfícies.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Nossos Adesivos:</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-vecinos-orange mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors duration-300 font-medium"
              >
                <MessageCircle size={18} />
                Pedir Orçamento Agora
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-vecinos-blue mb-3">Tipos de Adesivos:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Vinil branco opaco</li>
                <li>• Vinil transparente</li>
                <li>• Vinil perfurado (one way)</li>
                <li>• Adesivos recortados</li>
                <li>• Rótulos para produtos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Personalize com Adesivos de Qualidade!
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para adesivos e rótulos personalizados. 
            Atendemos Caraguatatuba, Ubatuba, São Sebastião e Ilhabela!
          </p>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors duration-300 font-medium text-lg"
          >
            <MessageCircle size={20} />
            Pedir Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdesivosRotulos;
