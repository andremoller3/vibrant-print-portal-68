import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const BannersFaixasFachadas = () => {
  useScrollToTop();
  
  const benefits = [
    "Impressão em alta resolução",
    "Materiais resistentes", 
    "Acabamento em madeiras ou ilhós",
    "Tamanhos personalizados conforme necessidade",
    "Cores vivas e duradouras",
    "Instalação profissional disponível"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banners, Faixas e Fachadas em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Impressão em lona de alta definição para fachadas comerciais, eventos e divulgação. 
                Destaque seu negócio com qualidade profissional no Litoral Norte.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%204%20de%20jul.%20de%202025,%2018_46_18.png?raw=true"
                alt="Banners e fachadas personalizadas em Caraguatatuba"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vecinos-blue mb-6">
                Banners e Fachadas de Alta Qualidade
              </h2>
              <p className="text-gray-600 mb-6">
                Na Vecinos Comunicação Visual, produzimos banners, faixas e fachadas com impressão digital de alta definição em lona vinílica resistente. Ideal para estabelecimentos comerciais, eventos, feiras e campanhas publicitárias em Caraguatatuba, Ubatuba, São Sebastião e Ilhabela.
              </p>
              <p className="text-gray-600 mb-8">
                Nossos banners são produzidos com tecnologia de impressão ecosolvente, garantindo cores vivas e durabilidade mesmo expostos ao sol e chuva. Oferecemos diversos tipos de acabamento para atender suas necessidades específicas.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Benefícios dos Nossos Banners:</h3>
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
                className="btn btn-primary inline-flex items-center"
              >
                Solicitar Orçamento Agora
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-vecinos-blue mb-3">Tipos de Acabamento:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Acabamento com ilhós (mais comum)</li>
                <li>• Acabamento com madeiras</li>
                <li>• Bainha para encaixe em suporte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Destacar Seu Negócio?
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento personalizado para banners, faixas e fachadas. 
            Atendemos todo o Litoral Norte com qualidade garantida!
          </p>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 font-medium text-lg mx-auto w-fit"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BannersFaixasFachadas;
