import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, Award, TrendingUp, Building, Heart } from "lucide-react";

const QuemSomos = () => {
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
                  <strong>Fortalecer instituições, transformar realidades.</strong>
                  A <strong>HME Soluções e Saúde</strong> é uma empresa brasileira de serviços e consultoria com mais de 15 anos de atuação,
                  especializada no fortalecimento institucional de organizações públicas, privadas, filantrópicas e religiosas por meio da gestão pública,
                  da gestão de saúde e do apoio técnico ao terceiro setor.
                </p>

                <p className="mb-6">
                  Com sede em <strong>Presidente Prudente (SP)</strong> e filiais em <strong>Rosana (SP)</strong> e <strong>Boa Vista (RR)</strong>,
                  a HME atua em diversas regiões do Brasil, levando soluções completas e personalizadas para quem enfrenta os desafios da administração pública
                  e da assistência à saúde com seriedade e propósito.
                </p>

                <p className="mb-6">
                  Além de consultorias, a empresa presta serviços médicos especializados, clínicas de hemodiálise, treinamentos em plataformas governamentais
                  como <strong>Transferegov</strong>, <strong>Sem Papel</strong>, <strong>InvestSUS</strong> e outras.
                  Somos parceiros de caminhada, atuando lado a lado com prefeituras, hospitais, organizações sociais e instituições religiosas que desejam
                  funcionar de forma mais técnica, transparente e sustentável — respeitando as legislações vigentes e colocando as pessoas no centro das decisões.
                </p>

                <p>
                  <strong>Soluções que unem autoridade técnica e compromisso social.</strong>
                  Na HME, acreditamos que saúde pública e políticas sociais só são eficazes quando sustentadas por gestão qualificada, legalidade, planejamento e acompanhamento contínuo.
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
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Captação de Recursos Federais</h3>
                  <p className="mb-6 text-muted-foreground">
                    Diagnóstico institucional, reorganização administrativa e elaboração
                    de projetos para captação de recursos federais.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#captacao">Saiba mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Serviços Médicos</h3>
                  <p className="mb-6 text-muted-foreground">
                    Alocação e gestão de equipes médicas especializadas,
                    com foco na qualidade do atendimento e eficiência operacional.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#medicos">Saiba mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Clínicas de Hemodiálise</h3>
                  <p className="mb-6 text-muted-foreground">
                    Soluções completas para implantação e gestão de clínicas
                    de hemodiálise, desde o projeto até a operação.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#hemodialise">Saiba mais</Link>
                  </Button>
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
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <h3 className="mb-4 text-primary">Missão</h3>
                <p>
                  Fortalecer instituições públicas e privadas por meio de soluções
                  especializadas em gestão, sempre priorizando a legalidade e o
                  bem-estar das pessoas.
                </p>
              </Card>

              <Card className="text-center p-8">
                <h3 className="mb-4 text-primary">Visão</h3>
                <p>
                  Ser referência nacional em soluções para fortalecimento institucional,
                  transformando realidades e impactando positivamente a sociedade.
                </p>
              </Card>

              <Card className="text-center p-8">
                <h3 className="mb-4 text-primary">Valores</h3>
                <div className="space-y-2 font-telegraf">
                  <div>Humanização</div>
                  <div>Respeito</div>
                  <div>Integridade</div>
                  <div>Ética</div>
                  <div>Inovação</div>
                  <div>Responsabilidade</div>
                  <div>Eficácia no cuidado</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Pronto para transformar sua instituição?</h2>
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