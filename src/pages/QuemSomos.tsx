import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, Award, TrendingUp, Building, Heart, Stethoscope, BarChart3, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const QuemSomos = () => {
  useEffect(() => {
    // animação de scroll suave
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 800;
    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, start - start * ease);
      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };
    requestAnimationFrame(animateScroll);
  }, []);


  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Fortalecer instituições, transformar realidades
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Há mais de 15 anos oferecendo soluções especializadas que
              fortalecem instituições públicas e privadas em todo o Brasil
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid gap-12 items-center">
              {/* Texto */}
              <div>
                <h2 className="mb-6">Nossa Trajetória</h2>
                <p className="text-lg mb-6">
                  <strong>Fortalecer instituições, transformar realidades.</strong><br />
                </p>
                <p className="text-lg mb-6">
                  A <strong>HME Soluções e Saúde</strong> é uma empresa brasileira de consultoria e serviços com mais de 15 anos de experiência.
                  Atuamos no fortalecimento de organizações públicas, privadas, filantrópicas e religiosas por meio de gestão pública,
                  gestão em saúde e apoio técnico ao terceiro setor.
                </p>

                <p className="mb-6">
                  Com sede em <strong>Presidente Prudente (SP)</strong> e filiais em <strong>Rosana (SP)</strong> e <strong>Boa Vista (RR)</strong>,
                  estamos presentes em diversas regiões do país. Levamos soluções completas e personalizadas para quem enfrenta os desafios
                  da administração pública e da assistência em saúde com seriedade e propósito.
                </p>

                <p className="mb-6">
                  Além da consultoria, oferecemos serviços médicos especializados, clínicas de hemodiálise e treinamentos em plataformas
                  governamentais como <strong>Transferegov</strong>, <strong>Sem Papel</strong>, <strong>InvestSUS</strong>, entre outras.
                  Atuamos lado a lado com prefeituras, hospitais, organizações sociais e instituições religiosas que buscam trabalhar de forma
                  mais técnica, transparente e sustentável — sempre respeitando a legislação e colocando as pessoas no centro das decisões.
                </p>

                <p>
                  <strong>Soluções que unem conhecimento técnico e compromisso social.</strong><br />
                  Na HME acreditamos que a saúde pública e as políticas sociais só alcançam resultados reais quando baseadas em gestão qualificada,
                  legalidade, planejamento e acompanhamento constante.
                </p>
              </div>

              <div className="items-center justify-center flex">
                <Button asChild size="lg">
                  <Link to="/servicos">Conheça nossos serviços</Link>
                </Button>
              </div>
              {/* Cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">15+ Anos</h3>
                    <p className="text-sm text-muted-foreground">de experiência e excelência</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">100+</h3>
                    <p className="text-sm text-muted-foreground">instituições atendidas</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">500+</h3>
                    <p className="text-sm text-muted-foreground">profissionais qualificados</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">R$ 100M+</h3>
                    <p className="text-sm text-muted-foreground">em recursos captados</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Three Fronts Section */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Três Grandes Frentes de Atuação</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nossa expertise está organizada em três áreas principais,
                oferecendo soluções completas e integradas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="card-hover flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Topo: ícone e título */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Captação de Recursos Federais</h3>
                  </div>

                  {/* Meio: texto centralizado verticalmente */}
                  <div className="flex-grow flex items-center justify-center text-center">
                    <p className="text-muted-foreground max-w-xs">
                      Diagnóstico institucional, reorganização administrativa e elaboração
                      de projetos para captação de recursos federais.
                    </p>
                  </div>

                  {/* Base: botão fixado embaixo */}
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" asChild>
                      <Link to="/servicos#captacao">Saiba mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="card-hover flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Stethoscope className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Serviços Médicos</h3>
                  </div>

                  <div className="flex-grow flex items-center justify-center text-center">
                    <p className="text-muted-foreground max-w-xs">
                      Alocação e gestão de equipes médicas especializadas,
                      com foco na qualidade do atendimento e eficiência operacional.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" asChild>
                      <Link to="/servicos#medicos">Saiba mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="card-hover flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Clínicas de Hemodiálise</h3>
                  </div>

                  <div className="flex-grow flex items-center justify-center text-center">
                    <p className="text-muted-foreground max-w-xs">
                      Soluções completas para implantação e gestão de clínicas
                      de hemodiálise, desde o projeto até a operação.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" asChild>
                      <Link to="/servicos#hemodialise">Saiba mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-white">
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
                  Oferecer soluções em saúde com excelência na gestão e no desenvolvimento de pessoas para um atendimento que considere <strong>aspectos subjetivos, emocionais e sociais</strong> dos pacientes, além dos aspectos técnicos.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Visão</h3>
                <p className="text-xl">
                  Ser reconhecida como uma organização responsável, comprometida com sua missão e fiel aos seus valores, promovendo transformações positivas e sustentáveis nas instituições e na sociedade.
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



        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Deseja transformar a realidade de sua instituição?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua
              organização a alcançar novos patamares de excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/fale-conosco">Fale Conosco</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/5518998080836?text=Olá! Gostaria de saber mais sobre os serviços da HME.", "_blank")}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;