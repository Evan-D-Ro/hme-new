import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  Video,
  MapPin,
  Building
} from "lucide-react";

const Cursos = () => {
  const handleContactForm = () => {
    window.location.href = "/fale-conosco";
  };

  const courses = [
    {
      id: "investsus",
      title: "InvestSUS",
      description:
        "Capacitação completa para utilização da plataforma InvestSUS, sistema do Ministério da Saúde para investimentos em saúde.",
      category: "Plataformas Governamentais",
      format: "Híbrido / Presencial",
      topics: [
        "Navegação no sistema InvestSUS",
        "Elaboração de propostas de investimento",
        "Acompanhamento de emendas, repasses e saldos",
        "Monitoramento de recursos do SUS",
      ],
    },
    {
      id: "sempapel",
      title: "Sem Papel",
      description:
        "Treinamento para uso da plataforma Sem Papel, sistema de gestão documental do governo federal.",
      category: "Gestão Documental",
      format: "Híbrido / Presencial",
      topics: [
        "Utilização da plataforma estadual",
        "Tramitação digital de documentos",
        "Organização de fluxos e propostas",
        "Produtividade e rastreabilidade de processos",
      ],
    },
    {
      id: "cnes",
      title: "CNES - Cadastro Nacional de Estabelecimentos de Saúde",
      description:
        "Curso completo sobre o sistema CNES, desde o cadastramento até a gestão de estabelecimentos de saúde.",
      category: "Cadastros Nacionais",
      format: "Híbrido / Presencial",
      topics: [
        "Preenchimento correto do CNES",
        "Atualização cadastral de estabelecimentos",
        "Regularidade institucional perante o Ministério da Saúde",
        "Acesso a novos recursos federais",
      ],
    },
    {
      id: "saips",
      title: "SAIPS - Sistema de Apoio à Implementação de Políticas em Saúde",
      description:
        "Capacitação para utilização do SAIPS na implementação e acompanhamento de políticas públicas de saúde.",
      category: "Políticas Públicas",
      format: "Híbrido / Presencial",
      topics: [
        "Solicitação de custeio, habilitação e credenciamento",
        "Operação técnica do sistema SAIPS",
        "Estruturação de propostas alinhadas às normativas",
        "Ampliação da oferta assistencial",
      ],
    },
    {
      id: "tabela-sus",
      title: "Tabela SUS Paulista",
      description:
        "Treinamento específico sobre a Tabela SUS do Estado de São Paulo e suas particularidades.",
      category: "Sistemas Estaduais",
      format: "Híbrido / Presencial",
      topics: [
        "Envio de produção ambulatorial",
        "Integração de dados com o Ministério da Saúde",
        "Repasse complementar estadual",
        "Revisão e ampliação do teto orçamentário",
      ],
    },
    {
      id: "tabnet",
      title: "TABNET / DATASUS",
      description:
        "Curso para utilização das ferramentas TABNET e sistemas DATASUS para análise de dados em saúde.",
      category: "Análise de Dados",
      format: "Híbrido / Presencial",
      topics: [
        "Consulta a bases de dados do SUS",
        "Geração de relatórios e indicadores",
        "Análise de informações para gestão",
        "Planejamento e avaliação de políticas públicas",
      ],
    },
    {
      id: "piso-enfermagem",
      title: "Piso da Enfermagem",
      description:
        "Capacitação sobre a legislação e implementação do piso salarial da enfermagem.",
      category: "Recursos Humanos",
      format: "Híbrido / Presencial",
      topics: [
        "Envio de informações ao Ministério da Saúde",
        "Cumprimento das exigências legais",
        "Utilização correta dos sistemas",
        "Transparência nos repasses da categoria",
      ],
    },
    {
      id: "planos-trabalho",
      title: "Elaboração de Planos de Trabalho",
      description:
        "Metodologia para elaboração de planos de trabalho para captação de recursos federais.",
      category: "Captação de Recursos",
      format: "Híbrido / Presencial",
      topics: [
        "Estruturação de planos conforme normas",
        "Definição de metas qualitativas e quantitativas",
        "Adequação às exigências dos órgãos gestores",
        "Facilidade na análise e aprovação de propostas",
      ],
    },
    {
      id: "ciha",
      title: "CIHA01 e CIHA02",
      description:
        "Treinamento nos sistemas CIHA01 e CIHA02 para comunicação de internação hospitalar.",
      category: "Sistemas Hospitalares",
      format: "Híbrido / Presencial",
      topics: [
        "Coleta de dados hospitalares",
        "Alimentação correta dos sistemas",
        "Monitoramento de fluxo de pacientes",
        "Gestão de produção e financiamento hospitalar",
      ],
    },
    {
      id: "sihd",
      title: "SIHD 1 e SIHD 2",
      description:
        "Capacitação nos sistemas SIHD para gestão de informações de hemodiálise.",
      category: "Hemodiálise",
      format: "Híbrido / Presencial",
      topics: [
        "Operação do sistema descentralizado",
        "Registro e cálculo de procedimentos hospitalares",
        "Organização e validação de dados de internação",
        "Controle de custos e produção hospitalar",
      ],
    },
    {
      id: "bpa",
      title: "BPA - Boletim de Produção Ambulatorial",
      description:
        "Curso sobre preenchimento e gestão do BPA no sistema de informações ambulatoriais.",
      category: "Produção Ambulatorial",
      format: "Híbrido / Presencial",
      topics: [
        "Preenchimento adequado dos atendimentos",
        "Registro confiável para repasses",
        "Controle da produção ambulatorial",
        "Monitoramento da assistência prestada",
      ],
    },
    {
      id: "fpo",
      title: "FPO - Ficha de Programação Orçamentária",
      description:
        "Treinamento para elaboração e gestão da Ficha de Programação Orçamentária.",
      category: "Orçamento",
      format: "Híbrido / Presencial",
      topics: [
        "Programação de atendimentos ambulatoriais",
        "Alinhamento de metas físicas e orçamentárias",
        "Planejamento estratégico dos serviços",
        "Eficiência na execução de recursos",
      ],
    },
    {
      id: "sia",
      title: "SIA - Sistema de Informações Ambulatoriais",
      description:
        "Curso completo sobre o SIA, desde o cadastramento até a análise de produção ambulatorial.",
      category: "Sistemas de Informação",
      format: "Híbrido / Presencial",
      topics: [
        "Registro de dados ambulatoriais",
        "Organização de informações para regulação",
        "Planejamento local de serviços",
        "Conformidade com as normas do SUS",
      ],
    },
    {
      id: "portais-financas",
      title: "Portal de Finanças SP e Fundo Nacional de Saúde",
      description:
        "Capacitação para uso dos portais de finanças e gestão de recursos do SUS.",
      category: "Gestão Financeira",
      format: "Híbrido / Presencial",
      topics: [
        "Consulta a repasses federais e estaduais",
        "Monitoramento de contas e saldos",
        "Transparência na gestão dos recursos",
        "Apoio à contabilidade e ao controle interno",
      ],
    },
  ];


  const handleWhatsAppCursos = () => {
    const message =
      "Olá! Encontrei os cursos de vocês pelo site e gostaria de receber mais informações sobre os disponíveis,modalidade, duração, valores e condições de inscrição.%0A%0AAguardo retorno.%0AObrigado!";

    window.open(`https://wa.me/5518998080836?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Capacitações Especializadas em Plataformas Governamentais
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Cursos técnicos ministrados por profissionais experientes e
              com possibilidade de turmas exclusivas para sua instituição.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">A Importância da Formação Técnica</h2>
                <p className="text-lg mb-6">
                  Na HME Soluções e Saúde, acreditamos que nenhuma instituição avança sem conhecimento, pessoas
                  qualificadas e preparadas à gestão de projetos, passando a incorporar todo arcabouço de estratégias,
                  objetivos, metas, avaliações de desempenho, avaliações de resultados, entre outros.
                </p>
                <p className="text-lg mb-6">
                  Por isso, oferecemos cursos e treinamentos especializados para equipes administrativas e técnicas de
                  unidades de saúde, com foco em plataformas, sistemas e ferramentas essenciais ao funcionamento legal,
                  financeiro e assistencial de hospitais, secretarias municipais e entidades que atuam com recursos do
                  SUS.
                  Nossos cursos são conduzidos por profissionais experientes, com linguagem acessível e abordagem prática,
                  voltada à realidade de quem atua diariamente nos bastidores da saúde pública.
                </p>
                <Button size="lg" onClick={handleContactForm}>
                  Solicitar Proposta
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="card-hover text-center p-6">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">14 Cursos</h3>
                  <p className="text-sm text-muted-foreground">Especializados</p>
                </Card>

                <Card className="card-hover text-center p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">500+</h3>
                  <p className="text-sm text-muted-foreground">Profissionais Capacitados</p>
                </Card>

                <Card className="card-hover text-center p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Acompanhamento</h3>
                  <p className="text-sm text-muted-foreground">Personalizado</p>
                </Card>

                <Card className="card-hover text-center p-6">
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Formato</h3>
                  <p className="text-sm text-muted-foreground">Presencial/Híbrido</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nossos Cursos</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Capacitação especializada nas principais plataformas governamentais
                utilizadas na gestão pública e área da saúde
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {courses.map((course) => (
                <AccordionItem key={course.id} value={course.id}>
                  <Card className="card-hover">
                    <AccordionTrigger className="px-8 py-6 hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-6 text-left">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">
                              {course.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge variant="secondary">{course.category}</Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardContent className="px-8 pb-6 pt-0">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* O que você aprenderá */}
                          <div>
                            <h4 className="font-semibold mb-4">O que você aprenderá:</h4>
                            <ul className="space-y-2">
                              {course.topics.map((topic, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4">Detalhes do curso:</h4>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm">Acompanhamento personalizado</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="text-sm">Instrutores experientes</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">Formato: {course.format}</span>
                              </div>
                            </div>

                            <div className="mt-6">
                              <Button onClick={handleWhatsAppCursos} className="w-full">
                                Solicitar Proposta
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Capacite sua equipe</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Invista na capacitação da sua equipe e melhore os resultados
              da sua instituição. Solicite uma proposta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/5518998080836?text=Olá! Gostaria de saber mais sobre os cursos da HME.", "_blank")}
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

export default Cursos;