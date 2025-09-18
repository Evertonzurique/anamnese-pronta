import React, { useState } from 'react';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/Logo_Com_Texto_cabecalho.webp';
import telasMultimidiaImage from '../assets/telas-multimidia.webp';

const Landing = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-['Open_Sans']" 
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[rgba(10,25,47,0.9)] backdrop-blur-sm shadow-lg z-50 h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <img src={logoImage} alt="TricoLog" className="h-12 brightness-110" />
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors">Planos</a>
              <a href="#testimonials" className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors">Depoimentos</a>
              <button 
                onClick={() => setShowContactModal(true)}
                className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors"
              >
                Fale Conosco
              </button>
            </div>
            
            <div className="hidden lg:flex items-center space-x-3">
              <a href="/login" className="px-3 py-1.5 text-sm border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all rounded">
                Login
              </a>
              <a href="/anamnese" className="px-4 py-2 text-sm bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Comece Agora
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button className="lg:hidden text-white">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-['Poppins'] font-medium mb-5 bg-gradient-to-r from-[#6BD6B1] via-[#B8A1C9] to-[#3D7CB8] bg-clip-text text-transparent leading-tight">
              Revolucione a Avaliação Capilar dos Seus Clientes
            </h1>
            <p className="text-lg lg:text-xl text-[#A9B2C3] max-w-3xl mx-auto mb-10 leading-relaxed">
              O TricoLog é a plataforma SaaS que ajuda profissionais da saúde e beleza capilar a organizar e centralizar o histórico de seus clientes com uma anamnese digital detalhada e fotodocumentação estruturada, agilizando o diagnóstico e o acompanhamento dos tratamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="px-6 py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                Ver Planos e Preços
              </a>
              <button 
                onClick={() => setShowContactModal(true)}
                className="px-6 py-3 border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all rounded-lg"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-[rgba(10,25,47,0.6)] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-medium mb-4">
              A ferramenta definitiva para o profissional capilar moderno
            </h2>
            <p className="text-[#A9B2C3] max-w-3xl mx-auto">
              Ofereça conveniência, organização e rapidez na avaliação de clientes, facilitando o acesso à documentação completa para decisões de tratamento e acompanhamento da evolução.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1F3F6B] rounded-xl p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className="text-center">
                <i className="fas fa-file-signature text-5xl bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] bg-clip-text text-transparent mb-5"></i>
                <h4 className="text-xl font-['Poppins'] font-medium mb-4">Anamnese Digital Completa</h4>
                <p className="text-[#A9B2C3]">
                  Digitalize e centralize o processo de anamnese com um formulário tricológico detalhado e customizável, preenchido em minutos.
                </p>
              </div>
            </div>
            
            <div className="bg-[#1F3F6B] rounded-xl p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className="text-center">
                <i className="fas fa-camera-retro text-5xl bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] bg-clip-text text-transparent mb-5"></i>
                <h4 className="text-xl font-['Poppins'] font-medium mb-4">Fotodocumentação Padronizada</h4>
                <p className="text-[#A9B2C3]">
                  Registre a evolução de cada tratamento com um padrão de 9 fotos específicas do couro cabeludo a cada avaliação.
                </p>
              </div>
            </div>
            
            <div className="bg-[#1F3F6B] rounded-xl p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className="text-center">
                <i className="fas fa-folder-open text-5xl bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] bg-clip-text text-transparent mb-5"></i>
                <h4 className="text-xl font-['Poppins'] font-medium mb-4">Histórico de Clientes Centralizado</h4>
                <p className="text-[#A9B2C3]">
                  Acesse o histórico completo de avaliações de cada cliente de forma rápida e organizada, de qualquer lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target-audience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-medium mb-6">
                Criado para você, profissional da beleza e saúde capilar
              </h2>
              <p className="text-[#A9B2C3] mb-6">
                O TricoLog foi projetado pensando nas necessidades diárias de quem trabalha para devolver a saúde e a beleza aos cabelos dos seus clientes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-[#E0E6ED]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Tricologistas e Dermatologistas
                </li>
                <li className="flex items-center text-[#E0E6ED]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Cabeleireiros e Barbeiros
                </li>
                <li className="flex items-center text-[#E0E6ED]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Esteticistas Capilares
                </li>
                <li className="flex items-center text-[#E0E6ED]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Clínicas de Transplante Capilar
                </li>
                <li className="flex items-center text-[#E0E6ED]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Salões de Beleza Especializados
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={telasMultimidiaImage} 
                alt="Interface do TricoLog" 
                className="max-w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-[rgba(10,25,47,0.6)] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-medium mb-4">
              Escolha o plano ideal para o seu negócio
            </h2>
            <p className="text-[#A9B2C3] max-w-2xl mx-auto">
              Planos flexíveis que crescem com você, desde profissionais autônomos até grandes clínicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-[#1F3F6B] rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all">
              <h5 className="text-[#6BD6B1] font-bold text-lg mb-2">BÁSICO</h5>
              <div className="text-4xl font-bold text-[#E0E6ED] mb-6">
                R$ 29<span className="text-lg text-[#A9B2C3]">/mês</span>
              </div>
              <p className="text-[#A9B2C3] mb-6">Ideal para profissionais autônomos</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Até 50 clientes
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Anamnese digital completa
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Fotodocumentação básica
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Suporte por email
                </li>
              </ul>
              <a href="/anamnese" className="w-full py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg transition-all text-center block">
                Começar Agora
              </a>
            </div>

            {/* Plano Profissional */}
            <div className="bg-[#1F3F6B] rounded-2xl p-8 border-2 border-[#6BD6B1] hover:transform hover:-translate-y-2 hover:shadow-xl transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#6BD6B1] text-[#0A192F] px-4 py-1 rounded-full text-sm font-semibold">
                MAIS POPULAR
              </div>
              <h5 className="text-[#6BD6B1] font-bold text-lg mb-2">PROFISSIONAL</h5>
              <div className="text-4xl font-bold text-[#E0E6ED] mb-6">
                R$ 79<span className="text-lg text-[#A9B2C3]">/mês</span>
              </div>
              <p className="text-[#A9B2C3] mb-6">Para clínicas e salões</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Até 200 clientes
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Anamnese digital avançada
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Fotodocumentação completa
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Relatórios de evolução
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Suporte prioritário
                </li>
              </ul>
              <a href="/anamnese" className="w-full py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg transition-all text-center block">
                Começar Agora
              </a>
            </div>

            {/* Plano Enterprise */}
            <div className="bg-[#1F3F6B] rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all">
              <h5 className="text-[#6BD6B1] font-bold text-lg mb-2">ENTERPRISE</h5>
              <div className="text-4xl font-bold text-[#E0E6ED] mb-6">
                R$ 199<span className="text-lg text-[#A9B2C3]">/mês</span>
              </div>
              <p className="text-[#A9B2C3] mb-6">Para grandes clínicas e redes</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Clientes ilimitados
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Múltiplos usuários
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  API personalizada
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Integração com sistemas
                </li>
                <li className="flex items-center text-[#A9B2C3]">
                  <i className="fas fa-check text-[#6BD6B1] mr-3"></i>
                  Suporte 24/7
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg transition-all">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-medium mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-[#A9B2C3] max-w-2xl mx-auto">
              Profissionais de todo o Brasil já transformaram seus atendimentos com o TricoLog.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1F3F6B] rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-4xl text-[#3D7CB8]">"</span>
                <p className="text-[#A9B2C3] italic">
                  O TricoLog revolucionou minha prática clínica. Agora consigo acompanhar a evolução dos meus pacientes de forma muito mais organizada e profissional.
                </p>
              </div>
              <div>
                <h6 className="text-[#E0E6ED] font-semibold mb-1">Dra. Maria Silva</h6>
                <small className="text-[#A9B2C3]">Tricologista - São Paulo</small>
              </div>
            </div>
            
            <div className="bg-[#1F3F6B] rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-4xl text-[#3D7CB8]">"</span>
                <p className="text-[#A9B2C3] italic">
                  A fotodocumentação padronizada me ajuda muito a mostrar aos clientes a evolução do tratamento. Eles ficam mais motivados e confiantes.
                </p>
              </div>
              <div>
                <h6 className="text-[#E0E6ED] font-semibold mb-1">Carlos Mendes</h6>
                <small className="text-[#A9B2C3]">Cabeleireiro - Rio de Janeiro</small>
              </div>
            </div>
            
            <div className="bg-[#1F3F6B] rounded-2xl p-8">
              <div className="mb-6">
                <span className="text-4xl text-[#3D7CB8]">"</span>
                <p className="text-[#A9B2C3] italic">
                  Desde que implementamos o TricoLog na nossa clínica, nossa produtividade aumentou 40%. Recomendo para todos os colegas.
                </p>
              </div>
              <div>
                <h6 className="text-[#E0E6ED] font-semibold mb-1">Dr. João Santos</h6>
                <small className="text-[#A9B2C3]">Dermatologista - Belo Horizonte</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A192F] to-[#1F3F6B] text-center border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-['Poppins'] font-medium mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-[#A9B2C3] text-lg max-w-2xl mx-auto mb-10">
            Junte-se a centenas de profissionais que já descobriram como o TricoLog pode revolucionar a gestão de clientes capilares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/anamnese" className="px-8 py-4 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
              Começar Teste Gratuito
            </a>
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all rounded-lg"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0A192F] border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#A9B2C3]">
            © 2024 TricoLog. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1F3F6B] rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-['Poppins'] font-medium">Fale Conosco</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-[#A9B2C3] hover:text-white"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-[#0A192F] border border-white/10 rounded-lg text-white placeholder-[#A9B2C3] focus:border-[#6BD6B1] focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 bg-[#0A192F] border border-white/10 rounded-lg text-white placeholder-[#A9B2C3] focus:border-[#6BD6B1] focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  rows="4"
                  className="w-full px-3 py-2 bg-[#0A192F] border border-white/10 rounded-lg text-white placeholder-[#A9B2C3] focus:border-[#6BD6B1] focus:outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-[#0A192F] font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;

