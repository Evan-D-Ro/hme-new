import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PoliticaPrivacidade = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="hero-overlay text-white section-padding">
                    <div className="container text-center">
                        <h1 className="mb-6">Política de Privacidade</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Saiba como tratamos seus dados pessoais e garantimos sua segurança
                            conforme a LGPD.
                        </p>
                    </div>
                </section>

                {/* Conteúdo */}
                <section className="section-padding bg-white">
                    <div className="container max-w-4xl mx-auto space-y-8 text-justify">

                        <div>
                            <h2 className="text-primary mb-2">1. Coleta de Informações</h2>
                            <p>
                                Coletamos dados pessoais fornecidos voluntariamente por você em
                                nossos formulários de contato: nome, e-mail, telefone, instituição,
                                cidade, estado, assunto e mensagem.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-primary mb-2">2. Uso das Informações</h2>
                            <p>
                                Os dados coletados são utilizados exclusivamente para responder
                                às suas solicitações, enviar propostas, prestar suporte e manter
                                nosso relacionamento.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-primary mb-2">3. Armazenamento e Segurança</h2>
                            <p>
                                As informações são armazenadas em planilhas seguras no Google
                                Sheets, com acesso restrito à nossa equipe autorizada.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-primary mb-2">4. Compartilhamento</h2>
                            <p>
                                Não compartilhamos seus dados pessoais com terceiros, exceto em
                                casos de exigência legal ou regulatória.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-primary mb-2">5. Direitos do Titular</h2>
                            <p>
                                Conforme a Lei Geral de Proteção de Dados (LGPD), você pode
                                solicitar acesso, correção ou exclusão dos seus dados, bem como
                                revogar seu consentimento a qualquer momento.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-primary mb-2">6. Contato</h2>
                            <p>
                                Em caso de dúvidas sobre esta Política de Privacidade, entre em
                                contato pelo nosso <a href="/fale-conosco" className="text-primary underline">formulário</a>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-muted">
                    <div className="container">
                        <Card className="max-w-2xl mx-auto text-center p-8">
                            <h2 className="mb-4">Precisa de mais informações?</h2>
                            <p className="text-muted-foreground mb-8">
                                Nossa equipe está disponível para esclarecer qualquer dúvida
                                sobre o uso de seus dados pessoais.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="whatsapp-button">
                                    <a
                                        href="https://wa.me/5518998080836?text=Olá! Tenho uma dúvida sobre a Política de Privacidade."
                                        target="_blank"
                                    >
                                        WhatsApp
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a href="/fale-conosco">Fale Conosco</a>
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

export default PoliticaPrivacidade;
