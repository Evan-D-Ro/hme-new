import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Heart,
  Stethoscope,
  Building,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  GraduationCap,
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Play,
  Facebook
} from "lucide-react";

// Import hero images
import heroServicos from "@/assets/hero-servicos-medicos.webp";
import heroCursos from "@/assets/hero-cursos.webp";
import heroHemodialise from "@/assets/hero-hemodialise.webp";
import heroCaptacao from "@/assets/hero-captacao.webp";
import staCasaMachado from "@/assets/sta-casa-machado.png";
import staCasaVeceslau from "@/assets/sta-casa-venceslau.png";
import staCasaMartinopolis from "@/assets/sta-casa-martinopolis.png";
import staCasaStoAmaro from "@/assets/sta-casa-sto-amaro.png";
import ibcc from "@/assets/ibcc.png";
import prefeituraMiracatu from "@/assets/prefeitura-miracatu.png";
import hmRioBrilhante from "@/assets/hm-rio-brilhante.png";
import diocesePrudente from "@/assets/diocese-prudente.webp";
import whatsapp from "@/assets/whatsapp.webp";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clients = [
    {
      name: "Santa Casa de Machado",
      logo: staCasaMachado,
    },
    {
      name: "Santa Casa de Venceslau",
      logo: staCasaVeceslau,
    },
    {
      name: "Santa Casa de Martinópolis",
      logo: staCasaMartinopolis,
    },
    {
      name: "Santa Casa de Santo Amaro",
      logo: staCasaStoAmaro,
    },
    {
      name: "Prefeitura de Miracatu/SP",
      logo: prefeituraMiracatu,
    },
    {
      name: "IBCC - Instituto Brasileiro de Controle do Câncer",
      logo: ibcc,
    },
    {
      name: "Hospital e Maternidade de Rio Brilhante",
      logo: hmRioBrilhante,
    },
    {
      name: "Diocese de Presidente Prudente",
      logo: diocesePrudente,
    },
    // você pode adicionar mais clientes aqui
  ];

  const videos = [
    { title: "HME - Oficina do Trabalho", url: "https://www.youtube.com/embed/fyVpqE4cfSU" },
    { title: "INSTITUCIONAL - Centro de Nefrologia - Rosana/SP", url: "https://www.youtube.com/embed/gsvMJ0G9La4" },
    { title: "AULA MAGNA - PROJETO APRISCO", url: "https://www.youtube.com/embed/83mCg3M3UGM" },
    { title: "AULA MAGNA - PRESIDENTE EPITÁCIO", url: "https://www.youtube.com/embed/WQgmjEVrp9w" },
  ];


  const heroSlides = [
    {
      id: 1,
      image: heroCaptacao,
      title: "Captação de Recursos Federais",
      subtitle: "Orientação administrativa e jurídica voltada à captação de recursos e desenvolvimento de OSCs contribuindo assim, com os anseios destas organizações aos seus públicos.",
      cta: "Saiba mais",
      link: "/servicos#captacao"
    },
    {
      id: 2,
      image: heroServicos,
      title: "Serviços médicos",
      subtitle: "Selecionamos, contratamos e alocamos profissionais médicos e equipes multidisciplinares qualificados para clínicas, hospitais e unidades de saúde.",
      cta: "Saiba mais",
      link: "/servicos#medicos"
    },

    {
      id: 3,
      image: heroHemodialise,
      title: "Soluções completas em Clínicas de Hemodiálise",
      subtitle: "Soluções completas em hemodiálise para o seu município, da aprovação do projeto à Execução dos serviços.",
      cta: "Conheça",
      link: "/servicos#hemodialise"
    },
    {
      id: 4,
      image: heroCursos,
      title: "Capacitação de Servidores de saúde em plataformas governamentais",
      subtitle: "Cursos especializados com instrutores experientes e acompanhamento personalizado.",
      cta: "Conheça nossos cursos",
      link: "/cursos"
    },
  ];

  const handleWhatsAppCursos = () => {
    const message =
      "Olá! Encontrei os cursos de vocês pelo site e gostaria de receber mais informações sobre os disponíveis,modalidade, duração, valores e condições de inscrição.%0A%0AAguardo retorno.%0AObrigado!";

    window.open(`https://wa.me/5518998080836?text=${message}`, "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };



  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Gostaria de saber mais sobre os serviços da HME.", "_blank");
  };



  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Carousel */}
        <section className="relative h-[80vh] sm:h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative h-full flex flex-col justify-center sm:justify-center text-white px-4 sm:px-0 pt-16 sm:pt-0">
                <div className="container text-center">
                  <h1 className="mb-6 animate-fade-in max-w-4xl mx-auto">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-xl mb-4 sm:mb-8 max-w-2xl mx-auto animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" asChild className="animate-slide-up">
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Oferecemos soluções sob medida para sua instituição por meio de nossas 3 áreas de atuação, com foco nos resultados e na satisfação do nosso cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Captação de Recursos</h3>
                  <p className="text-muted-foreground mb-6">
                    Orientação administrativa e jurídica voltada à captação de recursos e desenvolvimento de OSCs contribuindo assim, com os anseios destas organizações aos seus públicos.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#captacao">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Serviços Médicos</h3>
                  <p className="text-muted-foreground mb-6">
                    Selecionamos, contratamos e alocamos profissionais médicos e equipes multidisciplinares qualificados para clínicas, hospitais e unidades de saúde.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#medicos">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover h-full">
                <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-4">Clínicas de Hemodiálise</h3>

                  </div>
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Soluções completas em hemodiálise para o seu município, da aprovação do projeto à Execução dos serviços.
                    </p>
                  </div>
                  {/* botão sempre no final */}
                  <div className="flex justify-center mt-6">
                    <Button variant="outline" asChild>
                      <Link to="/servicos#hemodialise">Saiba Mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Missão, Visão e Valores</h2>
              <p className="text-lg text-muted-foreground">
                Os princípios que guiam nossa atuação há mais de 15 anos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Missão</h3>
                <p>
                  Oferecer soluções em saúde com excelência na gestão, desenvolvendo pessoas e fortalecendo
                  instituições para garantir um <strong>cuidado digno, humano e transformador</strong> a quem mais precisa.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Visão</h3>
                <p className="text-xl">
                  Ser <strong>reconhecida nacionalmente</strong> como uma empresa responsável, comprometida com sua missão e fiel aos seus
                  valores.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Valores</h3>
                <div className="space-y-2 font-telegraf text-xl">
                  <div><strong>Humanização</strong> • <strong>Respeito</strong></div>
                  <div><strong>Integridade</strong> • <strong>Ética</strong></div>
                  <div><strong>Inovação</strong> • <strong>Responsabilidade</strong></div>
                  <div><strong>Eficácia no cuidado de pessoas</strong></div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="mb-4">Clientes que Confiam em Nós</h1>
              <p className="text-lg text-muted-foreground">
                Instituições de todo o Brasil que escolheram a HME Soluções e Saúde
              </p>
            </div>

            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 1000, // tempo entre os slides (ms)
                disableOnInteraction: false, // continua mesmo se o usuário interagir
              }}
              loop={true} // faz voltar pro início
            >
              {clients.map((client, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-36 object-contain mb-4"
                    />
                    <span className="text-sm font-telegraf text-muted-foreground">
                      {client.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>

        {/* Courses CTA */}
        <section className="section-padding gradient-primary text-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Conheça nossos cursos</h2>
                <p className="text-xl mb-8">
                  Cursos práticos para capacitação da equipe administrativa de Hospitais e Instituições nas principais plataformas
                  governamentais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/cursos">Conheça os Cursos</Link>
                  </Button>
                  <Button onClick={handleWhatsAppCursos}
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  >
                    Solicitar Proposta
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">14 Cursos</h3>
                    <p className="text-sm opacity-90">Especializados</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">500+</h3>
                    <p className="text-sm opacity-90">Capacitados</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Acompanhamento</h3>
                    <p className="text-sm opacity-90">Personalizado</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Resultados</h3>
                    <p className="text-sm opacity-90">Mensuráveis</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nossa Atuação</h2>
              <p className="text-lg text-muted-foreground">
                Vídeos e depoimentos sobre nosso trabalho
              </p>
            </div>

            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000, // tempo entre os slides (ms)
                disableOnInteraction: false, // continua mesmo se o usuário interagir
              }}
              loop={true} // faz voltar pro início
            >
              {videos.map((video, i) => (
                <SwiperSlide key={i}>
                  <div className="card-hover overflow-hidden rounded-lg shadow-lg">
                    <div className="relative aspect-video bg-black">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="h-36 flex flex-col justify-center items-center border border-gray-300 rounded-lg">
                      <div className="p-4 text-center max-h-full overflow-y-auto">
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                      </div>
                    </div>



                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="mb-4">Fale Conosco</h1>
              <p className="text-lg text-muted-foreground">
                Entre em contato através dos nossos canais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 card-hover">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <a
                  href="mailto:solucoes@hmesaude.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  solucoes@hmesaude.com.br
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a
                  href="tel:+5518997852512"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  (18) 99785-2512
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-muted-foreground text-sm">
                  Seg. a Sex. das 8h às 18h
                </p>
              </Card>

              <Card className="text-center p-6 card-hover">
                <div className="flex justify-center gap-2 mb-4">
                  <a href="https://www.instagram.com/hmesolucoesesaude/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-8 w-8 text-primary" />
                  </a>
                  <a href="https://www.facebook.com/hmesolucoesesaude" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-8 w-8 text-primary" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCd-bmLoDXJdI6kjbaPvuTNg" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-8 w-8 text-primary" />
                  </a>
                </div>
                <h3 className="font-semibold mb-2">Redes Sociais</h3>
                <p className="text-muted-foreground text-sm">Siga-nos</p>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="px-10 py-8 text-2xl">
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Addresses & Contact Form */}
        <section className="section-padding bg-white">

          <div className="container">

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Addresses */}

              <div>
                <h2 className="mb-8">Nossos Endereços</h2>

                <div className="space-y-6">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Matriz</h3>
                          <p className="text-muted-foreground mb-3">
                            Rua Padre João Goetz, 501<br />
                            Presidente Prudente/SP - CEP: 19061-460
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://maps.google.com/?q=Rua+Padre+João+Goetz,+501,+Presidente+Prudente"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Filial Roraima</h3>
                          <p className="text-muted-foreground mb-3">
                            Av. Ville Roy, 5618, Sala 15<br />
                            Boa Vista/RR - CEP: 69301-000
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://maps.google.com/?q=Av+Ville+Roy,+5618,+Boa+Vista"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Filial Rosana</h3>
                          <p className="text-muted-foreground mb-3">
                            Rua do Estádio, 619, Quadra 108<br />
                            Bairro Primavera, Rosana/SP - CEP: 19274-000
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://maps.google.com/?q=Rua+do+Estádio,+619,+Rosana"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="mb-8">Fale conosco:</h2>

                <Card>
                  <CardContent className="p-9">
                    <form
                      className="space-y-4"
                      action="https://script.google.com/macros/s/AKfycbziZS0zDF2s581wlAksZAT23CkbGRdZuwtATnnrTp8kx9PNx0TUMyJbhA6sIHSjd679/exec"
                      method="POST"
                      target="invisible_iframe"
                      onSubmit={(e) => {
                        if (!formData.consent) {
                          e.preventDefault();
                          toast({
                            title: "Consentimento necessário",
                            description: "Por favor, autorize o uso dos seus dados para prosseguir.",
                            variant: "destructive",
                          });
                          return;
                        }
                        setIsSubmitting(true); // marca como enviando
                      }}>
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={10}
                          placeholder="Como podemos ajudar?"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          Autorizo o uso dos meus dados conforme a Política de Privacidade *
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Contato"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Invisible iframe to prevent page reload */}
                <iframe
                  name="invisible_iframe"
                  style={{ display: "none" }}
                  onLoad={() => {
                    if (formData.name || formData.email || formData.phone || formData.message) {
                      toast({
                        title: "Contato enviado!",
                        description: "Nossa equipe entrará em contato em breve.",
                      });
                      setFormData({ name: "", email: "", phone: "", message: "", consent: false });
                      setIsSubmitting(false); // volta ao estado normal

                    }
                  }}
                />

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5518997852512?text=Olá! Gostaria de saber mais sobre os serviços da HME."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50"
      >
        <img
          src={whatsapp} // coloque a logo na pasta /public
          alt="WhatsApp"
          className="w-20 h-20 hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default Index;