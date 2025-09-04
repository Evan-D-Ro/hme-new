import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Sobre a HME",
      items: [
        {
          question: "Há quanto tempo a HME atua no mercado?",
          answer: "A HME Soluções e Saúde atua há mais de 15 anos no mercado, oferecendo soluções especializadas em captação de recursos, serviços médicos, clínicas de hemodiálise, capacitações e apoio ao terceiro setor."
        },
        {
          question: "Em quais regiões a HME possui atuação?",
          answer: "Atuamos em todo o território nacional, com sede em Presidente Prudente/SP e filiais em Boa Vista/RR e Rosana/SP. Nossa equipe está preparada para atender clientes em qualquer região do Brasil."
        },
        {
          question: "Quais são os diferenciais da HME?",
          answer: "Nossos principais diferenciais são: mais de 15 anos de experiência, foco na legalidade, equipe especializada com excelência em gestão, diversas instituições transformadas e atendimento personalizado para cada cliente."
        }
      ]
    },
    {
      title: "Captação de Recursos",
      items: [
        {
          question: "Como funciona o processo de captação de recursos federais?",
          answer: "Nosso processo inclui: diagnóstico institucional, reorganização administrativa (quando necessário), elaboração e submissão de projetos por meio da plataforma Transfere gov.br, acompanhamento da execução e prestação de contas técnica e financeira."
        },
        {
          question: "Quais tipos de recursos podem ser captados?",
          answer: "Trabalhamos com diversos tipos de recursos federais para saúde, educação, assistência social e infraestrutura, através de emendas parlamentares, editais e convênios."
        },
        {
          question: "Qual é o prazo médio para aprovação de um projeto?",
          answer: "O prazo varia conforme o tipo de recurso e órgão responsável, podendo variar de 60 dias a 12 meses. Acompanhamos todo o processo e mantemos o cliente informado sobre o andamento."
        },
        {
          question: "A HME garante a aprovação dos projetos?",
          answer: "Não é possível garantir 100% de aprovação, pois depende de diversos fatores externos. No entanto, nossos projetos têm alto índice de aprovação devido à nossa experiência e metodologia consolidada."
        }
      ]
    },
    {
      title: "Serviços Médicos",
      items: [
        {
          question: "Quais serviços médicos a HME oferece?",
          answer: "Fornecemos equipes multidisciplinares completas e treinadas como: médicos de diversas especialidades, enfermeiros, técnicos de enfermagem, fisioterapeutas, nutricionistas e outros profissionais de saúde conforme a necessidade da unidade de saúde."
        },
        {
          question: "Como é feita a seleção dos profissionais?",
          answer: "Todos os profissionais passam por rigoroso processo seletivo, incluindo análise curricular, entrevistas, comprovação de registros profissionais e referências. Priorizamos experiência e qualificação técnica."
        },
        {
          question: "A HME oferece cobertura de escalas?",
          answer: "Sim, oferecemos cobertura completa de escalas, incluindo plantões, férias, licenças e ausências, garantindo continuidade do atendimento médico."
        }
      ]
    },
    {
      title: "Clínicas de Hemodiálise",
      items: [
        {
          question: "A HME desenvolve projetos completos de hemodiálise?",
          answer: "Sim, oferecemos soluções completas desde o projeto técnico e arquitetônico até a operação da clínica, incluindo adequações às normas da ANVISA e Ministério da Saúde, aquisição de equipamentos, processos jurídicos e administrativos, gestão de pessoas e treinamento de equipe."
        },
        {
          question: "Vocês trabalham com clínicas já existentes?",
          answer: "Sim, também oferecemos consultoria para clínicas já em funcionamento, auxiliando na otimização de processos específicos, adequação de normas e melhoria de indicadores."
        },
        {
          question: "A HME tem clínica própria?",
          answer: "Sim, possuímos dois centros de nefrologia próprios, localizados em Primavera/SP no distrito de Rosana e em Boa Vista/RR, que servem como referência em cuidado e tratamento para a comunidade local."
        }
      ]
    },
    {
      title: "Cursos",
      items: [
        {
          question: "Os cursos da HME são presenciais ou online?",
          answer: "Oferecemos cursos nos formatos presencial e híbrido, adaptando-nos à necessidade de cada cliente e à especificidade do conteúdo."
        },
        {
          question: "É possível organizar turmas exclusivas?",
          answer: "Sim, organizamos turmas exclusivas para instituições que desejam capacitar sua equipe de forma personalizada, com conteúdo adaptado às suas necessidades específicas."
        },
        {
          question: "Quem pode participar do curso?",
          answer: "Nossos cursos são voltados para profissionais de saúde, gestores de instituições de saúde públicas, privadas e filantrópicas, equipes técnicss e demais interessados em aprimorar seus conhecimentos na área de saúde e gestão."
        }
      ]
    },
    {
      title: "Contato e Propostas",
      items: [
        {
          question: "Como solicitar uma proposta?",
          answer: "Você pode solicitar uma proposta através do nosso site, WhatsApp, e-mail ou telefone. Nossa equipe entrará em contato em até 24 horas para entender suas necessidades."
        },
        {
          question: "A proposta é personalizada para cada instituição?",
          answer: "Sim. Cada proposta da HME é elaborada de forma personalizada, considerando o porte da instituição, suas necessidades específicas e os objetivos estratégicos que deseja alcançar."
        },
        {
          question: "Como é realizado uma visita técnica ou diagnóstico da instituição?",
          answer: "Realizamos visitas técnicas presenciais ou virtuais, dependendo da localização e disponibilidade. Durante a visita, nossa equipe avalia as necessidades, infraestrutura e processos da instituição para oferecer a melhor solução."
        }
      ]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Tenho uma dúvida que não encontrei no FAQ.", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Dúvidas Frequentes
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Encontre respostas para as principais questões sobre nossos serviços.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="mb-6 text-primary">{category.title}</h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={`${categoryIndex}-${itemIndex}`}
                        value={`${categoryIndex}-${itemIndex}`}
                      >
                        <Card className="card-hover">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <h3 className="text-left font-medium">{item.question}</h3>
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardContent className="px-6 pb-4 pt-0">
                              <p className="text-muted-foreground">{item.answer}</p>
                            </CardContent>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-muted">
          <div className="container">
            <Card className="max-w-2xl mx-auto text-center p-8">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="mb-4">Não encontrou sua resposta?</h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para esclarecer qualquer dúvida específica
                sobre nossos serviços. Entre em contato conosco!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleWhatsApp} className="whatsapp-button">
                  WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;